import * as G from "./anatomy-engine.js";
import { createAnatomyWorld } from "./anatomy-world.js";
import { createAudio } from "./audio.js";
import { cards } from "./data.js";
const $ = (s) => document.querySelector(s),
  asset = (p) => globalThis.__INMUNO_ASSETS__?.[p] || p;
const audio = createAudio(),
  dialog = $("#anatomy-dialog"),
  storage = "inmuno-interior-v4";
let saved = null;
try {
  saved = G.restore(JSON.parse(localStorage.getItem(storage)));
} catch {}
let state = saved || G.createRun(),
  level = state.level,
  yaw = 0,
  pitch = 0.13,
  paused = true,
  modal = "",
  keys = new Set(),
  fire = false,
  interacting = false,
  drag = null,
  mobileX = 0,
  mobileY = 0,
  stickId = null,
  last = 0,
  hudTime = 0,
  toastTimer,
  wrongTime = -10,
  sequenceTime = -10,
  tutorialStep = 0;
const world = createAnatomyWorld($("#anatomy-world"));
const grades = ["1.º–2.º", "3.º–4.º", "5.º–6.º"];
const touch = matchMedia("(pointer:coarse)").matches;
document.body.classList.toggle("touch", touch);
function clearInput() {
  keys.clear();
  fire = interacting = false;
  mobileX = mobileY = 0;
  drag = null;
  $("#stick").style.transform = "";
}
function stopVoice() {
  globalThis.speechSynthesis?.cancel();
  audio.duck(false);
}
function speak(text) {
  if (!globalThis.speechSynthesis)
    return toast("Puedes leer la explicación en pantalla.");
  stopVoice();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "es-ES";
  u.rate = 0.9;
  u.onstart = () => audio.duck(true);
  u.onend = u.onerror = () => audio.duck(false);
  speechSynthesis.speak(u);
}
function show(type, html) {
  paused = true;
  clearInput();
  stopVoice();
  modal = type;
  document.exitPointerLock?.();
  $("#modal-content").innerHTML = html;
  if (!dialog.open) dialog.showModal();
}
function close() {
  if (state.phase === "complete" && modal !== "welcome") {
    complete();
    return;
  }
  if (state.phase === "defeated" && modal !== "welcome") {
    defeated();
    return;
  }
  dialog.close();
  modal = "";
  paused = false;
  clearInput();
  stopVoice();
  document.body.classList.add("playing");
  last = performance.now();
  world?.canvas.focus();
}
function toast(text) {
  $("#notification").textContent = text;
  $("#notification").classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(
    () => $("#notification").classList.remove("visible"),
    5500,
  );
}
function save() {
  try {
    localStorage.setItem(storage, JSON.stringify(G.checkpoint(state)));
    saved = G.restore(G.checkpoint(state));
  } catch {
    toast("Usa Pausa → Descargar progreso para guardar.");
  }
}
function bodyChart(selected = 0) {
  return `<svg class="body-chart" viewBox="0 0 220 350" aria-label="Mapa del cuerpo humano"><defs><radialGradient id="body-glow"><stop stop-color="#8ac5ce" stop-opacity=".18"/><stop offset="1" stop-color="#8ac5ce" stop-opacity="0"/></radialGradient></defs><ellipse cx="110" cy="165" rx="105" ry="160" fill="url(#body-glow)"/><path class="body-outline" d="M110 14c-18 0-27 12-25 28 1 14 9 22 13 25v14l-30 8c-12 5-16 19-20 33l-20 72c-3 11 8 17 14 7l27-66-3 68 8 122c1 15 17 16 19 1l13-104h8l13 104c2 15 18 14 19-1l8-122-3-68 27 66c6 10 17 4 14-7l-20-72c-4-14-8-28-20-33l-30-8V67c7-5 13-15 13-27 0-16-11-26-25-26Z"/><path class="routes" d="M110 77v140m0-116-37 40m37-40 37 40m-37 40-23 98m23-98 23 98"/><path class="organ ${selected === 0 ? "selected" : ""}" d="M103 100c-19-7-29 16-29 37 0 10 12 12 23 5l8-9Zm14 0c19-7 29 16 29 37 0 10-12 12-23 5l-8-9Z"/><path class="organ ${selected === 1 ? "selected" : ""}" d="M112 124c-8-14-19-2-13 8l13 16 14-16c8-13-8-20-14-8Z"/><path class="organ ${selected === 2 ? "selected" : ""}" d="M93 29c-8 5-7 19 2 22l13-3 5 3 15-2c10-8 7-21-3-24-3-9-14-8-17-3-7-5-14-1-15 7Z"/><g class="organ ${selected === 3 ? "selected" : ""}"><circle cx="78" cy="106" r="4"/><circle cx="142" cy="106" r="4"/><circle cx="88" cy="192" r="4"/><circle cx="132" cy="192" r="4"/><circle cx="111" cy="166" r="5"/></g></svg>`;
}
function welcome() {
  document.body.classList.remove("playing");
  show(
    "welcome",
    `<div class="welcome-kicker"><i></i>Una expedición a escala microscópica</div><div class="welcome-layout"><div><h1 id="dialog-title">La aventura<br>está dentro de ti.</h1><p>Entra en el cuerpo humano. Explora sus tejidos, identifica amenazas y decide cómo defenderlo.</p><p class="caption">Tú conduces al nanobot. Tú eliges la respuesta.</p></div>${bodyChart(0)}</div><div class="level-picker" aria-label="Nivel de primaria">${grades.map((g, i) => `<button data-level="${i + 1}" class="${level === i + 1 ? "active" : ""}"><b>${g} de primaria</b><small>${["Más pistas y tiempo para reaccionar", "Exploración y decisiones", "Amenazas resistentes y menos pistas"][i]}</small></button>`).join("")}</div><div class="modal-footer"><a href="${globalThis.__INMUNO_OFFLINE__ ? "MODO-CARTAS.html" : "cartas.html"}">Juego original de cartas</a>${saved ? '<button id="continue">Continuar</button>' : ""}<button id="watch-trailer">Ver cómo se juega</button><button class="primary" id="start-game">Entrar en el cuerpo</button></div>`,
  );
  dialog.querySelectorAll("[data-level]").forEach(
    (b) =>
      (b.onclick = () => {
        level = +b.dataset.level;
        welcome();
      }),
  );
  $("#watch-trailer").onclick = () => trailer(welcome);
  $("#continue")?.addEventListener("click", () => {
    state = saved;
    level = state.level;
    brief(false);
    audio.unlock();
  });
  $("#start-game").onclick = () => {
    audio.unlock();
    if (saved) {
      show(
        "confirm",
        `<h2 id="dialog-title">Nueva expedición</h2><p>Puedes descargar el progreso actual desde Pausa. La nueva expedición sustituirá el guardado cuando completes una misión.</p><div class="modal-footer"><button id="cancel-new">Volver</button><button id="confirm-new" class="primary">Empezar</button></div>`,
      );
      $("#cancel-new").onclick = welcome;
      $("#confirm-new").onclick = newExpedition;
    } else newExpedition();
  };
}
function trailer(back) {
  show(
    "trailer",
    `<h2 id="dialog-title">Así se juega a Expedición interior</h2><video id="trailer-video" controls playsinline preload="metadata" style="width:100%;max-height:54dvh;border-radius:7px" aria-label="Explicación narrada en español"><source src="${globalThis.__INMUNO_OFFLINE__ ? "TRAILER-INMUNO.mp4" : "media/TRAILER-INMUNO.mp4"}" type="video/mp4"></video><p class="caption">Capturas de la partida real: explorar, escanear, elegir defensa y recuperar tejido.</p><div class="modal-footer"><button id="video-back" class="primary">Volver</button></div>`,
  );
  const v = $("#trailer-video");
  v.volume = 0.8;
  audio.duck(true);
  v.play().catch(() => {});
  const finish = () => {
    v.pause();
    audio.duck(false);
    back();
  };
  v.onended = finish;
  $("#video-back").onclick = finish;
}
function newExpedition() {
  state = G.createRun(level);
  yaw = 0;
  pitch = 0.13;
  tutorialStep = 0;
  tutorial(true);
}
const lessons = [
  {
    title: "Tu primera misión: devolver el aire.",
    text: "Estás dentro de un bronquiolo. Busca los tres grupos de alvéolos marcados. Acércate a uno y pulsa E para escanearlo.",
    icon: "⌖",
    action: "Moverse y escanear",
    detail:
      "WASD o flechas para moverte. Mantén el botón derecho del ratón y arrastra para mirar. En móvil, usa el joystick y arrastra por la derecha.",
  },
  {
    title: "Identifica. Después decide.",
    text: "El escáner revela la amenaza. Elige una herramienta con 1, 2 o 3. Un antibiótico no elimina virus: la elección tiene consecuencias.",
    icon: "Y",
    action: "Elegir y apuntar",
    detail:
      "Apunta con el círculo central. Clic o espacio para actuar. Fagocitosis requiere acercarse. Q activa un campo protector y consume energía.",
  },
  {
    title: "Despejar no basta: recupera el tejido.",
    text: "Cuando el foco esté despejado, vuelve al alvéolo y mantén E para restablecer el intercambio de oxígeno. Recupera los tres para completar la misión.",
    icon: "◉",
    action: "Recuperar y explorar",
    detail:
      "Recoge los recursos que dejan las amenazas para recuperar integridad. M abre el mapa corporal. Esc pausa la partida.",
  },
];
function tutorial(first = false) {
  const l = lessons[tutorialStep];
  show(
    "tutorial",
    `<span class="welcome-kicker">Antes de entrar · ${tutorialStep + 1} de 3</span><h2 id="dialog-title">${l.title}</h2><p>${l.text}</p><div class="how-grid"><article><span class="instruction-icon">${l.icon}</span><h3>${l.action}</h3><p>${l.detail}</p></article></div><div class="modal-footer">${tutorialStep ? '<button id="lesson-prev">Anterior</button>' : ""}<button id="hear-lesson">Escuchar</button><button id="lesson-next" class="primary">${tutorialStep === 2 ? (first ? "Comenzar misión" : "Volver al juego") : "Siguiente"}</button></div>`,
  );
  $("#hear-lesson").onclick = () =>
    speak(l.title + " " + l.text + " " + l.detail);
  $("#lesson-prev")?.addEventListener("click", () => {
    tutorialStep--;
    tutorial(first);
  });
  $("#lesson-next").onclick = () => {
    if (tutorialStep < 2) {
      tutorialStep++;
      tutorial(first);
    } else {
      close();
      renderHUD();
      toast("Busca un alvéolo. Acércate y pulsa E para escanearlo.");
    }
  };
}
function brief(reset = true) {
  const r = G.regions[state.region];
  show(
    "brief",
    `<div class="welcome-kicker">Misión ${state.region + 1} · ${r.place}</div><h2 id="dialog-title">${r.name}</h2><div class="original-cards"><img src="${asset(cards[r.id].art)}" alt="Carta original de ${r.organ}"><div><p>${r.mission}</p><p class="caption">${r.fact}</p></div></div><div class="modal-footer"><button id="brief-hear">Escuchar misión</button><button class="primary" id="brief-play">Entrar en la región</button></div>`,
  );
  $("#brief-hear").onclick = () => speak(r.mission + " " + r.fact);
  $("#brief-play").onclick = () => {
    yaw = 0;
    pitch = 0.13;
    close();
    renderHUD();
  };
}
function openMap() {
  const current = state.region;
  show(
    "map",
    `<h2 id="dialog-title">Tu ruta por el cuerpo</h2><div class="map-layout">${bodyChart(current)}<div class="map-missions">${G.regions.map((r, i) => `<button data-region="${i}" class="${current === i ? "active" : ""}" ${i > state.completed.length ? "disabled" : ""}><span>${state.completed.includes(i) ? "✓" : i > state.completed.length ? "⌑" : i + 1}</span><div><b>${r.organ}</b><small>${r.place}</small><small>${state.completed.includes(i) ? "Recuperado · puedes repetir" : i > state.completed.length ? "Completa la región anterior" : r.name}</small></div></button>`).join("")}</div></div><p class="caption">La escala y las distancias se adaptan al juego. Los escenarios representan tejidos del cuerpo.</p><div class="modal-footer"><button id="map-back" class="primary">Volver a la misión</button></div>`,
  );
  $("#map-back").onclick = close;
  dialog.querySelectorAll("[data-region]").forEach(
    (b) =>
      (b.onclick = () => {
        const i = +b.dataset.region;
        if (i === state.region && state.phase === "playing") return close();
        if (
          state.nodes.some((n) => n.status !== "unknown") &&
          state.phase === "playing"
        ) {
          show(
            "confirm",
            `<h2 id="dialog-title">¿Salir de esta región?</h2><p>Conservarás las regiones completadas. El avance dentro de esta misión se reiniciará.</p><div class="modal-footer"><button id="map-cancel">Seguir aquí</button><button id="map-confirm" class="primary">Cambiar región</button></div>`,
          );
          $("#map-cancel").onclick = close;
          $("#map-confirm").onclick = () => enterRegion(i);
        } else enterRegion(i);
      }),
  );
}
function enterRegion(i) {
  state = G.createRun(level, i, state.completed);
  yaw = 0;
  pitch = 0.13;
  brief();
}
function pause() {
  if (!world || modal === "welcome") return;
  show(
    "pause",
    `<h2 id="dialog-title">Expedición en pausa</h2><p>${G.regions[state.region].place} · ${state.completed.length}/4 regiones recuperadas</p><div class="menu-grid"><button id="menu-help">Cómo jugar</button><button id="menu-trailer">Ver explicación en vídeo</button><button id="menu-map">Mapa del cuerpo</button><button id="menu-sound">Música y efectos</button><button id="menu-cards">Cartas originales</button><button id="export">Descargar progreso</button><button id="import">Cargar progreso</button><button id="menu-home">Cambiar nivel</button></div><div class="modal-footer"><button id="resume" class="primary">Seguir explorando</button></div>`,
  );
  $("#resume").onclick = close;
  $("#menu-trailer").onclick = () => trailer(pause);
  $("#menu-help").onclick = () => {
    tutorialStep = 0;
    tutorial();
  };
  $("#menu-map").onclick = openMap;
  $("#menu-sound").onclick = sound;
  $("#menu-cards").onclick = codex;
  $("#menu-home").onclick = welcome;
  $("#export").onclick = exportProgress;
  $("#import").onclick = () => $("#progress-import").click();
}
function sound() {
  show(
    "sound",
    `<h2 id="dialog-title">Sonido de la expedición</h2><div class="sound-row"><label for="music">Música de fondo</label><input type="checkbox" id="music" ${audio.settings.music ? "checked" : ""}></div><div class="sound-row"><label for="effects">Efectos sonoros</label><input type="checkbox" id="effects" ${audio.settings.effects ? "checked" : ""}></div><div class="sound-row"><label for="volume">Volumen</label><input type="range" id="volume" min="0" max="100" value="${audio.settings.volume}"></div><div class="modal-footer"><button id="sound-back" class="primary">Volver</button></div>`,
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
    audio.set({ volume: +e.target.value });
  };
  $("#sound-back").onclick = close;
}
function codex() {
  show(
    "codex",
    `<h2 id="dialog-title">La ciencia de INMUNO</h2><div class="how-grid">${["anticuerpo", "antibiotico", "integral"].map((id) => `<article><img src="${asset(cards[id].art)}" alt="${cards[id].name}" style="width:95px"><h3>${cards[id].name}</h3><p>${cards[id].text}</p></article>`).join("")}</div><p class="caption">El nanobot y sus herramientas son una metáfora de juego. Los medicamentos solo se usan por indicación profesional. Muchos microbios son beneficiosos.</p><div class="modal-footer"><button id="codex-back" class="primary">Volver</button></div>`,
  );
  $("#codex-back").onclick = close;
}
function complete() {
  save();
  const r = G.regions[state.region],
    all = state.completed.length === 4;
  audio.play(all ? "victory" : "success");
  show(
    "complete",
    `<div class="success-mark">✓</div><span class="welcome-kicker">${all ? "Expedición completada" : "Tejido recuperado"}</span><h2 id="dialog-title">${all ? "El equilibrio vuelve al cuerpo." : r.name + ": misión cumplida."}</h2><p>${r.fact}</p><div class="result-stats"><div><b>3 / 3</b><span>Focos recuperados</span></div><div><b>${state.score}</b><span>Puntos de misión</span></div><div><b>${Math.floor(state.time / 60)}:${String(Math.floor(state.time % 60)).padStart(2, "0")}</b><span>Tiempo de misión</span></div></div><p class="caption">${r.hint}</p><div class="modal-footer"><button id="results-map">Ver mapa corporal</button><button class="primary" id="next-region">${all ? "Repetir expedición" : "Siguiente misión"}</button></div>`,
  );
  $("#results-map").onclick = openMap;
  $("#next-region").onclick = () => {
    if (all) welcome();
    else enterRegion(state.completed.length);
  };
}
function defeated() {
  show(
    "defeated",
    `<h2 id="dialog-title">El nanobot necesita recuperarse.</h2><p>Usa las células grandes como cobertura y activa tu campo protector con Q. Recoge recursos para recuperar integridad.</p><p class="caption">${G.regions[state.region].hint}</p><div class="modal-footer"><button id="retry" class="primary">Reintentar esta misión</button></div>`,
  );
  $("#retry").onclick = () => {
    state = G.createRun(level, state.region, state.completed);
    yaw = 0;
    close();
    renderHUD();
  };
}
function exportProgress() {
  const blob = new Blob([JSON.stringify(G.checkpoint(state), null, 2)], {
      type: "application/json",
    }),
    url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = "INMUNO-INTERIOR-PROGRESO.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$("#progress-import").onchange = async (e) => {
  const f = e.target.files[0];
  e.target.value = "";
  if (!f) return;
  try {
    if (f.size > 10000) throw Error("Archivo demasiado grande.");
    const incoming = G.restore(JSON.parse(await f.text()));
    if (!incoming) throw Error("Elige un progreso de Expedición interior.");
    show(
      "confirm",
      `<h2 id="dialog-title">Cargar expedición</h2><p>${incoming.completed.length}/4 regiones recuperadas · ${grades[incoming.level - 1]} de primaria</p><div class="modal-footer"><button id="cancel-import">Cancelar</button><button id="confirm-import" class="primary">Cargar</button></div>`,
    );
    $("#cancel-import").onclick = pause;
    $("#confirm-import").onclick = () => {
      state = incoming;
      level = state.level;
      save();
      brief();
    };
  } catch (err) {
    toast(err.message);
  }
};
function renderHUD() {
  const r = G.regions[state.region],
    p = state.player,
    n = G.nearestNode(state);
  $("#place").textContent = r.place;
  $("#mission-name").textContent = r.name;
  const infected = state.nodes.find((n) => n.status === "infected");
  $("#objective").textContent = infected
    ? `Amenaza: ${{ viral: "virus", bacteriana: "bacteria", fungica: "hongo", severa: "compleja" }[r.kind]}. ${state.level === 1 ? r.hint : "Elige tu defensa y despeja el foco."}`
    : n?.status === "cleared"
      ? "Vuelve al foco despejado y mantén E para recuperar el tejido."
      : r.mission;
  $("#objectives").innerHTML = state.nodes
    .map(
      (n) =>
        `<li class="${n.status === "healthy" ? "done" : ""}"><i></i>${r.labels[n.id]}${n.status === "healthy" ? " · recuperado" : n.status === "infected" ? " · amenaza detectada" : n.status === "cleared" ? " · listo para recuperar" : ""}</li>`,
    )
    .join("");
  $("#grade").textContent = grades[state.level - 1] + " de primaria";
  $("#health-number").textContent = Math.ceil(p.health);
  $("#health-fill").style.width = p.health + "%";
  $("#energy-number").textContent = Math.floor(p.energy);
  $("#energy-fill").style.width = p.energy + "%";
  $("#progress").textContent = state.repairs + " / 3 focos recuperados";
  $("#equipment")
    .querySelectorAll("button")
    .forEach((b) => b.classList.toggle("active", +b.dataset.tool === p.tool));
  $("#shield-status").textContent =
    p.shield > 0
      ? "Activo"
      : p.shieldCooldown > 0
        ? Math.ceil(p.shieldCooldown) + " s"
        : "Listo · 20 de energía";
  const near = n && G.distance(p, n) < 4.8;
  $("#context").hidden = !near || n.status === "infected" || paused;
  $("#interact-button span").textContent =
    n?.status === "unknown"
      ? "Escanear " + r.labels[n.id]
      : "Mantén E · " + r.repair;
  $("#repair-progress").value = n?.progress || 0;
  $("#repair-progress").hidden = n?.status !== "cleared";
  const px = 60 + p.x * 1.5,
    pz = 60 + p.z * 1.5;
  $("#radar").innerHTML =
    `<circle cx="60" cy="60" r="46" fill="none" stroke="#b7cfca33"/><path d="M14 60h92M60 14v92" stroke="#b7cfca22"/>${G.cover.map((c) => `<circle cx="${60 + c.x * 1.5}" cy="${60 + c.z * 1.5}" r="${c.r * 1.5}" fill="#b2bdc333"/>`).join("")}${state.nodes.map((n) => `<circle cx="${60 + n.x * 1.5}" cy="${60 + n.z * 1.5}" r="3" fill="${n.status === "healthy" ? "#a1e9bc" : n.status === "infected" ? "#e491a9" : "#cfdfd8"}"/>`).join("")}${state.enemies.map((e) => `<circle cx="${60 + e.x * 1.5}" cy="${60 + e.z * 1.5}" r="1.5" fill="#e97e9c"/>`).join("")}<path d="M0-5 3 3 0 1-3 3Z" fill="#b1f2f0" transform="translate(${px},${pz}) rotate(${(-yaw * 180) / Math.PI})"/>`;
}
$("#equipment").innerHTML = Object.entries(G.equipment)
  .map(
    ([id, t]) =>
      `<button data-tool="${id}" style="--tool:${t.color}" aria-label="${id}: ${t.name}"><kbd>${id}</kbd><span class="tool-symbol">${id === "1" ? "Y" : id === "2" ? "◒" : "◉"}</span><b>${t.name}</b><small>${t.target}</small></button>`,
  )
  .join("");
