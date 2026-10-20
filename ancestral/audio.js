// Original procedural score and effects. No downloads, tracking, or audio dependencies.
export function createAudio(){
 const key='ancestral-audio-v1';
 let settings={music:true,effects:true,volume:40};
 try{const saved=JSON.parse(localStorage.getItem(key));if(saved&&typeof saved.music==='boolean'&&typeof saved.effects==='boolean'&&Number.isFinite(saved.volume))settings={music:saved.music,effects:saved.effects,volume:Math.max(0,Math.min(100,saved.volume))};}catch{}
 let ctx=null,musicGain=null,effectsGain=null,interval=null,next=0,step=0,ready=false;
 const voices=new Set(),beat=60/88;
 const frequency=midi=>440*2**((midi-69)/12);
 function busVolumes(){if(!ctx)return;const t=ctx.currentTime;musicGain.gain.setTargetAtTime(settings.music?settings.volume/100*.65:0,t,.04);effectsGain.gain.setTargetAtTime(settings.effects?settings.volume/100*.8:0,t,.02);}
 function tone(midi,start,duration,level=.08,type='triangle',music=false,attack=.015){
  const osc=ctx.createOscillator(),envelope=ctx.createGain(),filter=ctx.createBiquadFilter();
  osc.type=type;osc.frequency.value=frequency(midi);filter.type='lowpass';filter.frequency.value=music?1800:4200;filter.Q.value=.5;
  envelope.gain.setValueAtTime(0,start);envelope.gain.linearRampToValueAtTime(level,start+Math.min(attack,duration/3));envelope.gain.exponentialRampToValueAtTime(.0001,start+duration);
  osc.connect(filter);filter.connect(envelope);envelope.connect(music?musicGain:effectsGain);osc.start(start);osc.stop(start+duration+.03);
  const voice={osc,music};voices.add(voice);osc.onended=()=>{voices.delete(voice);osc.disconnect();filter.disconnect();envelope.disconnect();};
 }
 function noise(start,duration,level,music=false){
  const samples=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*duration),ctx.sampleRate),data=samples.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*(1-i/data.length);
  const source=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();source.buffer=samples;filter.type='highpass';filter.frequency.value=music?1700:900;
  gain.gain.setValueAtTime(level,start);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);source.connect(filter);filter.connect(gain);gain.connect(music?musicGain:effectsGain);source.start(start);source.onended=()=>{source.disconnect();filter.disconnect();gain.disconnect();};
 }
 function score(index,time){
  // D minor / B flat / F / C: slow strings, brass, bass, ostinato and timpani.
  const chords=[[50,53,57],[46,50,53],[53,57,60],[48,52,55]],bar=Math.floor(index/8),chord=chords[bar%4],part=index%8;
  if(part===0){chord.forEach((note,i)=>tone(note,time,beat*4.2,.10,'sawtooth',true,.35+i*.025));tone(chord[0]-12,time,beat*3.8,.16,'sine',true,.04);tone(34,time,.5,.18,'sine',true);}
  if(part===4)tone(38,time,.35,.1,'sine',true);
  tone(chord[[0,1,2,1][part%4]]+12,time,beat*.7,.048,'triangle',true,.01);
  if(part%2===0&&bar%8>=2){const melody=[74,77,81,79,77,74,72,69,70,74,77,74,72,76,79,76];tone(melody[(Math.floor(index/2))%melody.length],time,beat*1.6,.055,'triangle',true,.08);}
  if(part===0&&bar%4===0)noise(time,.7,.035,true);
 }
 function stopMusic(){if(interval!==null){clearInterval(interval);interval=null;}if(ctx){for(const v of voices)if(v.music){try{v.osc.stop();}catch{}}}}
 function startMusic(){if(!ready||!settings.music||document.hidden||ctx.state!=='running'||interval!==null)return;next=ctx.currentTime+.08;
  const schedule=()=>{if(ctx.state!=='running')return;while(next<ctx.currentTime+.18){score(step,next);step=(step+1)%128;next+=beat/2;}};schedule();interval=setInterval(schedule,80);
 }
 async function unlock(){
  if(!ctx){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return false;ctx=new Audio();musicGain=ctx.createGain();effectsGain=ctx.createGain();const limiter=ctx.createDynamicsCompressor();limiter.threshold.value=-16;limiter.knee.value=18;limiter.ratio.value=6;musicGain.connect(limiter);effectsGain.connect(limiter);limiter.connect(ctx.destination);busVolumes();}
  try{if(ctx.state==='suspended')await ctx.resume();ready=ctx.state==='running';startMusic();return ready;}catch{return false;}
 }
 function set(update){settings={...settings,...update};settings.volume=Math.max(0,Math.min(100,Number(settings.volume)||0));try{localStorage.setItem(key,JSON.stringify(settings));}catch{}busVolumes();if(!settings.music)stopMusic();else startMusic();}
 function play(kind){if(!ready||!settings.effects||ctx.state!=='running')return;const t=ctx.currentTime+.01;
  if(kind==='roll'){for(let i=0;i<7;i++){tone(58+i%3*4,t+i*.045,.07,.12,'square');noise(t+i*.045,.025,.06);}return;}
  if(kind==='success'){[74,77,81].forEach((n,i)=>tone(n,t+i*.075,.35,.15));return;}
  if(kind==='hurt'){tone(42,t,.35,.25,'sawtooth');tone(35,t+.08,.4,.15,'sine');return;}
  if(kind==='attack'){noise(t,.18,.3);tone(55,t,.16,.2,'sawtooth');return;}
  if(kind==='heal'){[62,69,74,77].forEach((n,i)=>tone(n,t+i*.1,.6,.13,'sine'));return;}
  if(kind==='enemy'){[45,46,38].forEach((n,i)=>tone(n,t+i*.12,.4,.16,'sawtooth'));return;}
  if(kind==='victory'){[62,65,69,74,72,74,77,81].forEach((n,i)=>tone(n,t+i*.17,.7,.17,i%2?'triangle':'sawtooth'));return;}
  if(kind==='defeat'){[62,60,57,50].forEach((n,i)=>tone(n,t+i*.28,.9,.13,'triangle'));}
 }
 document.addEventListener('visibilitychange',()=>{if(!ctx||!ready)return;if(document.hidden){stopMusic();ctx.suspend().catch(()=>{});}else ctx.resume().then(startMusic).catch(()=>{});});
 window.addEventListener('pagehide',stopMusic);
 return {unlock,set,play,get settings(){return {...settings};},get supported(){return !!(window.AudioContext||window.webkitAudioContext);}};
}
