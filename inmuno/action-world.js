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
  renderer.setPixelRatio(soft ? 1 : Math.min(devicePixelRatio, 1.8));
  renderer.toneMappingExposure = 0.9;
  renderer.shadowMap.enabled = !soft;
  renderer.shadowMap.type = T.PCFSoftShadowMap;
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.setClearColor("#74c9d7");
  const scene = new T.Scene();
  scene.fog = new T.Fog("#c6dfcd", 48, 150);
  const sky = new T.Mesh(
    new T.SphereGeometry(190, 32, 16),
    new T.ShaderMaterial({
      side: T.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new T.Color("#6bb7dd") },
        bottom: { value: new T.Color("#f5e4b2") },
      },
      vertexShader:
        "varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader:
        "uniform vec3 top;uniform vec3 bottom;varying vec3 v;void main(){float h=clamp(normalize(v).y*.8+.25,0.,1.);gl_FragColor=vec4(mix(bottom,top,pow(h,.65)),1.);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}",
    }),
  );
  scene.add(sky);
  const camera = new T.PerspectiveCamera(62, 1, 0.1, 230);
  scene.add(new T.HemisphereLight("#dcfaff", "#55749c", 2.4));
  const sun = new T.DirectionalLight("#fff0c2", 3.2);
  sun.position.set(-30, 60, -20);
  sun.castShadow = !soft;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, {
    left: -70,
    right: 70,
    top: 70,
    bottom: -70,
    near: 1,
    far: 160,
  });
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  const material = (color, metalness = 0) =>
    new T.MeshPhysicalMaterial({
      color,
      roughness: 0.4,
      metalness,
      clearcoat: 0.55,
      clearcoatRoughness: 0.25,
    });
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
  const sphere = new T.SphereGeometry(1, 24, 18),
    cylinder = new T.CylinderGeometry(1, 1, 1, 24),
    box = new T.BoxGeometry(1, 1, 1),
    ring = new T.TorusGeometry(1, 0.12, 6, 32),
    oct = new T.OctahedronGeometry(1);
  function mesh(geometry, mat, parent, pos = [0, 0, 0], scale = [1, 1, 1]) {
    const o = new T.Mesh(geometry, mat);
    o.position.set(...pos);
    o.scale.set(...scale);
    o.castShadow = !soft;
    o.receiveShadow = true;
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
  // Organic terrain with real height, mottled colour and fine surface detail.
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = textureCanvas.height = 256;
  const tc = textureCanvas.getContext("2d");
  tc.fillStyle = "#a3cdb0";
  tc.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2200; i++) {
    const x = ((Math.sin(i * 127.1) * 43758.5453) % 1) * 256,
      y = ((Math.cos(i * 71.7) * 31337) % 1) * 256;
    tc.fillStyle = i % 2 ? "rgba(255,255,230,.11)" : "rgba(15,90,80,.07)";
    tc.beginPath();
    tc.ellipse(
      Math.abs(x),
      Math.abs(y),
      1 + (i % 4),
      1 + (i % 3),
      i,
      0,
      Math.PI * 2,
    );
    tc.fill();
  }
  const groundTex = new T.CanvasTexture(textureCanvas);
  groundTex.wrapS = groundTex.wrapT = T.RepeatWrapping;
  groundTex.repeat.set(15, 15);
  groundTex.colorSpace = T.SRGBColorSpace;
  const terrainGeo = new T.PlaneGeometry(130, 130, 110, 110);
  terrainGeo.rotateX(-Math.PI / 2);
  const verts = terrainGeo.attributes.position,
    colors = [];
  for (let i = 0; i < verts.count; i++) {
    const x = verts.getX(i),
      z = verts.getZ(i);
    verts.setY(i, groundHeight(x, z) - 0.06);
    const blend = 0.5 + 0.25 * Math.sin(x * 0.14) * Math.cos(z * 0.13),
      c = new T.Color().lerpColors(
        new T.Color("#559f97"),
        new T.Color("#b1d5a5"),
        blend,
      );
    colors.push(c.r, c.g, c.b);
  }
  const indices = [];
  for (let i = 0; i < terrainGeo.index.count; i += 3) {
    const ids = [
      terrainGeo.index.getX(i),
      terrainGeo.index.getX(i + 1),
      terrainGeo.index.getX(i + 2),
    ];
    if (ids.every((v) => Math.hypot(verts.getX(v), verts.getZ(v)) < 65))
      indices.push(...ids);
  }
  terrainGeo.setIndex(indices);
  terrainGeo.setAttribute("color", new T.Float32BufferAttribute(colors, 3));
  terrainGeo.computeVertexNormals();
  const terrain = mesh(
    terrainGeo,
    new T.MeshStandardMaterial({
      map: groundTex,
      vertexColors: true,
      roughness: 1,
    }),
    scene,
  );
  terrain.receiveShadow = true;
  terrain.castShadow = false;
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
      [8, 0.025, 8],
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
    new T.IcosahedronGeometry(1, 2),
    new T.MeshStandardMaterial({ color: "#7ca99d", roughness: 1 }),
    24,
  );
  for (let i = 0; i < 24; i++) {
    const a = (i * Math.PI * 2) / 24;
    const d = new T.Object3D();
    d.position.set(Math.sin(a) * 86, -6, Math.cos(a) * 86);
    d.scale.set(15 + (i % 3) * 3, 18 + (i % 5) * 4, 16);
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
  const leafMaterial = new T.MeshStandardMaterial({
    color: "#b5d898",
    side: T.DoubleSide,
    roughness: 1,
  });
  const blade = new T.BufferGeometry();
  blade.setAttribute(
    "position",
    new T.Float32BufferAttribute([-0.11, 0, 0, 0.11, 0, 0, 0, 0.6, 0], 3),
  );
  blade.computeVertexNormals();
  const grass = new T.InstancedMesh(blade, leafMaterial, 2400);
  const plant = new T.Object3D();
  for (let i = 0; i < 2400; i++) {
    const a = Math.sin(i * 127.1) * 43758.5,
      b = Math.sin(i * 311.7) * 7541.2,
      x = ((a - Math.floor(a)) * 2 - 1) * 62,
      z = ((b - Math.floor(b)) * 2 - 1) * 62;
    const clear =
      Math.hypot(x, z) < 63 &&
      !zones.some((o) => Math.hypot(o.x - x, o.z - z) < 6);
    plant.position.set(x, clear ? groundHeight(x, z) + 0.28 : -10, z);
    plant.rotation.set(0.1, i * 2.399, 0.1 * Math.sin(i));
    plant.scale.setScalar(0.6 + (i % 7) * 0.15);
    plant.updateMatrix();
    grass.setMatrixAt(i, plant.matrix);
    grass.setColorAt(
      i,
      new T.Color().setHSL(0.36 + (i % 4) * 0.02, 0.28, 0.55 + (i % 5) * 0.025),
    );
  }
  scene.add(grass);
  const clouds = new T.InstancedMesh(
    sphere,
    new T.MeshBasicMaterial({ color: "#fff7e9" }),
    48,
  );
  for (let i = 0; i < 48; i++) {
    plant.position.set(
      Math.sin(Math.floor(i / 4) * 2.4) * 95 + (i % 4) * 3,
      28 + (i % 3) * 2,
      Math.cos(Math.floor(i / 4) * 2.4) * 95,
    );
    plant.rotation.set(0, i, 0);
    plant.scale.set(5 + (i % 3), 1.7 + (i % 2), 3.5);
    plant.updateMatrix();
    clouds.setMatrixAt(i, plant.matrix);
  }
  scene.add(clouds);
  const lobes = new T.InstancedMesh(
    sphere,
    new T.MeshPhysicalMaterial({
      color: "#59ae9c",
      roughness: 0.5,
      clearcoat: 0.4,
    }),
    180,
  );
  for (let i = 0; i < 180; i++) {
    const j = Math.floor(i / 2),
      a = j * 2.399,
      r = 40 + (j % 7) * 3,
      x = Math.cos(a) * r,
      z = Math.sin(a) * r,
      h = 2 + (j % 4) * 0.7;
    plant.position.set(x + (i % 2 ? 1 : -1), h + groundHeight(x, z), z + 0.45);
    plant.scale.set(1.3, 1.15, 1.2);
    plant.updateMatrix();
    lobes.setMatrixAt(i, plant.matrix);
  }
  scene.add(lobes);
  // A shared soft-contact texture grounds the character and the organ buildings.
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = shadowCanvas.height = 128;
  const sc = shadowCanvas.getContext("2d"),
    gradient = sc.createRadialGradient(64, 64, 3, 64, 64, 63);
  gradient.addColorStop(0, "rgba(12,46,47,.65)");
  gradient.addColorStop(1, "rgba(12,46,47,0)");
  sc.fillStyle = gradient;
  sc.fillRect(0, 0, 128, 128);
  const contact = new T.CanvasTexture(shadowCanvas);
  for (const z of zones) {
    const sh = mesh(
      new T.PlaneGeometry(13, 10),
      new T.MeshBasicMaterial({
        map: contact,
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
      }),
      scene,
      [z.x, 0.08, z.z],
    );
    sh.rotation.x = -Math.PI / 2;
    sh.castShadow = false;
  }
  // Lumi's agent: rounded armour, reflective visor, boots and a detailed life-support pack.
  const hero = new T.Group();
  scene.add(hero);
  const pearl = new T.MeshPhysicalMaterial({
      color: "#fff7e9",
      roughness: 0.26,
      metalness: 0.12,
      clearcoat: 1,
    }),
    suit = material("#2db4a6", 0.15),
    trim = material("#f5c45b", 0.35),
    glass = new T.MeshPhysicalMaterial({
      color: "#12394b",
      roughness: 0.13,
      metalness: 0.65,
      clearcoat: 1,
    });
  mesh(new T.CapsuleGeometry(0.49, 0.62, 8, 20), pearl, hero, [0, 1.35, 0]);
  ball(suit, hero, [0, 1.45, -0.29], [0.47, 0.48, 0.3]);
  mesh(new T.CylinderGeometry(0.5, 0.48, 0.16, 32), trim, hero, [0, 0.97, 0]);
  ball(pearl, hero, [0, 2.3, 0], [0.72, 0.68, 0.66]);
  ball(glass, hero, [0, 2.3, -0.42], [0.59, 0.39, 0.3]);
  for (const x of [-1, 1]) {
    ball(suit, hero, [x * 0.69, 2.28, 0], [0.13, 0.26, 0.28]);
    ball(trim, hero, [x * 0.72, 2.28, 0], [0.08, 0.13, 0.15]);
    ball(
      new T.MeshBasicMaterial({ color: "#b7fff0" }),
      hero,
      [x * 0.22, 2.31, -0.7],
      [0.085, 0.12, 0.035],
    );
  }
  const stripe = mesh(ring, suit, hero, [0, 2.3, 0], [0.69, 0.69, 0.69]);
  stripe.rotation.x = Math.PI / 2;
  mesh(
    new T.CylinderGeometry(0.035, 0.035, 0.5, 8),
    trim,
    hero,
    [0.35, 3, 0.04],
  );
  ball(
    new T.MeshBasicMaterial({ color: "#86ffdc" }),
    hero,
    [0.35, 3.27, 0.04],
    [0.09, 0.09, 0.09],
  );
  mesh(new T.CapsuleGeometry(0.33, 0.48, 6, 14), suit, hero, [0, 1.47, 0.51]);
  for (const x of [-0.26, 0.26])
    mesh(new T.CapsuleGeometry(0.115, 0.48, 4, 10), trim, hero, [
      x,
      1.48,
      0.67,
    ]);
  mesh(box, pearl, hero, [0, 1.45, 0.77], [0.46, 0.48, 0.1]);
  const mark = new T.Group();
  mark.position.set(0, 1.45, 0.85);
  mark.scale.setScalar(0.35);
  cross(mark, suit);
  hero.add(mark);
  const chest = new T.Group();
  chest.position.set(0, 1.5, -0.57);
  chest.scale.setScalar(0.35);
  cross(chest, pearl);
  hero.add(chest);
  const limbs = [];
  for (const side of [-1, 1]) {
    const leg = new T.Group();
    leg.position.set(side * 0.29, 0.9, 0);
    hero.add(leg);
    mesh(new T.CapsuleGeometry(0.19, 0.39, 5, 12), suit, leg, [0, -0.34, 0]);
    ball(pearl, leg, [0, -0.31, -0.13], [0.2, 0.24, 0.12]);
    ball(pearl, leg, [0, -0.68, -0.16], [0.27, 0.19, 0.39]);
    ball(trim, leg, [0, -0.77, -0.18], [0.28, 0.06, 0.38]);
    limbs.push(leg);
    const arm = new T.Group();
    arm.position.set(side * 0.6, 1.82, 0);
    arm.rotation.x = -0.6;
    hero.add(arm);
    ball(suit, arm, [0, 0, 0], [0.25, 0.26, 0.26]);
    mesh(new T.CapsuleGeometry(0.15, 0.36, 5, 12), pearl, arm, [0, -0.28, 0]);
    ball(trim, arm, [0, -0.53, -0.01], [0.18, 0.18, 0.2]);
    if (side === 1) {
      mesh(
        new T.CapsuleGeometry(0.14, 0.45, 5, 12),
        suit,
        arm,
        [0, -0.52, -0.32],
      ).rotation.x = Math.PI / 2;
      ball(
        new T.MeshBasicMaterial({ color: "#b7fff0" }),
        arm,
        [0, -0.52, -0.66],
        [0.13, 0.13, 0.07],
      );
    }
  }
  const shadowMat = new T.MeshBasicMaterial({
    map: contact,
    color: "#ffffff",
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
  });
  const shadow = mesh(
    new T.PlaneGeometry(2.7, 2.2),
    shadowMat,
    scene,
    [0, 0.08, 0],
  );
  shadow.rotation.x = -Math.PI / 2;
  const shieldBubble = mesh(
    sphere,
    new T.MeshPhysicalMaterial({
      color: "#7fffe0",
      transparent: true,
      opacity: 0.12,
      roughness: 0.1,
      metalness: 0.2,
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
            ? material("#8ccf73")
            : e.kind === "fungica"
              ? m.gold
              : e.kind === "boss"
                ? material("#da83b2")
                : m.pink;
    ball(
      col,
      g,
      [0, 0.95, 0],
      e.kind === "bacteriana" ? [1.12, 0.62, 0.62] : [0.87, 0.82, 0.85],
    );
    if (e.kind === "fungica") {
      ball(m.white, g, [0, 0.5, 0], [0.35, 0.6, 0.35]);
      ball(col, g, [0, 1.2, 0], [1, 0.45, 1]);
      for (let i = 0; i < 6; i++) {
        const a = i * 2.4;
        ball(
          m.white,
          g,
          [Math.cos(a) * 0.6, 1.52, Math.sin(a) * 0.6],
          [0.12, 0.07, 0.12],
        );
      }
    } else
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        const stalk = mesh(
          new T.CylinderGeometry(0.055, 0.07, 0.3, 8),
          col,
          g,
          [Math.cos(a) * 0.91, 1 + Math.sin(a) * 0.75, 0],
        );
        stalk.rotation.z = a - Math.PI / 2;
        ball(
          col,
          g,
          [Math.cos(a) * 1.08, 1 + Math.sin(a) * 0.91, 0],
          [0.14, 0.14, 0.14],
        );
      }
    for (const x of [-0.28, 0.28]) {
      ball(m.white, g, [x, 1.1, -0.74], [0.21, 0.25, 0.13]);
      ball(m.dark, g, [x, 1.08, -0.86], [0.105, 0.14, 0.045]);
      ball(m.white, g, [x - 0.025, 1.15, -0.9], [0.035, 0.04, 0.025]);
    }
    ball(m.pink, g, [-0.49, 0.91, -0.66], [0.12, 0.07, 0.04]);
    ball(m.pink, g, [0.49, 0.91, -0.66], [0.12, 0.07, 0.04]);
    const scale = e.kind === "boss" ? 2.2 : 1;
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
  const pathLights = new T.InstancedMesh(
    sphere,
    new T.MeshBasicMaterial({ color: "#ffe391" }),
    40,
  );
  scene.add(pathLights);
  let lightPath = [];
  function setGuide(s, guide) {
    const z = mission(s) || { x: 0, z: 2 };
    lightPath = guide.following
      ? guide.route
      : [{ x: s.player.x, z: s.player.z }, z];
    pathLights.visible = s.phase === "explore";
    const list =
      lightPath.length > 1 ? lightPath : [{ x: s.player.x, z: s.player.z }, z];
    for (let i = 0; i < 40; i++) {
      const t = (i / 39) * (list.length - 1),
        a = list[Math.floor(t)],
        b = list[Math.min(list.length - 1, Math.floor(t) + 1)],
        f = t % 1,
        x = a.x + (b.x - a.x) * f,
        zz = a.z + (b.z - a.z) * f;
      plant.position.set(x, groundHeight(x, zz) + 0.17, zz);
      plant.rotation.set(0, 0, 0);
      plant.scale.setScalar(0.1 + 0.055 * Math.sin(s.time * 3 - i * 0.4));
      plant.updateMatrix();
      pathLights.setMatrixAt(i, plant.matrix);
    }
    pathLights.instanceMatrix.needsUpdate = true;
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
    const dist = 10,
      up = 4.5 + pitch * 4;
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
    setGuide,
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
