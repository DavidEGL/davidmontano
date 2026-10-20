import * as T from "three";
import {
  zones,
  tools,
  mission,
  obstacles,
  groundHeight,
} from "./action-engine.js";
export function createActionWorld(host) {
  let renderer;
  try {
    renderer = new T.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch {
    return null;
  }
  host.append(renderer.domElement);
  const canvas = renderer.domElement;
  canvas.setAttribute(
    "aria-label",
    "Videojuego 3D en tercera persona. Mueve tu personaje con WASD.",
  );
  const gl = renderer.getContext(),
    debug = gl.getExtension("WEBGL_debug_renderer_info"),
    soft =
      debug &&
      /swiftshader|llvmpipe/i.test(
        gl.getParameter(debug.UNMASKED_RENDERER_WEBGL),
      );
  renderer.setPixelRatio(soft ? 0.8 : Math.min(devicePixelRatio, 1.75));
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.setClearColor("#74c9d7");
  const scene = new T.Scene();
  scene.fog = new T.Fog("#87ced3", 42, 130);
  const camera = new T.PerspectiveCamera(62, 1, 0.1, 230);
  scene.add(new T.HemisphereLight("#dcfaff", "#55749c", 2.4));
  const sun = new T.DirectionalLight("#fff0c2", 3.2);
  sun.position.set(-30, 60, -20);
  scene.add(sun);
  const material = (color, metalness = 0) =>
    new T.MeshStandardMaterial({ color, roughness: 0.65, metalness });
  const m = {
    ground: material("#70bda1"),
    cliff: material("#628aa1"),
    white: material("#edf7ec"),
    dark: material("#19344c"),
    teal: material("#2faeac"),
    gold: material("#f5bc42"),
    pink: material("#ed7196"),
    purple: material("#a47eee"),
    blue: material("#4098db"),
    red: material("#e6526b"),
  };
  const sphere = new T.SphereGeometry(1, 14, 10),
    cylinder = new T.CylinderGeometry(1, 1, 1, 24),
    box = new T.BoxGeometry(1, 1, 1),
    ring = new T.TorusGeometry(1, 0.12, 6, 32),
    oct = new T.OctahedronGeometry(1);
  function mesh(geometry, mat, parent, pos = [0, 0, 0], scale = [1, 1, 1]) {
    const o = new T.Mesh(geometry, mat);
    o.position.set(...pos);
    o.scale.set(...scale);
    parent.add(o);
    return o;
  }
  function ball(mat, parent, pos, scale) {
    return mesh(sphere, mat, parent, pos, scale);
  }
  function tube(points, r, mat, parent) {
    return mesh(
      new T.TubeGeometry(
        new T.CatmullRomCurve3(points.map((p) => new T.Vector3(...p))),
        32,
        r,
        7,
        false,
      ),
      mat,
      parent,
    );
  }
  function cross(parent, mat = m.white) {
    mesh(box, mat, parent, [0, 0, 0], [0.25, 0.9, 0.15]);
    mesh(box, mat, parent, [0, 0, 0], [0.85, 0.25, 0.15]);
  }
  mesh(new T.CylinderGeometry(65, 59, 9, 72), m.cliff, scene, [0, -4.65, 0]);
  mesh(new T.CylinderGeometry(65, 65, 0.4, 72), m.ground, scene, [0, -0.25, 0]);
  const sea = mesh(
    new T.PlaneGeometry(2000, 2000),
    material("#72b8cf"),
    scene,
    [0, -11, 0],
  );
  sea.rotation.x = -Math.PI / 2;
  // Coloured vessel roads lie at ground level and lead to the four organ districts.
  for (const z of zones) {
    const mat = material(z.color);
    const terrain = mesh(
      cylinder,
      mat,
      scene,
      [z.x, 0.015, z.z],
      [13, 0.06, 13],
    );
    tube(
      [
        [0, 0.1, 9],
        [z.x * 0.35, 0.1, z.z * 0.25],
        [z.x, 0.1, z.z],
      ],
      0.45,
      m.white,
      scene,
    );
    tube(
      [
        [0, 0.12, 9],
        [z.x * 0.35, 0.12, z.z * 0.25],
        [z.x, 0.12, z.z],
      ],
      0.14,
      mat,
      scene,
    );
    const g = new T.Group();
    g.position.set(z.x, 0, z.z);
    scene.add(g);
    const base = mesh(cylinder, m.white, g, [0, 0.18, 0], [3.8, 0.35, 3.8]);
    const glow = mesh(ring, mat, g, [0, 0.45, 0], [3.5, 3.5, 3.5]);
    glow.rotation.x = Math.PI / 2;
    if (z.id === "respiratorio") {
      for (const x of [-1.5, 1.5]) ball(mat, g, [x, 3.6, 0], [1.3, 2.4, 1.1]);
      tube(
        [
          [0, 6.5, 0],
          [0, 4.2, 0],
          [-1.1, 2.7, 1],
        ],
        0.24,
        m.white,
        g,
      );
      tube(
        [
          [0, 4.2, 0],
          [0.5, 3.5, 0.5],
          [1.1, 2.7, 1],
        ],
        0.24,
        m.white,
        g,
      );
    }
    if (z.id === "circulatorio") {
      const s = new T.Shape();
      s.moveTo(0, -1);
      s.bezierCurveTo(-2, 0.2, -1.4, 2.1, 0, 0.85);
      s.bezierCurveTo(1.4, 2.1, 2, 0.2, 0, -1);
      mesh(
        new T.ExtrudeGeometry(s, {
          depth: 0.7,
          bevelEnabled: true,
          bevelSize: 0.18,
          bevelThickness: 0.18,
          bevelSegments: 2,
          steps: 1,
        }),
        m.pink,
        g,
        [0, 3, 0],
        [2, 2, 2],
      );
      tube(
        [
          [-0.7, 5, 0],
          [-0.8, 6, 0],
          [0.7, 6, 0],
          [0.7, 4.8, 0],
        ],
        0.3,
        m.teal,
        g,
      );
    }
    if (z.id === "nervioso") {
      for (let i = 0; i < 18; i++) {
        const a = i * 2.399;
        ball(
          mat,
          g,
          [
            Math.cos(a) * (1 + (i % 3) * 0.3),
            4.2 + (i % 4) * 0.32,
            Math.sin(a) * 1.2,
          ],
          [0.9, 0.9, 0.9],
        );
      }
      mesh(cylinder, m.white, g, [0, 1.9, 0], [0.35, 3, 0.35]);
      for (let i = 0; i < 5; i++) {
        const a = (i * Math.PI * 2) / 5;
        tube(
          [
            [0, 1.3, 0],
            [Math.cos(a) * 2, 0.8, Math.sin(a) * 2],
            [Math.cos(a) * 3, 0.7, Math.sin(a) * 3],
          ],
          0.13,
          mat,
          g,
        );
      }
    }
    if (z.id === "inmunologico") {
      mesh(box, m.teal, g, [0, 2, 0], [4, 3, 2.5]);
      for (const x of [-2.4, 2.4]) {
        mesh(cylinder, m.teal, g, [x, 2.6, 0], [0.85, 4.7, 0.85]);
        mesh(new T.ConeGeometry(1.1, 1.2, 6), m.gold, g, [x, 5.5, 0]);
      }
      const badge = new T.Group();
      badge.position.set(0, 3, 1.4);
      badge.scale.setScalar(1.6);
      cross(badge);
      g.add(badge);
    }
    const console = new T.Group();
    console.position.set(0, 0.9, 4);
    g.add(console);
    mesh(box, m.dark, console, [0, 0, 0], [1.3, 1.6, 0.8]);
    mesh(box, mat, console, [0, 0.3, 0.45], [1, 0.65, 0.08]);
    cross(console, m.gold);
    console.rotation.y = Math.PI;
    // Signs are generated locally, so every landmark remains legible offline.
    const cv = document.createElement("canvas");
    cv.width = 512;
    cv.height = 100;
    const ctx = cv.getContext("2d");
    ctx.fillStyle = "#163751";
    ctx.fillRect(0, 0, 512, 100);
    ctx.fillStyle = "white";
    ctx.font = "bold 30px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(z.short.toUpperCase(), 256, 62);
    const signMat = new T.MeshBasicMaterial({
      map: new T.CanvasTexture(cv),
      side: T.DoubleSide,
    });
    mesh(new T.PlaneGeometry(6, 1.17), signMat, g, [0, 7.6, 0]);
  }
  // Hub: a jump pad and portal, approachable from any side.
  const portal = new T.Group();
  portal.position.set(0, 0, 2);
  scene.add(portal);
  mesh(cylinder, m.dark, portal, [0, 0.15, 0], [4, 0.3, 4]);
  const gate = mesh(
    new T.TorusGeometry(2.9, 0.35, 10, 48),
    m.gold,
    portal,
    [0, 3.2, 0],
  );
  const core = mesh(
    new T.CircleGeometry(2.6, 40),
    new T.MeshBasicMaterial({
      color: "#76ddda",
      transparent: true,
      opacity: 0.45,
      side: T.DoubleSide,
    }),
    portal,
    [0, 3.2, 0],
  );
  // A raised vessel bridge with walkable ramps, cover pods and distant terrain.
  const bridgeMat = material("#548fb0");
  mesh(box, bridgeMat, scene, [10, 1.5, -9], [8, 3, 10]);
  for (const [za, zb, ha, hb] of [
    [-23, -14, 0, 3],
    [-4, 5, 3, 0],
  ]) {
    const geom = new T.BufferGeometry();
    geom.setAttribute(
      "position",
      new T.Float32BufferAttribute(
        [6, ha, za, 14, ha, za, 14, hb, zb, 6, ha, za, 14, hb, zb, 6, hb, zb],
        3,
      ),
    );
    geom.computeVertexNormals();
    const ramp = mesh(
      geom,
      new T.MeshStandardMaterial({ color: "#6ca6bb", side: T.DoubleSide }),
      scene,
    );
  }
  for (const o of obstacles) {
    const pod = new T.Group();
    pod.position.set(o.x, 0, o.z);
    scene.add(pod);
    mesh(box, m.blue, pod, [0, 1.2, 0], [3.2, 2.4, 3.2]);
    for (const x of [-1.65, 1.65])
      mesh(box, m.white, pod, [x, 1.2, 0], [0.12, 2.5, 3.3]);
    const mark = new T.Group();
    mark.position.set(0, 1.3, 1.65);
    cross(mark);
    pod.add(mark);
  }
  const hills = new T.InstancedMesh(
    new T.ConeGeometry(1, 1, 5),
    material("#5b9eac"),
    24,
  );
  for (let i = 0; i < 24; i++) {
    const a = (i * Math.PI * 2) / 24;
    const d = new T.Object3D();
    d.position.set(Math.sin(a) * 86, -6, Math.cos(a) * 86);
    d.scale.set(13 + (i % 3) * 3, 22 + (i % 5) * 6, 15);
    d.rotation.y = i;
    d.updateMatrix();
    hills.setMatrixAt(i, d.matrix);
  }
  scene.add(hills);
  const bossPlatform = mesh(
    cylinder,
    m.dark,
    scene,
    [0, 0.05, -45],
    [12, 0.1, 12],
  );
  const bosscircle = mesh(ring, m.red, scene, [0, 0.15, -45], [11, 11, 11]);
  bosscircle.rotation.x = Math.PI / 2;
  // Instancing keeps dense scenery practical on classroom laptops.
  const dummy = new T.Object3D(),
    trunks = new T.InstancedMesh(cylinder, m.purple, 90),
    crowns = new T.InstancedMesh(sphere, m.teal, 90),
    rocks = new T.InstancedMesh(oct, m.blue, 65);
  for (let i = 0; i < 90; i++) {
    const a = i * 2.399,
      rad = 40 + (i % 7) * 3,
      x = Math.cos(a) * rad,
      z = Math.sin(a) * rad,
      h = 2 + (i % 4) * 0.7;
    dummy.position.set(x, h / 2, z);
    dummy.rotation.set(0, 0, Math.sin(i) * 0.15);
    dummy.scale.set(0.25, h, 0.25);
    dummy.updateMatrix();
    trunks.setMatrixAt(i, dummy.matrix);
    dummy.position.y = h;
    dummy.scale.set(1 + (i % 3) * 0.3, 0.8 + (i % 3) * 0.3, 1 + (i % 3) * 0.3);
    dummy.updateMatrix();
    crowns.setMatrixAt(i, dummy.matrix);
  }
  for (let i = 0; i < 65; i++) {
    const a = i * 2.399,
      rad = 30 + (i % 9) * 3.5;
    dummy.position.set(Math.cos(a) * rad, 0.4, Math.sin(a) * rad);
    dummy.rotation.set(i, 0, i * 0.8);
    dummy.scale.set(0.7 + (i % 3) * 0.3, 0.6 + (i % 4) * 0.3, 0.9);
    dummy.updateMatrix();
    rocks.setMatrixAt(i, dummy.matrix);
  }
  scene.add(trunks, crowns, rocks);
  // The playable explorer is an articulated 3D character, with a visor, backpack and tool.
  const hero = new T.Group();
  scene.add(hero);
  const torso = mesh(
    new T.CapsuleGeometry(0.48, 0.65, 4, 12),
    m.teal,
    hero,
    [0, 1.35, 0],
  );
  ball(m.white, hero, [0, 2.3, 0], [0.69, 0.66, 0.62]);
  ball(m.dark, hero, [0, 2.28, -0.43], [0.55, 0.34, 0.24]);
  for (const x of [-0.2, 0.2])
    ball(m.gold, hero, [x, 2.29, -0.65], [0.08, 0.12, 0.05]);
  mesh(box, m.blue, hero, [0, 1.5, 0.5], [0.75, 0.9, 0.45]);
  mesh(box, m.white, hero, [0, 1.5, 0.75], [0.55, 0.55, 0.08]);
  const rearBadge = new T.Group();
  rearBadge.position.set(0, 1.5, 0.81);
  rearBadge.scale.setScalar(0.42);
  cross(rearBadge, m.teal);
  hero.add(rearBadge);
  const helmetBand = mesh(ring, m.blue, hero, [0, 2.3, 0], [0.65, 0.65, 0.65]);
  helmetBand.rotation.x = Math.PI / 2;
  const badge = new T.Group();
  badge.position.set(0, 1.45, -0.52);
  badge.scale.setScalar(0.45);
  cross(badge);
  hero.add(badge);
  const limbs = [];
  for (const x of [-1, 1]) {
    const leg = new T.Group();
    leg.position.set(x * 0.28, 0.85, 0);
    hero.add(leg);
    mesh(new T.CapsuleGeometry(0.18, 0.38, 3, 8), m.dark, leg, [0, -0.32, 0]);
    ball(m.white, leg, [0, -0.65, -0.13], [0.25, 0.2, 0.36]);
    limbs.push(leg);
    const arm = new T.Group();
    arm.position.set(x * 0.59, 1.8, 0);
    arm.rotation.x = -0.7;
    hero.add(arm);
    mesh(new T.CapsuleGeometry(0.16, 0.45, 3, 8), m.white, arm, [0, -0.28, 0]);
    if (x === 1) {
      mesh(box, m.gold, arm, [0, -0.5, -0.35], [0.33, 0.33, 0.7]);
      const tip = mesh(
        cylinder,
        m.purple,
        arm,
        [0, -0.5, -0.76],
        [0.13, 0.2, 0.13],
      );
      tip.rotation.x = Math.PI / 2;
    }
  }
  const shadowMat = new T.MeshBasicMaterial({
    color: "#244b60",
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
  });
  const shadow = mesh(
    new T.CircleGeometry(0.7, 20),
    shadowMat,
    scene,
    [0, 0.08, 0],
  );
  shadow.rotation.x = -Math.PI / 2;
  const shieldBubble = mesh(
    sphere,
    new T.MeshBasicMaterial({
      color: "#7fffe0",
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    }),
    hero,
    [0, 1.3, 0],
    [1.2, 1.7, 1.2],
  );
  shieldBubble.visible = false;
  const enemyViews = new Map(),
    shotViews = new Map(),
    hostileViews = new Map(),
    pickupViews = new Map(),
    wallViews = new Map(),
    bursts = [];
  const shotMats = Object.fromEntries(
    Object.entries(tools).map(([k, v]) => [
      k,
      new T.MeshBasicMaterial({ color: v.color }),
    ]),
  );
  const badMat = new T.MeshBasicMaterial({ color: "#f16a9d" });
  function enemyView(e) {
    const g = new T.Group(),
      col =
        e.kind === "viral"
          ? m.purple
          : e.kind === "bacteriana"
            ? material("#8bd664")
            : e.kind === "fungica"
              ? m.gold
              : e.kind === "boss"
                ? m.red
                : m.pink;
    const scale = e.kind === "boss" ? 2.3 : 1;
    ball(col, g, [0, 0.9, 0], [0.85, 0.8, 0.85]);
    for (let i = 0; i < 7; i++) {
      const a = (i * Math.PI * 2) / 7;
      const o = mesh(
        e.kind === "fungica" ? sphere : oct,
        col,
        g,
        [Math.cos(a) * 0.9, 1 + Math.sin(a) * 0.75, 0],
        [0.22, 0.25, 0.22],
      );
    }
    for (const x of [-0.25, 0.25]) {
      ball(m.dark, g, [x, 1.1, -0.72], [0.16, 0.2, 0.1]);
      ball(m.white, g, [x, 1.15, -0.82], [0.045, 0.06, 0.04]);
    }
    g.scale.setScalar(scale);
    scene.add(g);
    return g;
  }
  function sync(list, views, make, update) {
    const alive = new Set(list.map((e) => e.id));
    for (const [id, v] of views)
      if (!alive.has(id)) {
        scene.remove(v);
        views.delete(id);
      }
    for (const e of list) {
      let v = views.get(e.id);
      if (!v) {
        v = make(e);
        views.set(e.id, v);
      }
      update(v, e);
    }
  }
  let lastX = 0,
    lastZ = 15,
    walk = 0,
    ready = false,
    shake = 0;
  const camPos = new T.Vector3(),
    target = new T.Vector3();
  function render(s, yaw, pitch, dt) {
    const p = s.player;
    const ground = groundHeight(p.x, p.z);
    hero.position.set(p.x, p.y + ground, p.z);
    shadow.position.set(p.x, ground + 0.08, p.z);
    shieldBubble.visible = p.shield > 0;
    const moved = Math.hypot(p.x - lastX, p.z - lastZ);
    walk += moved * 1.4;
    if (moved > 0.003) {
      const facing = Math.atan2(-(p.x - lastX), -(p.z - lastZ));
      hero.rotation.y = p.cooldown > 0 ? yaw : facing;
      limbs[0].rotation.x = Math.sin(walk) * 0.65;
      limbs[1].rotation.x = -Math.sin(walk) * 0.65;
    } else {
      limbs[0].rotation.x *= 0.8;
      limbs[1].rotation.x *= 0.8;
      hero.rotation.y = T.MathUtils.lerp(hero.rotation.y, yaw, 0.15);
    }
    lastX = p.x;
    lastZ = p.z;
    const dist = 8.5,
      up = 3.8 + pitch * 5;
    camPos.set(
      p.x + Math.sin(yaw) * dist + Math.cos(yaw) * 1.6,
      p.y + ground + up,
      p.z + Math.cos(yaw) * dist - Math.sin(yaw) * 1.6,
    );
    camera.position.lerp(camPos, ready ? Math.min(1, dt * 12) : 1);
    target.set(
      p.x - Math.sin(yaw) * 5,
      p.y + ground + 1.7 - pitch * 2,
      p.z - Math.cos(yaw) * 5,
    );
    camera.lookAt(target);
    ready = true;
    if (shake > 0) {
      camera.position.x += (Math.random() - 0.5) * shake;
      camera.position.y += (Math.random() - 0.5) * shake;
      shake *= 0.8;
    }
    sync(s.enemies, enemyViews, enemyView, (v, e) => {
      v.position.set(
        e.x,
        groundHeight(e.x, e.z) + Math.sin(s.time * 4 + e.phase) * 0.12,
        e.z,
      );
      v.rotation.y = Math.atan2(-(p.x - e.x), -(p.z - e.z));
      v.scale.setScalar((e.kind === "boss" ? 2.3 : 1) * (e.hit > 0 ? 1.15 : 1));
    });
    sync(
      s.shots,
      shotViews,
      (e) => mesh(sphere, shotMats[e.tool], scene, [0, 0, 0], [0.2, 0.2, 0.45]),
      (v, e) => {
        v.position.set(e.x, groundHeight(e.x, e.z) + 1.4, e.z);
        v.rotation.y = Math.atan2(e.dx, e.dz);
      },
    );
    sync(
      s.hostile,
      hostileViews,
      () => mesh(sphere, badMat, scene, [0, 0, 0], [0.3, 0.3, 0.3]),
      (v, e) => v.position.set(e.x, 1.1, e.z),
    );
    sync(
      s.pickups,
      pickupViews,
      () => mesh(oct, m.gold, scene, [0, 0, 0], [0.45, 0.6, 0.45]),
      (v, e) => {
        v.position.set(e.x, 0.8 + Math.sin(s.time * 3) * 0.2, e.z);
        v.rotation.y = s.time;
      },
    );
    sync(
      s.barriers,
      wallViews,
      () => {
        const g = new T.Group();
        mesh(
          box,
          new T.MeshBasicMaterial({
            color: "#80ffe0",
            transparent: true,
            opacity: 0.25,
          }),
          g,
          [0, 1.5, 0],
          [5, 3, 0.3],
        );
        for (const x of [-2.5, 2.5])
          mesh(box, m.teal, g, [x, 1.5, 0], [0.12, 3, 0.18]);
        mesh(box, m.teal, g, [0, 3, 0], [5, 0.12, 0.18]);
        scene.add(g);
        return g;
      },
      (v, e) => {
        v.position.set(e.x, 0, e.z);
        v.rotation.y = e.yaw;
      },
    );
    gate.rotation.z = Math.sin(s.time) * 0.03;
    core.material.opacity = s.completed.length === 4 ? 0.55 : 0.18;
    bosscircle.visible = s.bossStarted;
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i];
      b.life -= dt;
      b.mesh.scale.multiplyScalar(1 + dt * 3);
      b.mesh.material.opacity = Math.max(0, b.life * 2);
      if (b.life <= 0) {
        scene.remove(b.mesh);
        b.mesh.geometry.dispose();
        b.mesh.material.dispose();
        bursts.splice(i, 1);
      }
    }
    renderer.render(scene, camera);
  }
  function burst(x, z) {
    const o = mesh(
      new T.TorusGeometry(0.6, 0.13, 6, 24),
      new T.MeshBasicMaterial({
        color: "#fff3b2",
        transparent: true,
        opacity: 1,
      }),
      scene,
      [x, 1, z],
    );
    o.rotation.x = Math.PI / 2;
    bursts.push({ mesh: o, life: 0.45 });
  }
  function resize() {
    const b = host.getBoundingClientRect();
    renderer.setSize(b.width, b.height);
    camera.aspect = b.width / b.height;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host);
  resize();
  return {
    canvas,
    soft,
    render,
    burst,
    hurt() {
      shake = 0.2;
    },
    project(x, z) {
      return new T.Vector3(x, 3, z).project(camera);
    },
    dispose() {
      renderer.dispose();
    },
  };
}