$("#equipment")
  .querySelectorAll("button")
  .forEach(
    (b) =>
      (b.onclick = () => {
        state.player.tool = +b.dataset.tool;
        renderHUD();
        world?.canvas.focus();
      }),
  );
function flush() {
  const events = state.events;
  state.events = [];
  for (const e of events) {
    if (e.type === "shoot") audio.play("shoot");
    if (e.type === "hit") {
      $("#reticle").classList.add("hit");
      setTimeout(() => $("#reticle").classList.remove("hit"), 100);
    }
    if (e.type === "kill") audio.play("pop");
    if (e.type === "hurt") {
      audio.play("hurt");
      document.body.classList.add("hurt");
      setTimeout(() => document.body.classList.remove("hurt"), 250);
    }
    if (e.type === "shield" || e.type === "pickup") audio.play("heal");
    if (e.type === "scan") {
      audio.play("enemy");
      toast(
        `Escáner: ${{ viral: "virus detectados", bacteriana: "bacterias detectadas", fungica: "hongos detectados", severa: "amenaza compleja detectada" }[e.kind]}. ${state.level === 1 ? G.regions[state.region].hint : "Elige una defensa con 1, 2 o 3."}`,
      );
    }
    if (e.type === "clear")
      toast("Foco despejado. Acércate y mantén E para recuperar el tejido.");
    if (e.type === "repair") {
      audio.play("success");
      toast("Tejido recuperado. Busca el siguiente foco.");
    }
    if (e.type === "wrong" && state.time - wrongTime > 3) {
      wrongTime = state.time;
      toast(
        "Esta defensa no actúa sobre esa amenaza. " +
          G.regions[state.region].hint,
      );
    }
    if (e.type === "sequence" && state.time - sequenceTime > 3) {
      sequenceTime = state.time;
      toast(
        "Sigue el recorrido de la señal: 1 · Dendrita, 2 · Cuerpo celular, 3 · Axón.",
      );
    }
    if (e.type === "spore")
      toast(
        "El hongo ha liberado una nueva espora. Despeja el foco antes de que se extienda.",
      );
    if (e.type === "defeated") defeated();
    if (e.type === "complete") complete();
  }
}
function frame(now) {
  requestAnimationFrame(frame);
  if (document.hidden) {
    last = now;
    return;
  }
  let dt = Math.min(0.12, (now - (last || now)) / 1000);
  last = now;
  if (!paused) {
    if (keys.has("KeyZ")) yaw += dt * 1.8;
    if (keys.has("KeyC")) yaw -= dt * 1.8;
    for (let remaining = dt; remaining > 0; remaining -= 0.025) {
      G.tick(
        state,
        {
          yaw,
          forward:
            (keys.has("KeyW") || keys.has("ArrowUp") ? 1 : 0) -
            (keys.has("KeyS") || keys.has("ArrowDown") ? 1 : 0) +
            mobileY,
          right:
            (keys.has("KeyD") || keys.has("ArrowRight") ? 1 : 0) -
            (keys.has("KeyA") || keys.has("ArrowLeft") ? 1 : 0) +
            mobileX,
          sprint: keys.has("ShiftLeft"),
          fire: fire || keys.has("Space"),
          interact: interacting || keys.has("KeyE"),
        },
        Math.min(0.025, remaining),
      );
    }
    flush();
    if (now - hudTime > 130) {
      renderHUD();
      hudTime = now;
    }
  }
  if (world && (!world.soft || now - (world.lastRender || 0) > 60)) {
    world.render(state, yaw, pitch, dt || 0.016);
    world.lastRender = now;
    $("#world-labels").innerHTML = state.nodes
      .map((n) => {
        const v = world.project(n.x, n.z, 4.7);
        return v.z > 1 || Math.abs(v.x) > 1 || Math.abs(v.y) > 1
          ? ""
          : `<span class="world-label ${n.status === "healthy" ? "done" : ""}" style="left:${(v.x * 0.5 + 0.5) * 100}%;top:${(-v.y * 0.5 + 0.5) * 100}%">${n.status === "healthy" ? "✓ " : ""}${G.regions[state.region].labels[n.id]} · ${Math.round(G.distance(state.player, n))} m</span>`;
      })
      .join("");
  }
}
$("#pause-button").onclick = pause;
$("#brand").onclick = (e) => {
  e.preventDefault();
  pause();
};
$("#map-button").onclick = () => {
  if (modal !== "welcome") openMap();
};
$("#help-button").onclick = () => {
  if (modal !== "welcome") {
    tutorialStep = 0;
    tutorial();
  }
};
$("#sound-button").onclick = () => {
  if (modal !== "welcome") sound();
};
$("#fullscreen").onclick = () => {
  if (document.fullscreenElement) document.exitFullscreen?.();
  else
    document.documentElement
      .requestFullscreen?.()
      .catch(() => toast("Puedes usar F11 para ampliar el juego."));
};
$("#shield-button").onclick = () => {
  if (!paused) {
    G.shield(state);
    flush();
    renderHUD();
  }
};
$("#interact-button").onpointerdown = (e) => {
  if (!paused) {
    interacting = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  }
};
$("#interact-button").onpointerup = $("#interact-button").onpointercancel =
  () => {
    interacting = false;
  };
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    e.preventDefault();
    if (!paused) pause();
    else if (["pause", "map", "sound", "codex", "tutorial"].includes(modal))
      close();
    return;
  }
  if (paused) return;
  if (
    ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
      e.code,
    )
  )
    e.preventDefault();
  keys.add(e.code);
  if (e.repeat) return;
  if (e.code === "KeyM") openMap();
  if (e.code === "KeyQ") G.shield(state);
  if (["Digit1", "Digit2", "Digit3"].includes(e.code)) {
    state.player.tool = +e.code.at(-1);
    renderHUD();
  }
});
window.addEventListener("keyup", (e) => keys.delete(e.code));
window.addEventListener("blur", () => {
  clearInput();
  if (!paused) pause();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && !paused) pause();
});
world?.canvas.addEventListener("contextmenu", (e) => e.preventDefault());
world?.canvas.addEventListener("pointerdown", (e) => {
  if (paused) return;
  audio.unlock();
  world.canvas.focus();
  if (e.button === 2) {
    drag = { x: e.clientX, y: e.clientY };
    world.canvas.setPointerCapture(e.pointerId);
  } else if (e.button === 0 && !touch) fire = true;
});
window.addEventListener("pointermove", (e) => {
  if (!drag || paused) return;
  yaw -= (e.clientX - drag.x) * 0.006;
  pitch = Math.max(-0.5, Math.min(0.65, pitch + (e.clientY - drag.y) * 0.003));
  drag = { x: e.clientX, y: e.clientY };
});
window.addEventListener("pointerup", () => {
  fire = interacting = false;
  drag = null;
});
const joystick = $("#joystick");
joystick.onpointerdown = (e) => {
  if (paused) return;
  stickId = e.pointerId;
  joystick.setPointerCapture(e.pointerId);
  moveStick(e);
};
function moveStick(e) {
  if (stickId !== e.pointerId) return;
  const r = joystick.getBoundingClientRect(),
    x = (e.clientX - r.left - r.width / 2) / 32,
    y = (e.clientY - r.top - r.height / 2) / 32,
    l = Math.max(1, Math.hypot(x, y));
  mobileX = x / l;
  mobileY = -y / l;
  $("#stick").style.transform =
    `translate(${mobileX * 26}px,${-mobileY * 26}px)`;
}
joystick.onpointermove = moveStick;
joystick.onpointerup = joystick.onpointercancel = () => {
  stickId = null;
  mobileX = mobileY = 0;
  $("#stick").style.transform = "";
};
$("#touch-look").onpointerdown = (e) => {
  if (!paused) {
    drag = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  }
};
$("#touch-fire").onpointerdown = (e) => {
  if (!paused) {
    fire = true;
    e.currentTarget.setPointerCapture(e.pointerId);
  }
};
$("#touch-fire").onpointerup = $("#touch-fire").onpointercancel = () => {
  fire = false;
};
dialog.addEventListener("cancel", (e) => {
  e.preventDefault();
  if (["pause", "map", "sound", "codex", "tutorial"].includes(modal)) close();
});
window.render_game_to_text = () =>
  JSON.stringify({
    phase: state.phase,
    paused,
    region: state.region,
    player: state.player,
    nodes: state.nodes,
    enemies: state.enemies,
    completed: state.completed,
    score: state.score,
    yaw,
    coordinateSystem: "x right, z south, y up; yaw 0 faces -z",
  });
// Test-only pose control lets browser checks visit actual objectives without long GPU-bound walks.
if (new URLSearchParams(location.search).has("qa"))
  window.__inmunoQA = {
    get: () => state,
    pose(x, z, angle = 0) {
      state.player.x = x;
      state.player.z = z;
      yaw = angle;
      renderHUD();
    },
    advance(ms, input = {}) {
      for (let t = 0; t < ms; t += 25)
        G.tick(state, { yaw, ...input }, Math.min(25, ms - t) / 1000);
      flush();
      renderHUD();
    },
    stats: () => world?.stats(),
  };
if (world) {
  welcome();
  renderHUD();
  requestAnimationFrame(frame);
} else
  show(
    "unsupported",
    '<h2 id="dialog-title">Activa los gráficos 3D del navegador</h2><p>Abre el juego con Chrome, Edge o Firefox y activa la aceleración gráfica.</p>',
  );
