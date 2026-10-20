// Player actions alone scan, choose, fire and repair. No renderer-driven outcomes.
export const regions = [
  {
    id: "respiratorio",
    name: "El último aliento",
    place: "Interior de un bronquiolo",
    organ: "Pulmones",
    color: "#d8969d",
    kind: "viral",
    tool: 1,
    mission:
      "Recupera tres alvéolos para que el oxígeno vuelva a pasar a la sangre.",
    fact: "Los alvéolos intercambian oxígeno y dióxido de carbono con la sangre.",
    hint: "Los anticuerpos reconocen antígenos específicos. El antibiótico no actúa contra los virus.",
    repair: "Restablecer intercambio de oxígeno",
    labels: ["Alvéolo A", "Alvéolo B", "Alvéolo C"],
  },
  {
    id: "circulatorio",
    name: "A contracorriente",
    place: "Interior de un vaso sanguíneo",
    organ: "Circulación",
    color: "#bb566e",
    kind: "bacteriana",
    tool: 2,
    mission:
      "Localiza las colonias bacterianas y recupera tres zonas del endotelio.",
    fact: "La sangre transporta oxígeno y nutrientes. El endotelio recubre los vasos sanguíneos.",
    hint: "El equipo médico ha autorizado un antibiótico contra esta bacteria. No sirve contra virus.",
    repair: "Recuperar endotelio",
    labels: ["Endotelio A", "Endotelio B", "Endotelio C"],
  },
  {
    id: "nervioso",
    name: "El mensaje perdido",
    place: "Entre neuronas",
    organ: "Sistema nervioso",
    color: "#6f80b0",
    kind: "severa",
    tool: 3,
    mission:
      "Recupera las conexiones en orden: dendrita, cuerpo celular y axón.",
    fact: "Las neuronas transmiten señales. Las dendritas reciben información y el axón la conduce.",
    hint: "Acércate a menos de 7 metros y activa Fagocitosis para reclutar una defensa.",
    repair: "Reconectar señal",
    labels: ["1 · Dendrita", "2 · Cuerpo celular", "3 · Axón"],
    ordered: true,
  },
  {
    id: "inmunologico",
    name: "Memoria de una defensa",
    place: "Interior de un ganglio linfático",
    organ: "Defensas",
    color: "#6ba59a",
    kind: "fungica",
    tool: 3,
    mission: "Contén tres focos de hongos antes de que generen nuevas esporas.",
    fact: "Los ganglios linfáticos coordinan respuestas inmunitarias. No todos los microbios son perjudiciales.",
    hint: "La fagocitosis engloba amenazas a corta distancia. Los hongos pueden generar nuevas esporas.",
    repair: "Estabilizar foco",
    labels: ["Foco A", "Foco B", "Foco C"],
    regrows: true,
  },
];
export const equipment = {
  1: {
    name: "Anticuerpo",
    target: "Virus",
    kind: "viral",
    color: "#80cde7",
    rate: 0.38,
    cost: 5,
    range: 32,
  },
  2: {
    name: "Antibiótico",
    target: "Bacteria",
    kind: "bacteriana",
    color: "#f5c778",
    rate: 0.44,
    cost: 7,
    range: 30,
  },
  3: {
    name: "Fagocitosis",
    target: "Bacteria / hongo · cerca",
    kind: "cell",
    color: "#b0e3c0",
    rate: 0.8,
    cost: 11,
    range: 7,
  },
};
export const nodePositions = [
  { x: -13, z: 0 },
  { x: 10, z: -12 },
  { x: 13, z: 12 },
];
export const cover = [
  { x: -4, z: 2, r: 2.2 },
  { x: 5, z: -4, r: 2 },
  { x: 2, z: 13, r: 1.7 },
];
export const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
export function height(x, z) {
  return (
    0.2 * Math.sin(x * 0.18) * Math.cos(z * 0.16) +
    0.07 * Math.sin(z * 0.7 + x * 0.3)
  );
}
export function createRun(level = 1, region = 0, completed = []) {
  return {
    version: 4,
    level,
    region,
    completed: [...completed],
    phase: "playing",
    time: 0,
    nextID: 1,
    player: {
      x: 0,
      z: 23,
      y: 0,
      health: 100,
      energy: 100,
      tool: 1,
      shield: 0,
      shieldCooldown: 0,
      cooldown: 0,
      invulnerable: 0,
    },
    nodes: nodePositions.map((p, i) => ({
      ...p,
      id: i,
      status: "unknown",
      progress: 0,
    })),
    enemies: [],
    shots: [],
    hostile: [],
    pickups: [],
    events: [],
    score: 0,
    shotsFired: 0,
    wrongShots: 0,
    repairs: 0,
    sporeClock: 0,
  };
}
export function nearestNode(s) {
  return (
    s.nodes
      .filter((n) => n.status !== "healthy")
      .sort((a, b) => distance(s.player, a) - distance(s.player, b))[0] || null
  );
}
function emit(s, type, detail = {}) {
  s.events.push({ type, ...detail });
}
function spawn(s, node, i) {
  const a = i * 2.4 + node.id,
    kind = regions[s.region].kind;
  s.enemies.push({
    id: s.nextID++,
    node: node.id,
    kind,
    x: node.x + Math.cos(a) * 4,
    z: node.z + Math.sin(a) * 4,
    hp: s.level === 3 ? 3 : 2,
    maxHP: s.level === 3 ? 3 : 2,
    cooldown: 1.5 + i * 0.7,
    hit: 0,
  });
}
export function interact(s) {
  if (s.phase !== "playing") return false;
  const n = nearestNode(s);
  if (!n || distance(s.player, n) > 4.8) return false;
  if (n.status === "unknown") {
    if (
      regions[s.region].ordered &&
      s.nodes.some((p) => p.id < n.id && p.status !== "healthy")
    ) {
      emit(s, "sequence");
      return false;
    }
    n.status = "infected";
    for (let i = 0; i < (s.level === 1 ? 2 : s.level === 2 ? 3 : 4); i++)
      spawn(s, n, i);
    emit(s, "scan", { node: n.id, kind: regions[s.region].kind });
    return true;
  }
  return false;
}
export function shield(s) {
  const p = s.player;
  if (s.phase !== "playing" || p.shieldCooldown > 0 || p.energy < 20)
    return false;
  p.energy -= 20;
  p.shield = 2.8;
  p.shieldCooldown = 9;
  emit(s, "shield");
  return true;
}
export function shoot(s, yaw) {
  const p = s.player,
    t = equipment[p.tool];
  if (s.phase !== "playing" || p.cooldown > 0 || p.energy < t.cost)
    return false;
  p.energy -= t.cost;
  p.cooldown = t.rate;
  s.shotsFired++;
  const dx = -Math.sin(yaw),
    dz = -Math.cos(yaw);
  s.shots.push({
    id: s.nextID++,
    x: p.x + dx * 0.8,
    z: p.z + dz * 0.8,
    dx,
    dz,
    tool: p.tool,
    life: t.range / 26,
  });
  emit(s, "shoot");
  return true;
}
function segment(a, b, p, r) {
  const x = b.x - a.x,
    z = b.z - a.z,
    t = Math.max(
      0,
      Math.min(1, ((p.x - a.x) * x + (p.z - a.z) * z) / (x * x + z * z || 1)),
    );
  return Math.hypot(a.x + t * x - p.x, a.z + t * z - p.z) < r;
}
function damage(s, value) {
  const p = s.player;
  if (p.invulnerable > 0) return;
  if (p.shield > 0) {
    emit(s, "blocked");
    return;
  }
  p.health = Math.max(0, p.health - value);
  p.invulnerable = 0.65;
  emit(s, "hurt");
  if (p.health === 0) {
    s.phase = "defeated";
    emit(s, "defeated");
  }
}
export function tick(s, input, dt) {
  dt = Math.max(0, Math.min(0.05, dt));
  if (s.phase !== "playing") return;
  s.time += dt;
  const p = s.player,
    yaw = input.yaw || 0;
  for (const k of ["shield", "shieldCooldown", "cooldown", "invulnerable"])
    p[k] = Math.max(0, p[k] - dt);
  p.energy = Math.min(100, p.energy + dt * 8);
  let f = input.forward || 0,
    r = input.right || 0,
    l = Math.hypot(f, r);
  if (l > 1) {
    f /= l;
    r /= l;
  }
  const speed = input.sprint ? 8 : 5.6;
  p.x += (Math.cos(yaw) * r - Math.sin(yaw) * f) * speed * dt;
  p.z += (-Math.sin(yaw) * r - Math.cos(yaw) * f) * speed * dt;
  for (const o of cover) {
    const d = distance(p, o);
    if (d < o.r + 0.6) {
      p.x = o.x + ((p.x - o.x) / (d || 1)) * (o.r + 0.6);
      p.z = o.z + ((p.z - o.z) / (d || 1)) * (o.r + 0.6);
    }
  }
  const radius = Math.hypot(p.x, p.z);
  if (radius > 29) {
    p.x *= 29 / radius;
    p.z *= 29 / radius;
  }
  if (input.fire) shoot(s, yaw);
  const nearby = nearestNode(s);
  for (const n of s.nodes) {
    if (n.status === "infected" && !s.enemies.some((e) => e.node === n.id)) {
      n.status = "cleared";
      emit(s, "clear", { node: n.id });
    }
    if (n.status === "cleared" && input.interact && distance(p, n) < 4.8) {
      n.progress += dt / (s.level === 1 ? 1.8 : 2.5);
      if (n.progress >= 1) {
        n.progress = 1;
        n.status = "healthy";
        s.repairs++;
        s.score += 400;
        p.health = Math.min(100, p.health + 15);
        emit(s, "repair", { node: n.id });
      }
    } else if (n.status === "cleared")
      n.progress = Math.max(0, n.progress - dt * 0.15);
  }
  if (input.interact && nearby?.status === "unknown") interact(s);
  for (const e of s.enemies) {
    e.cooldown -= dt;
    e.hit = Math.max(0, e.hit - dt);
    const d = distance(e, p),
      dx = (p.x - e.x) / (d || 1),
      dz = (p.z - e.z) / (d || 1),
      speed =
        (e.kind === "bacteriana" ? 2.4 : 1.6) *
        (s.level === 1 ? 0.65 : s.level === 3 ? 1.2 : 1);
    if (d > 2.6) {
      const nx = e.x + dx * speed * dt,
        nz = e.z + dz * speed * dt;
      if (!cover.some((o) => Math.hypot(nx - o.x, nz - o.z) < o.r + 0.6)) {
        e.x = nx;
        e.z = nz;
      }
    }
    if (d < 2.9 && e.cooldown <= 0) {
      damage(s, s.level === 1 ? 5 : 9);
      e.cooldown = 1.5;
    } else if (d < 22 && e.cooldown <= 0 && e.kind !== "bacteriana") {
      s.hostile.push({ id: s.nextID++, x: e.x, z: e.z, dx, dz, life: 4 });
      e.cooldown = s.level === 1 ? 4 : 2.8;
    }
  }
  for (const b of s.shots) {
    const old = { x: b.x, z: b.z };
    b.x += b.dx * 26 * dt;
    b.z += b.dz * 26 * dt;
    b.life -= dt;
    if (cover.some((o) => segment(old, b, o, o.r))) b.life = 0;
    if (b.life <= 0) continue;
    for (const e of s.enemies) {
      if (e.hp <= 0 || !segment(old, b, e, s.level === 1 ? 1.35 : 1.05))
        continue;
      b.life = 0;
      const correct =
        equipment[b.tool].kind === e.kind ||
        (b.tool === 3 && ["bacteriana", "fungica", "severa"].includes(e.kind));
      if (correct) {
        e.hp--;
        e.hit = 0.15;
        emit(s, "hit", { x: e.x, z: e.z });
        if (e.hp <= 0) {
          s.score += 100;
          s.pickups.push({ id: s.nextID++, x: e.x, z: e.z });
          emit(s, "kill", { x: e.x, z: e.z });
        }
      } else {
        s.wrongShots++;
        emit(s, "wrong", { kind: e.kind });
      }
      break;
    }
  }
  s.enemies = s.enemies.filter((e) => e.hp > 0);
  s.shots = s.shots.filter((b) => b.life > 0);
  for (const b of s.hostile) {
    const old = { x: b.x, z: b.z };
    b.x += b.dx * 8 * dt;
    b.z += b.dz * 8 * dt;
    b.life -= dt;
    if (cover.some((o) => segment(old, b, o, o.r))) b.life = 0;
    if (b.life > 0 && segment(old, b, p, 0.8)) {
      damage(s, s.level === 1 ? 4 : 7);
      b.life = 0;
    }
  }
  s.hostile = s.hostile.filter((b) => b.life > 0);
  s.pickups = s.pickups.filter((o) => {
    if (distance(p, o) < 1.8) {
      p.health = Math.min(100, p.health + 8);
      p.energy = Math.min(100, p.energy + 12);
      emit(s, "pickup");
      return false;
    }
    return true;
  });
  if (regions[s.region].regrows) {
    s.sporeClock += dt;
    if (s.sporeClock > (s.level === 1 ? 34 : 24)) {
      s.sporeClock = 0;
      const n = s.nodes.find((n) => n.status === "infected");
      if (n && s.enemies.length < 7) {
        spawn(s, n, s.nextID);
        emit(s, "spore");
      }
    }
  }
  if (s.phase === "playing" && s.nodes.every((n) => n.status === "healthy")) {
    s.phase = "complete";
    if (!s.completed.includes(s.region)) s.completed.push(s.region);
    emit(s, "complete");
  }
}
export function checkpoint(s) {
  return {
    version: 4,
    level: s.level,
    completed: [...s.completed],
    region: s.region,
  };
}
export function restore(v) {
  if (
    !v ||
    v.version !== 4 ||
    ![1, 2, 3].includes(v.level) ||
    !Number.isInteger(v.region) ||
    v.region < 0 ||
    v.region > 3 ||
    !Array.isArray(v.completed) ||
    v.completed.length > 4 ||
    !v.completed.every((n, i) => n === i)
  )
    return null;
  return createRun(v.level, Math.min(3, v.completed.length), v.completed);
}
