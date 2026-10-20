import * as G from "./action-engine.js";
import { beginGuidance, assistStep, objective } from "./guidance.js";
import { createActionWorld } from "./action-world.js";
import { createAudio } from "./audio.js";
import { cards, levels } from "./data.js";
const $ = (s) => document.querySelector(s),
  asset = (p) => globalThis.__INMUNO_ASSETS__?.[p] || p,
  esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
const storage = "inmuno-guided-v3",
  audio = createAudio(),
  dialog = $("#action-dialog"),
  world = createActionWorld($("#action-world"));
let saved = null;
try {
  saved = G.restore(JSON.parse(localStorage.getItem(storage)));
} catch {}
let state = saved || G.newRun(1, true),
  paused = true,
  modal = "",
  yaw = 0,
  pitch = 0.14,
  level = state.level,
  keys = new Set(),
  fire = false,
  jump = false,
  mobileX = 0,
  mobileY = 0,
  last = 0,
  hudLast = 0,
  toastTimer,
  wrongAt = 0,
  pinned = null,
  lookDrag = null,
  stickPointer = null,
  ready = false,
  guide = { following: false, route: [] };
const coarse = matchMedia("(pointer:coarse)").matches;
document.body.classList.toggle("touch", coarse);
if (!world) {
  show(
    "unsupported",
    '<h2 id="dialog-title">Necesitas un navegador con WebGL 2</h2><p>Abre el archivo con Chrome, Edge o Firefox y activa la aceleración gráfica para jugar al modo de acción 3D.</p><div class="modal-footer"><a href="' +
      cardURL() +
      '">Abrir el modo de cartas</a></div>',
  );
} else {
  renderHUD();
  welcome();
  requestAnimationFrame(frame);
}
function cardURL() {
  return globalThis.__INMUNO_OFFLINE__ ? "MODO-CARTAS.html" : "cartas.html";
}
function save() {
  saved = G.restore(G.checkpoint(state));
  try {
    localStorage.setItem(storage, JSON.stringify(G.checkpoint(state)));
  } catch {
    toast("El navegador no permite guardar. Usa Pausa → Descargar progreso.");
  }
}
function clearInput() {
  keys.clear();
  fire = false;
  jump = false;
  mobileX = mobileY = 0;
  $("#stick").style.transform = "";
}
function stopVoice() {
  globalThis.speechSynthesis?.cancel();
  audio.duck(false);
}
function speak(text) {
  if (!globalThis.speechSynthesis)
    return toast(
      "La lectura en voz alta no está disponible en este navegador.",
    );
  stopVoice();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "es-ES";
  u.rate = 0.9;
  u.onstart = () => audio.duck(true);
  u.onend = u.onerror = () => audio.duck(false);
  speechSynthesis.speak(u);
}
function toast(text) {
  $("#notification").textContent = text;
  $("#notification").classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(
    () => $("#notification").classList.remove("visible"),
    4300,
  );
}
function show(type, html) {
  paused = true;
  clearInput();
  modal = type;
  document.exitPointerLock?.();
  $("#modal-content").innerHTML = html;
  if (!dialog.open) dialog.showModal();
}
function close() {
  dialog.close();
  modal = "";
  paused = false;
  clearInput();
  stopVoice();
  document.body.classList.add("playing");
  last = performance.now();
}
dialog.addEventListener("cancel", (e) => {
  e.preventDefault();
  if (
    [
      "welcome",
      "quiz",
      "respawn",
      "victory",
      "unsupported",
      "trailer",
      "brief",
      "badge",
    ].includes(modal)
  )
    return;
  close();
});
function welcome() {
  show(
    "welcome",
    `<span class="tagline">INMUNO · AVENTURA GUIADA EN 3D</span><h1 id="dialog-title">Un pequeño héroe.<br><em>Una gran misión.</em></h1><p>Recupera los pulmones, el corazón, el cerebro y las defensas.<br>Lumi te enseñará cada paso. Solo necesitas moverte y proteger.</p><div class="level-grid">${levels.map((l) => `<button class="level-card ${level === l.id ? "active" : ""}" data-level="${l.id}"><span>${l.grades} DE PRIMARIA</span><b>${l.name}</b><small>${l.id === 1 ? "Muchas ayudas. Misiones cortas." : l.id === 2 ? "Descubre cómo funciona tu cuerpo." : "Nuevos retos con ayuda siempre disponible."}</small></button>`).join("")}</div><div class="simple-steps"><span>① Sigue las luces</span><span>② Pulsa Proteger</span><span>③ Recupera el sistema</span></div><div class="modal-footer">${saved ? '<button id="continue">Continuar misiones</button>' : ""}<button id="tutorial-direct">Empezar tutorial</button><button class="primary" id="new-run">▶ Ver tráiler y jugar</button></div>`,
  );
  dialog.querySelectorAll("[data-level]").forEach(
    (b) =>
      (b.onclick = () => {
        level = +b.dataset.level;
        welcome();
      }),
  );
  $("#continue")?.addEventListener("click", () => {
    state = saved;
    state.assisted = true;
    level = state.level;
    close();
    audio.unlock();
    if (state.phase === "victory") victory();
    else missionBrief();
    renderHUD();
  });
  function prepare(withTrailer) {
    const proceed = () => (withTrailer ? trailerPlayer(start) : start());
    if (saved) {
      show(
        "confirm",
        `<h2 id="dialog-title">¿Empezamos otra aventura?</h2><p>Se sustituirá el progreso guardado. Puedes descargarlo desde Pausa.</p><div class="modal-footer"><button id="cancel">Volver</button><button class="primary" id="confirm-new">Empezar</button></div>`,
      );
      $("#cancel").onclick = welcome;
      $("#confirm-new").onclick = proceed;
    } else proceed();
  }
  $("#new-run").onclick = () => prepare(true);
  $("#tutorial-direct").onclick = () => prepare(false);
}
function trailerPlayer(after) {
  stopVoice();
  audio.duck(true);
  show(
    "trailer",
    `<span class="eyebrow">ANTES DE EMPEZAR · GUÍA EN VÍDEO</span><h2 id="dialog-title">Así se juega a INMUNO</h2><video id="trailer-video" controls playsinline preload="metadata" aria-label="Tráiler explicativo narrado en español"><source src="${globalThis.__INMUNO_OFFLINE__ ? "TRAILER-INMUNO.mp4" : "media/TRAILER-INMUNO.mp4"}" type="video/mp4"></video><p class="video-note">También puedes volver a verlo desde Pausa.</p><div class="modal-footer"><button class="primary" id="trailer-done">Empezar la misión →</button></div>`,
  );
  const v = $("#trailer-video");
  v.volume = 0.8;
  v.play().catch(() => {});
  const finish = () => {
    v.pause();
    audio.duck(false);
    after();
  };
  v.onended = finish;
  $("#trailer-done").onclick = finish;
}
function missionBrief() {
  guide = { following: false, route: [] };
  const z = G.mission(state),
    n = state.completed.length + 1;
  show(
    "brief",
    `<span class="eyebrow">${z ? "MISIÓN " + n + " DE 4" : "MISIÓN FINAL"}</span><h2 id="dialog-title">${z ? ["Devuelve el aire", "Pon el corazón en marcha", "Enciende las señales", "Refuerza las defensas"][n - 1] : "Protege el núcleo"}</h2><div class="brief-body"><span class="mentor-avatar">✚</span><p><b>Soy Lumi, tu guía.</b> ${z ? z.fact : "Has recuperado los cuatro sistemas. ¡Vamos a cerrar la anomalía del núcleo!"}</p></div><div class="mission-route">${G.zones.map((r, i) => `<span class="${state.completed.includes(r.id) ? "done" : i === n - 1 ? "current" : ""}">${["◉", "♥", "✧", "✚"][i]}<small>${r.short}</small></span>`).join("")}</div><div class="simple-steps"><span>① Sigue el camino de luces</span><span>② Mantén pulsado Proteger</span><span>③ Responde y gana tu insignia</span></div><div class="modal-footer"><button id="hear-brief">◖ Escuchar misión</button><button class="primary" id="guide-start">¡Vamos! Guíame →</button></div>`,
  );
  $("#hear-brief").onclick = () =>
    speak(
      `${z ? "Misión " + n + ". " + z.name : "Misión final"}. Pulsa Guíame y sigue las luces. Después mantén pulsado Proteger. Yo elegiré la defensa adecuada.`,
    );
  $("#guide-start").onclick = () => {
    close();
    guide = beginGuidance(state);
    renderHUD();
    toast(
      "Sigue las luces doradas. Puedes moverte tú con las flechas o dejar que te guíe.",
    );
  };
}
function start() {
  state = G.newRun(level, true);
  yaw = 0;
  pitch = 0.17;
  pinned = null;
  guide = { following: false, route: [] };
  save();
  audio.unlock();
  missionBrief();
  renderHUD();
}
function pauseMenu() {
  if (!ready || modal === "welcome") return;
  show(
    "pause",
    `<span class="eyebrow">EXPEDICIÓN EN PAUSA</span><h2 id="dialog-title">Toma aire, agente.</h2><p>${state.completed.length}/4 regiones recuperadas · ${state.score} puntos · ${levels[state.level - 1].grades}</p><div class="menu-grid"><button id="help">✦ Cómo jugar / Ver tráiler</button><button id="codex">▧ Códex de cartas</button><button id="sound">♫ Música y efectos</button><button id="export">↓ Descargar progreso</button><button id="import">↑ Cargar progreso</button><button id="home">✧ Cambiar nivel / Nueva expedición</button></div><div class="modal-footer"><a href="${cardURL()}">Modo de cartas por turnos</a><button class="primary" id="resume">Volver al juego →</button></div>`,
  );
  $("#resume").onclick = close;
  $("#help").onclick = help;
  $("#codex").onclick = codex;
  $("#sound").onclick = soundPanel;
  $("#home").onclick = welcome;
  $("#export").onclick = exportProgress;
  $("#import").onclick = () => $("#action-import").click();
}
function help() {
  show(
    "help",
    `<span class="eyebrow">SOLO DOS ACCIONES PARA JUGAR</span><h2 id="dialog-title">Sigue. Protege. Aprende.</h2><div class="guide-grid"><article><b>① Llega a tu misión</b><p>Pulsa Guíame para que tu agente siga el camino de luces. También puedes usar las flechas, WASD o el joystick. La cámara te acompaña y la misión comienza al llegar.</p></article><article><b>② Mantén pulsado Proteger</b><p>Tu agente apunta y elige la defensa correcta. Puedes moverte mientras lo haces. Lumi recarga tu energía si lo necesitas. No tienes que cambiar herramientas.</p></article><article><b>③ Recupera el sistema</b><p>Contesta una pregunta corta. Si te equivocas, recibirás una pista. Después elige Siguiente misión. Las cuatro insignias abren el núcleo final.</p></article></div><div class="modal-footer"><button id="watch-help">▶ Ver tráiler</button><button class="primary" id="back-game">Entendido · Volver</button></div>`,
  );
  $("#back-game").onclick = close;
  $("#watch-help").onclick = () =>
    trailerPlayer(() => {
      close();
      renderHUD();
    });
}
function codex() {
  const entries = [
    "anticuerpo",
    "antibiotico",
    "integral",
    "vacuna",
    "respiratorio",
    "circulatorio",
    "nervioso",
    "inmunologico",
  ];
  show(
    "codex",
    `<span class="eyebrow">ILUSTRACIONES ORIGINALES DE INMUNO</span><h2 id="dialog-title">Tu equipo de defensa</h2><div class="codex-grid">${entries.map((id) => `<article><img src="${asset(cards[id].art)}" alt="${esc(cards[id].name)}"><b>${esc(cards[id].name)}</b><p>${esc(cards[id].text)}</p></article>`).join("")}</div><div class="modal-footer"><button class="primary" id="back-game">Volver al juego</button></div>`,
  );
  $("#back-game").onclick = close;
}
function soundPanel() {
  show(
    "sound",
    `<span class="eyebrow">SONIDO</span><h2 id="dialog-title">La banda sonora de tu aventura</h2><div class="sound-row"><label for="music">Música instrumental</label><input type="checkbox" id="music" ${audio.settings.music ? "checked" : ""}></div><div class="sound-row"><label for="effects">Efectos sonoros</label><input type="checkbox" id="effects" ${audio.settings.effects ? "checked" : ""}></div><div class="sound-row"><label for="volume">Volumen</label><input type="range" id="volume" min="0" max="100" value="${audio.settings.volume}"><output id="volume-number">${audio.settings.volume}%</output></div><div class="modal-footer"><button id="stop-voice">Detener voz</button><button class="primary" id="back-game">Volver al juego</button></div>`,
  );
  $("#music").onchange = (e) => {
    audio.unlock();
    audio.set({ music: e.target.checked });
  };
  $("#effects").onchange = (e) => {
    audio.unlock();
    audio.set({ effects: e.target.checked });
  };
  $("#volume").oninput = (e) => {
    audio.unlock();
    audio.set({ volume: Number(e.target.value) });
    $("#volume-number").value = e.target.value + "%";
    if (!Number(e.target.value)) stopVoice();
  };
  $("#stop-voice").onclick = stopVoice;
  $("#back-game").onclick = () => {
    close();
    if (state.phase === "quiz") quiz();
    else if (state.phase === "victory") victory();
  };
}
function quiz() {
  const z = G.zones.find((z) => z.id === state.active);
  guide.following = false;
  show(
    "quiz",
    `<img class="quiz-art" src="${asset(cards[z.id].art)}" alt="${esc(cards[z.id].name)}"><span class="eyebrow">¡ZONA DESPEJADA! · ÚLTIMO PASO</span><h2 id="dialog-title">${esc(z.question)}</h2><button id="read-question">◖ Escuchar</button><div class="answers">${state.quizOrder.map((i) => `<button data-answer="${i}">${esc(z.answers[i])}</button>`).join("")}</div><div class="feedback" role="status">${esc(z.fact)}</div>`,
  );
  $("#read-question").onclick = () =>
    speak(
      z.question + ". " + state.quizOrder.map((i) => z.answers[i]).join(". "),
    );
  dialog.querySelectorAll("[data-answer]").forEach(
    (b) =>
      (b.onclick = () => {
        if (!G.answer(state, +b.dataset.answer)) {
          audio.play("hurt");
          $(".feedback").textContent = z.fact + " ¡Prueba otra vez!";
          return;
        }
        save();
        audio.play("success");
        renderHUD();
        show(
          "badge",
          `<div class="center"><span class="badge-icon">${["◉", "♥", "✧", "✚"][state.completed.length - 1]}</span><span class="eyebrow">MISIÓN COMPLETADA · ${state.completed.length}/4</span><h2 id="dialog-title">¡${z.short} recuperado!</h2><p>${esc(z.fact)}</p></div><div class="modal-footer"><button id="review-zone">Explorar esta zona</button><button class="primary" id="next-mission">${G.mission(state) ? "Siguiente misión →" : "Ir al núcleo →"}</button></div>`,
        );
        $("#review-zone").onclick = () => {
          close();
          renderHUD();
        };
        $("#next-mission").onclick = missionBrief;
      }),
  );
}
function respawn() {
  show(
    "respawn",
    `<span class="eyebrow">VUELVE A INTENTARLO</span><h2 id="dialog-title">Tu agente necesita recargarse.</h2><p>Las regiones que recuperaste siguen a salvo. Activa un escudo con Q, construye una barrera con F y recoge cristales dorados para recuperar salud.</p><div class="modal-footer"><button class="primary" id="retry">Reintentar esta región →</button></div>`,
  );
  $("#retry").onclick = () => {
    G.retry(state);
    close();
    renderHUD();
  };
}
function victory() {
  save();
  show(
    "victory",
    `<div class="center"><span class="eyebrow">EXPEDICIÓN COMPLETADA</span><h1 id="dialog-title">¡EQUILIBRIO<br><em>RECUPERADO!</em></h1><p>Cuatro sistemas restaurados y el núcleo protegido.</p><div class="victory-number">${state.score.toLocaleString("es")} XP</div><p>${state.kills} microbios neutralizados · Nivel ${levels[state.level - 1].name}</p></div><div class="modal-footer"><button id="explore">Seguir explorando</button><button class="primary" id="again">Nueva expedición →</button></div>`,
  );
  $("#again").onclick = welcome;
  $("#explore").onclick = () => {
    state.phase = "explore";
    state.active = null;
    state.player.x = 0;
    state.player.z = 15;
    close();
    renderHUD();
  };
}
function exportProgress() {
  const a = document.createElement("a"),
    blob = new Blob([JSON.stringify(G.checkpoint(state), null, 2)], {
      type: "application/json",
    });
  a.href = URL.createObjectURL(blob);
  a.download = "INMUNO-ACCION-PROGRESO.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
$("#action-import").onchange = async (e) => {
  const f = e.target.files[0];
  e.target.value = "";
  if (!f) return;
  try {
    if (f.size > 10000) throw Error("Archivo demasiado grande.");
    const incoming = G.restore(JSON.parse(await f.text()));
    if (!incoming) throw Error("No es un progreso válido de INMUNO Acción.");
    show(
      "confirm",
      `<h2 id="dialog-title">¿Cargar esta expedición?</h2><p>Sustituirá el progreso actual. Nivel ${levels[incoming.level - 1].grades}; ${incoming.completed.length}/4 regiones recuperadas.</p><div class="modal-footer"><button id="cancel-import">Cancelar</button><button class="primary" id="confirm-import">Cargar progreso</button></div>`,
    );
    $("#cancel-import").onclick = pauseMenu;
    $("#confirm-import").onclick = () => {
      state = incoming;
      level = state.level;
      save();
      close();
      renderHUD();
      if (state.phase === "victory") victory();
    };
  } catch (err) {
    toast(err.message);
  }
};
function simpleHUD() {
  const z = G.mission(state),
    combat = state.phase === "combat",
    following = guide.following;
  const titles = [
    "Devuelve el aire",
    "Pon el corazón en marcha",
    "Enciende las señales",
    "Refuerza las defensas",
  ];
  $("#quest").innerHTML =
    `<span class="eyebrow">${z ? "MISIÓN " + (state.completed.length + 1) + " DE 4" : "MISIÓN FINAL"}</span><h1>${z ? titles[state.completed.length] : "Protege el núcleo"}</h1><p>${combat ? "Mantén pulsado PROTEGER. Lumi elige la defensa y te ayuda a apuntar." : following ? "Sigue las luces. Tu agente ya va hacia la misión." : "Pulsa GUÍAME o muévete con las flechas hasta las luces."}</p><div class="progress">${G.zones.map((r) => `<i class="${state.completed.includes(r.id) ? "done" : ""}"></i>`).join("")}</div><div class="meta">${combat ? state.enemies.length + " microbios por neutralizar" : "◆ " + Math.round(G.distance(state.player, z || { x: 0, z: 2 })) + " m · " + (z?.short || "Núcleo")}</div><button id="read-mission">◖ Escuchar</button>`;
  $("#read-mission").onclick = () => speak($("#quest").textContent);
  $("#guide-toggle").hidden = combat;
  $("#guide-toggle").textContent = following ? "Ⅱ Detener guía" : "✦ Guíame";
  $("#protect-button").hidden = !combat;
  $("#protect-button").textContent = "◈ Mantén PROTEGER";
  $("#guide-caption").textContent = combat
    ? "Puedes moverte mientras proteges."
    : following
      ? "Si quieres moverte tú, usa las flechas o el joystick."
      : "La cámara y las herramientas se manejan solas.";
}
function renderHUD() {
  document.body.classList.add("guided");
  const p = state.player,
    z = G.mission(state),
    combat = state.phase === "combat",
    where = G.zones.find((r) => G.distance(p, r) < 15),
    n = G.nearby(state);
  $("#level-tag").textContent =
    levels[state.level - 1].name.toUpperCase() +
    " · " +
    levels[state.level - 1].grades;
  $("#heading").textContent =
    `${["N", "NO", "O", "SO", "S", "SE", "E", "NE"][Math.round((((yaw % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) / (Math.PI / 4)) % 8]} · ${Math.round(((yaw * 180) / Math.PI + 360) % 360)}°`;
  $("#quest").innerHTML =
    `<span class="eyebrow">${combat ? "OLEADA ACTIVA" : "MISIÓN PRINCIPAL"} · ${state.completed.length}/4 SISTEMAS</span><h1>${combat ? (state.active === "core" ? "Protege el núcleo" : `Defiende ${G.zones.find((r) => r.id === state.active).short}`) : z ? z.name : "El núcleo te espera"}</h1><p>${combat ? `${state.enemies.length} microbios. ${state.active === "core" ? "Esquiva sus proyectiles y usa tus defensas." : `Usa ${G.tools[G.zones.find((r) => r.id === state.active).tool].name}. Q: escudo. F: barrera.`}` : z ? "Sigue el marcador. Acércate a la estación y pulsa E para activarla." : "Vuelve al portal dorado del centro. Pulsa E para entrar."}</p><div class="progress">${G.zones.map((r) => `<i class="${state.completed.includes(r.id) ? "done" : ""}"></i>`).join("")}</div><div class="meta">${combat ? "Neutraliza la oleada · Recoge cristales" : "◆ " + Math.round(G.distance(p, z || { x: 0, z: 2 })) + " m hasta tu objetivo"}</div><button id="read-mission">◖ Escuchar misión</button>`;
  $("#read-mission").onclick = () => speak($("#quest").textContent);
  $("#location").textContent = where?.short.toUpperCase() || "ZONA CENTRAL";
  $("#restored-count").textContent = `${state.completed.length} / 4`;
  $("#radar").innerHTML =
    `${G.zones.map((r) => `<button class="map-zone ${state.completed.includes(r.id) ? "done" : ""}" style="left:${50 + (r.x / 140) * 100}%;top:${50 + (r.z / 140) * 100}%;--color:${r.color};min-height:0;padding:0" data-zone="${r.id}" aria-label="Marcar ${r.short}" title="${r.short}"></button>`).join("")}${state.enemies.map((e) => `<i class="map-enemy" data-kind="${e.kind}" data-x="${e.x}" data-z="${e.z}" style="left:${50 + (e.x / 140) * 100}%;top:${50 + (e.z / 140) * 100}%"></i>`).join("")}<span class="map-goal">✦</span><i class="map-player" data-x="${p.x}" data-z="${p.z}" style="left:${50 + (p.x / 140) * 100}%;top:${50 + (p.z / 140) * 100}%;transform:translate(-50%,-50%) rotate(${-yaw}rad)"></i>`;
  $("#radar")
    .querySelectorAll("button")
    .forEach(
      (b) =>
        (b.onclick = () => {
          pinned = b.dataset.zone;
          toast("Marcador: " + G.zones.find((r) => r.id === pinned).name);
        }),
    );
  $("#health-fill").style.width = p.health + "%";
  $("#health-number").textContent = Math.ceil(p.health);
  $("#shield-status").textContent =
    p.shield > 0
      ? "◈ Escudo activo"
      : p.shieldCooldown > 0
        ? `Q · Escudo en ${Math.ceil(p.shieldCooldown)} s`
        : "Q · Escudo listo";
  $("#score").textContent = state.score.toLocaleString("es");
  $("#kills").textContent = `${state.kills} microbios neutralizados`;
  if (!$("#loadout").children.length) {
    $("#loadout").innerHTML = Object.entries(G.tools)
      .map(
        ([id, t]) =>
          `<button class="tool-slot" style="--tool-color:${t.color}" data-tool="${id}" aria-label="${id}: ${t.name}"><small>${id}</small><span class="tool-icon">${id === "1" ? "Y" : id === "2" ? "◒" : "◈"}</span><b>${t.name}</b></button>`,
      )
      .join("");
    $("#loadout")
      .querySelectorAll("button")
      .forEach(
        (b) =>
          (b.onclick = () => {
            state.player.tool = Number(b.dataset.tool);
            renderHUD();
          }),
      );
  }
  $("#loadout")
    .querySelectorAll("button")
    .forEach((b) =>
      b.classList.toggle("active", Number(b.dataset.tool) === p.tool),
    );
  $("#interaction").hidden = !n || state.phase !== "explore";
  $("#interact-button").innerHTML = n ? `<kbd>E</kbd>${n.label}` : "";
  const boss = state.enemies.find((e) => e.kind === "boss");
  $("#boss-bar").hidden = !boss;
  if (boss)
    $("#boss-bar").innerHTML =
      `ANOMALÍA DEL NÚCLEO<div><i style="width:${(boss.hp / boss.maxHP) * 100}%"></i></div>`;
  $("#touch-shield").style.opacity = p.shieldCooldown > 0 ? ".4" : "1";
  $("#touch-build").style.opacity = p.buildCooldown > 0 ? ".4" : "1";
  simpleHUD();
}
function flushEvents() {
  for (const e of state.events) {
    if (e.type === "shoot") audio.play("shoot");
    if (e.type === "hit") {
      $("#reticle").classList.add("hit");
      setTimeout(() => $("#reticle").classList.remove("hit"), 100);
    }
    if (e.type === "kill") {
      world.burst(e.x, e.z);
      audio.play("pop");
    }
    if (e.type === "hurt") {
      if (!state.assisted) world.hurt();
      document.body.classList.add("hurt");
      setTimeout(() => document.body.classList.remove("hurt"), 220);
      audio.play("hurt");
    }
    if (e.type === "pickup") audio.play("success");
    if (e.type === "shield" || e.type === "build") audio.play("heal");
    if (e.type === "assistance")
      toast("Lumi te ayuda: ¡energía recargada! Sigue protegiendo.");
    if (e.type === "wave") {
      toast(
        "¡Has llegado! Mantén pulsado el botón PROTEGER. Yo te ayudo a apuntar.",
      );
      audio.play("enemy");
    }
    if (e.type === "boss") {
      yaw = 0;
      toast("¡La anomalía del núcleo se ha despertado!");
      audio.play("enemy");
    }
    if (e.type === "wrongTool" && state.time - wrongAt > 2) {
      wrongAt = state.time;
      toast(
        e.kind === "viral"
          ? "Virus morado: usa Anticuerpo (1) o Integral (3)."
          : e.kind === "bacteriana"
            ? "Bacteria verde: usa Antibiótico (2) o Integral (3)."
            : "Usa Defensa integral (3) contra esta amenaza.",
      );
    }
    if (e.type === "quiz") quiz();
    if (e.type === "respawn") respawn();
    if (e.type === "victory") {
      audio.play("victory");
      victory();
    }
  }
  state.events = [];
}
function frame(now) {
  requestAnimationFrame(frame);
  if (document.hidden) {
    last = now;
    return;
  }
  const dt = Math.min(0.15, (now - (last || now)) / 1000);
  last = now;
  if (!paused) {
    for (let remaining = dt; remaining > 0; remaining -= 0.025) {
      const forward =
        (keys.has("KeyW") || keys.has("ArrowUp") ? 1 : 0) -
        (keys.has("KeyS") || keys.has("ArrowDown") ? 1 : 0) +
        mobileY;
      const right =
        (keys.has("KeyD") || keys.has("ArrowRight") ? 1 : 0) -
        (keys.has("KeyA") || keys.has("ArrowLeft") ? 1 : 0) +
        mobileX;
      if (forward || right) guide.following = false;
      const facing = assistStep(
        state,
        guide,
        {
          yaw,
          forward,
          right,
          sprint: keys.has("ShiftLeft"),
          jump: jump || keys.has("Space"),
          fire: fire || keys.has("KeyP"),
        },
        Math.min(0.025, remaining),
      );
      if (facing !== null && !forward && !right) {
        let d = facing - yaw;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        yaw += d * Math.min(1, dt * 3);
      }
    }
    flushEvents();
    if (now - hudLast > 140) {
      renderHUD();
      hudLast = now;
    }
  }
  if (!world.soft || now - (world.lastRender || 0) > 45) {
    world.setGuide?.(state, guide);
    world.render(state, yaw, pitch, dt || 0.016);
    world.lastRender = now;
    const z = G.zones.find((z) => z.id === pinned) ||
        G.mission(state) || { x: 0, z: 2, name: "Portal central" },
      v = world.project(z.x, z.z);
    $("#waypoint").hidden = paused || state.phase === "combat";
    $("#waypoint").style.left =
      `${Math.max(12, Math.min(88, (v.x * 0.5 + 0.5) * 100))}%`;
    $("#waypoint").style.top =
      `${v.z > 1 ? 35 : Math.max(26, Math.min(65, (-v.y * 0.5 + 0.5) * 100))}%`;
    $("#waypoint").innerHTML =
      `<b>${z.short || "Portal central"} · ${Math.round(G.distance(state.player, z))} m${v.z > 1 ? " ↶" : ""}</b>`;
  }
  ready = true;
}
function activate() {
  if (paused) return;
  guide.following = false;
  if (G.interact(state)) {
    pinned = null;
    flushEvents();
    renderHUD();
  }
}
$("#interact-button").onclick = activate;
$("#pause-button").onclick = pauseMenu;
$("#brand").onclick = (e) => {
  e.preventDefault();
  pauseMenu();
};
$("#sound-button").onclick = () => {
  if (modal === "welcome") return;
  soundPanel();
};
$("#fullscreen").onclick = () => {
  if (document.fullscreenElement) document.exitFullscreen?.();
  else
    document.documentElement
      .requestFullscreen?.()
      .catch(() => toast("Tu navegador no permite pantalla completa aquí."));
};
$("#guide-toggle").onclick = () => {
  if (paused) return;
  if (guide.following) guide.following = false;
  else guide = beginGuidance(state);
  renderHUD();
};
$("#protect-button").addEventListener("pointerdown", (e) => {
  if (paused) return;
  fire = true;
  audio.unlock();
  e.target.setPointerCapture(e.pointerId);
});
$("#protect-button").addEventListener("pointerup", () => (fire = false));
$("#protect-button").addEventListener("pointercancel", () => (fire = false));
$("#protect-button").addEventListener("keydown", (e) => {
  if (["Space", "Enter"].includes(e.code) && !paused) {
    e.preventDefault();
    e.stopPropagation();
    fire = true;
  }
});
$("#protect-button").addEventListener("keyup", (e) => {
  if (["Space", "Enter"].includes(e.code)) {
    e.preventDefault();
    e.stopPropagation();
    fire = false;
  }
});
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    if (!dialog.open) pauseMenu();
    return;
  }
  if (paused || /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
  if (
    ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
      e.code,
    )
  )
    e.preventDefault();
  keys.add(e.code);
  if (e.repeat) return;
  if (e.code === "KeyE") activate();
  if (e.code === "KeyQ") G.shield(state);
  if (e.code === "KeyF") {
    if (!G.build(state, yaw)) toast("La barrera está recargando.");
  }
  if (["Digit1", "Digit2", "Digit3"].includes(e.code)) {
    state.player.tool = Number(e.code.slice(-1));
    renderHUD();
  }
});
document.addEventListener("keyup", (e) => keys.delete(e.code));
window.addEventListener("blur", () => {
  clearInput();
  if (!paused && ready) pauseMenu();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInput();
    stopVoice();
    if (!paused) pauseMenu();
  }
});
if (world) {
  const canvas = world.canvas;
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());
  canvas.addEventListener("pointerdown", (e) => {
    if (paused) return;
    audio.unlock();
    if (e.button === 0 && !state.assisted) fire = true;
    if (e.button === 2) {
      lookDrag = [e.clientX, e.clientY];
      canvas.setPointerCapture(e.pointerId);
    }
  });
  window.addEventListener("pointerup", (e) => {
    if (e.pointerType === "mouse") {
      fire = false;
      lookDrag = null;
    }
  });
  document.addEventListener("mousemove", (e) => {
    if (paused) return;
    if (document.pointerLockElement === canvas) {
      yaw -= e.movementX * 0.003;
      pitch = Math.max(-0.25, Math.min(0.8, pitch + e.movementY * 0.002));
    } else if (lookDrag) {
      yaw -= (e.clientX - lookDrag[0]) * 0.006;
      pitch = Math.max(
        -0.25,
        Math.min(0.8, pitch + (e.clientY - lookDrag[1]) * 0.003),
      );
      lookDrag = [e.clientX, e.clientY];
    }
  });
}
const joystick = $("#joystick");
joystick.addEventListener("pointerdown", (e) => {
  if (paused) return;
  stickPointer = e.pointerId;
  joystick.setPointerCapture(e.pointerId);
  moveStick(e);
});
joystick.addEventListener("pointermove", (e) => {
  if (e.pointerId === stickPointer) moveStick(e);
});
joystick.addEventListener("pointerup", () => {
  stickPointer = null;
  mobileX = mobileY = 0;
  $("#stick").style.transform = "";
});
joystick.addEventListener("pointercancel", clearInput);
function moveStick(e) {
  const r = joystick.getBoundingClientRect(),
    dx = e.clientX - r.left - r.width / 2,
    dy = e.clientY - r.top - r.height / 2,
    len = Math.max(30, Math.hypot(dx, dy));
  mobileX = dx / len;
  mobileY = -dy / len;
  $("#stick").style.transform =
    `translate(${(dx / len) * 28}px,${(dy / len) * 28}px)`;
}
let touchLook = null;
$("#touch-look").addEventListener("pointerdown", (e) => {
  if (paused) return;
  touchLook = [e.clientX, e.clientY];
  e.target.setPointerCapture(e.pointerId);
});
$("#touch-look").addEventListener("pointermove", (e) => {
  if (!touchLook) return;
  yaw -= (e.clientX - touchLook[0]) * 0.008;
  pitch = Math.max(
    -0.25,
    Math.min(0.8, pitch + (e.clientY - touchLook[1]) * 0.004),
  );
  touchLook = [e.clientX, e.clientY];
});
$("#touch-look").addEventListener("pointerup", () => (touchLook = null));
$("#touch-look").addEventListener("pointercancel", () => (touchLook = null));
$("#touch-fire").addEventListener("pointerdown", (e) => {
  if (!paused) {
    fire = true;
    audio.unlock();
    e.target.setPointerCapture(e.pointerId);
  }
});
$("#touch-fire").addEventListener("pointerup", () => (fire = false));
$("#touch-fire").addEventListener("pointercancel", () => (fire = false));
$("#touch-jump").addEventListener("pointerdown", () => {
  if (!paused) jump = true;
});
$("#touch-jump").addEventListener("pointerup", () => (jump = false));
$("#touch-shield").onclick = () => {
  if (!paused) G.shield(state);
};
$("#touch-build").onclick = () => {
  if (!paused) G.build(state, yaw);
};
