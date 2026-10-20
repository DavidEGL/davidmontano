import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { regions, equipment, cover, height } from "./anatomy-engine.js";
const TAU = Math.PI * 2;
const asset = (p) => globalThis.__INMUNO_ASSETS__?.[p] || p;
export function createAnatomyWorld(host) {
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
  canvas.tabIndex = 0;
  canvas.setAttribute(
    "aria-label",
    "Mundo 3D dentro del cuerpo humano. WASD para moverte; arrastra para mirar.",
  );
  const gl = renderer.getContext(),
    ext = gl.getExtension("WEBGL_debug_renderer_info"),
    soft =
      !!ext &&
      /llvmpipe|swiftshader/i.test(
        gl.getParameter(ext.UNMASKED_RENDERER_WEBGL),
      );
  renderer.setPixelRatio(soft ? 0.8 : Math.min(devicePixelRatio, 1.6));
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.outputColorSpace = T.SRGBColorSpace;
  renderer.shadowMap.enabled = !soft;
  renderer.shadowMap.type = T.PCFShadowMap;
  const scene = new T.Scene();
  scene.background = new T.Color("#54353e");
  scene.fog = new T.FogExp2("#82515c", 0.022);
  const camera = new T.PerspectiveCamera(59, 1, 0.12, 150);
  camera.position.set(0, 5.5, 32);
  const hemi = new T.HemisphereLight("#f6d8cd", "#4d536b", 1.9);
  scene.add(hemi);
  const key = new T.DirectionalLight("#ffd3b3", 2.5);
  key.position.set(-16, 24, -15);
  key.castShadow = !soft;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, {
    left: -35,
    right: 35,
    top: 35,
    bottom: -35,
    near: 1,
    far: 80,
  });
  key.shadow.normalBias = 0.06;
  scene.add(key);
  const rim = new T.DirectionalLight("#99dee6", 2);
  rim.position.set(20, 10, 24);
  scene.add(rim);
  const lamp = new T.PointLight("#b0edfa", 95, 25, 2);
  scene.add(lamp);
  const tissue = new T.MeshPhysicalMaterial({
    color: "#cc959a",
    roughness: 0.54,
    clearcoat: 0.18,
    clearcoatRoughness: 0.5,
    side: T.DoubleSide,
  });
  const tissueDark = tissue.clone();
  tissueDark.color.set("#a45970");
  const membrane = tissue.clone();
  membrane.color.set("#e8c2bc");
  membrane.roughness = 0.38;
  membrane.clearcoat = 0.3;
  const vessel = new T.MeshStandardMaterial({
    color: "#9e3b55",
    roughness: 0.35,
  });
  const blueVessel = new T.MeshStandardMaterial({
    color: "#60738e",
    roughness: 0.45,
  });
  const silver = new T.MeshStandardMaterial({
    color: "#d5e5e7",
    roughness: 0.25,
    metalness: 0.48,
  });
  const graphite = new T.MeshStandardMaterial({
    color: "#283b4b",
    roughness: 0.35,
    metalness: 0.6,
  });
  const cyan = new T.MeshStandardMaterial({
    color: "#72d9e0",
    emissive: "#2393ae",
    emissiveIntensity: 1.5,
    roughness: 0.2,
  });
  const redCell = new T.MeshPhysicalMaterial({
    color: "#a42c49",
    roughness: 0.34,
    clearcoat: 0.2,
  });
  const glowMat = (color) =>
    new T.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: T.AdditiveBlending,
    });
  new T.TextureLoader().load(asset("assets/tissue/epithelium.jpg"), (tex) => {
    tex.colorSpace = T.SRGBColorSpace;
    tex.wrapS = tex.wrapT = T.RepeatWrapping;
    tex.repeat.set(5, 5);
    tex.anisotropy = soft
      ? 1
      : Math.min(8, renderer.capabilities.getMaxAnisotropy());
    for (const m of [tissue, tissueDark, membrane, wallMat]) {
      if (m !== membrane) m.map = tex;
      m.needsUpdate = true;
    }
    const bump = tex.clone();
    bump.colorSpace = T.NoColorSpace;
    bump.needsUpdate = true;
    for (const m of [tissue, tissueDark, membrane, wallMat]) {
      m.bumpMap = bump;
      m.bumpScale = 0.12;
      m.needsUpdate = true;
    }
  });
  const sphere = new T.SphereGeometry(1, soft ? 16 : 28, soft ? 10 : 18),
    box = new T.BoxGeometry(1, 1, 1),
    capsule = new T.CapsuleGeometry(0.3, 0.55, 6, 12),
    ring = new T.TorusGeometry(1, 0.035, 5, 48);
  const organic = sphere.clone();
  const pos = organic.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i),
      y = pos.getY(i),
      z = pos.getZ(i),
      n = 1 + 0.04 * Math.sin(x * 17 + z * 9) * Math.cos(y * 13);
    pos.setXYZ(i, x * n, y * n, z * n);
  }
  organic.computeVertexNormals();
  function mesh(geo, mat, parent = scene, p = [0, 0, 0], scale = [1, 1, 1]) {
    const o = new T.Mesh(geo, mat);
    o.position.set(...p);
    o.scale.set(...scale);
    o.castShadow = !soft;
    o.receiveShadow = true;
    parent.add(o);
    return o;
  }
  function tube(points, r, mat, parent = scene) {
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
  function inst(geo, mat, transforms, parent = scene) {
    const o = new T.InstancedMesh(geo, mat, transforms.length),
      d = new T.Object3D();
    transforms.forEach((t, i) => {
      d.position.set(...t.p);
      d.scale.set(...t.s);
      d.rotation.set(...(t.r || [0, 0, 0]));
      d.updateMatrix();
      o.setMatrixAt(i, d.matrix);
    });
    o.receiveShadow = true;
    parent.add(o);
    return o;
  }
  const floorGeo = new T.PlaneGeometry(76, 76, 64, 64);
  floorGeo.rotateX(-Math.PI / 2);
  const fp = floorGeo.attributes.position;
  for (let i = 0; i < fp.count; i++)
    fp.setY(i, height(fp.getX(i), fp.getZ(i)) - 0.1);
  floorGeo.computeVertexNormals();
  mesh(floorGeo, tissue);
  // A closed, irregular tissue chamber surrounds and roofs the playable space.
  const shell = new T.SphereGeometry(1, 72, 44);
  const sp = shell.attributes.position;
  for (let i = 0; i < sp.count; i++) {
    const x = sp.getX(i),
      y = sp.getY(i),
      z = sp.getZ(i),
      n = 1 + 0.035 * Math.sin(x * 18 + z * 7) * Math.cos(y * 14);
    sp.setXYZ(i, x * n, y * n, z * n);
  }
  shell.computeVertexNormals();
  const wallMat = tissueDark.clone();
  wallMat.side = T.BackSide;
  const wallMesh = mesh(shell, wallMat, scene, [0, 12, 0], [35, 24, 38]);
  const folds = [];
  for (let i = 0; i < 45; i++) {
    const a = (i / 45) * TAU;
    folds.push({
      p: [Math.sin(a) * 32, 5 + Math.sin(i * 2.2) * 2, Math.cos(a) * 34],
      s: [3.4, 8 + Math.sin(i) * 2, 3.7],
      r: [0, -a, 0],
    });
  }
  const foldMesh = inst(organic, membrane, folds);
  const cilia = [];
  for (let i = 0; i < 470; i++) {
    const a = i * 2.39996,
      r = 28 + Math.sin(i * 5.7) * 2;
    cilia.push({
      p: [Math.sin(a) * r, 0.5 + Math.sin(i) * 0.1, Math.cos(a) * r],
      s: [0.07, 0.6 + ((i * 17) % 10) * 0.07, 0.07],
      r: [Math.sin(i) * 0.4, 0, Math.cos(i) * 0.4],
    });
  }
  const ciliaMesh = inst(
    new T.CylinderGeometry(0.3, 0.2, 0.55, 5),
    membrane,
    cilia,
  );
  // Capillary networks visibly embedded in the floor and climbing the membrane.
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU,
      dx = Math.sin(a),
      dz = Math.cos(a);
    tube(
      [
        [dx * 7, -0.02, dz * 7],
        [dx * 18, 0.06, dz * 18],
        [dx * 30, 0.1, dz * 30],
        [dx * 34, 9, dz * 34],
      ],
      0.1,
      i % 3 === 0 ? blueVessel : vessel,
    );
    if (i % 2 === 0)
      tube(
        [
          [dx * 18, 0.04, dz * 18],
          [dx * 23 + dz * 4, 0.1, dz * 23 - dx * 4],
          [dx * 30 + dz * 4, 4, dz * 30 - dx * 4],
        ],
        0.065,
        vessel,
      );
  }
  const regionDetail = new T.Group();
  scene.add(regionDetail);
  const nodes = [];
  for (let i = 0; i < 3; i++) {
    const g = new T.Group();
    regionDetail.add(g);
    nodes.push(g);
  }
  const cellObstacles = [];
  for (const o of cover) {
    const obj = mesh(
      organic,
      membrane,
      scene,
      [o.x, 1.5, o.z],
      [o.r, 1.8, o.r],
    );
    cellObstacles.push(obj);
    mesh(
      sphere,
      tissueDark,
      scene,
      [o.x + 0.5, 2.3, o.z + 0.25],
      [0.6, 0.45, 0.6],
    );
  }
  const localDetail = new T.Group();
  scene.add(localDetail);
  let activeRegion = -1;
  function clearGroup(g) {
    for (const o of [...g.children]) {
      g.remove(o);
      o.traverse((c) => {
        if (
          c.isMesh &&
          c.geometry !== sphere &&
          c.geometry !== organic &&
          c.geometry !== box &&
          c.geometry !== ring
        )
          c.geometry.dispose();
      });
    }
  }
  function configure(index, s) {
    activeRegion = index;
    const r = regions[index];
    const base = ["#c38d96", "#a9576e", "#8790ae", "#83a496"][index];
    tissue.color.set(base);
    tissueDark.color.set(base).multiplyScalar(0.72);
    wallMat.color.copy(tissueDark.color);
    membrane.color.set(base).lerp(new T.Color("#eddbd1"), 0.68);
    scene.fog.color.set(base).multiplyScalar(0.6);
    scene.background.copy(scene.fog.color);
    ciliaMesh.visible = index === 0;
    clearGroup(localDetail);
    for (let i = 0; i < 3; i++) {
      const g = nodes[i];
      clearGroup(g);
      g.position.set(s.nodes[i].x, 0, s.nodes[i].z);
      if (index === 0) {
        const capillaries = [];
        for (let j = 0; j < 7; j++) {
          const a = j * 2.4,
            cx = Math.sin(a) * 1.8,
            cy = 1 + Math.cos(j) * 0.5,
            cz = Math.cos(a) * 1.8;
          mesh(organic, membrane, g, [cx, cy, cz], [1.45, 1.25, 1.5]);
          for (let k = 0; k < 3; k++) {
            const pts = [];
            for (let q = 0; q <= 12; q++) {
              const th = (q / 12) * Math.PI,
                ph = k * 1.9 + 0.15 * Math.sin(q);
              pts.push(
                new T.Vector3(
                  cx + 1.48 * Math.sin(th) * Math.cos(ph),
                  cy + 1.28 * Math.cos(th),
                  cz + 1.53 * Math.sin(th) * Math.sin(ph),
                ),
              );
            }
            capillaries.push(
              new T.TubeGeometry(
                new T.CatmullRomCurve3(pts),
                18,
                0.028,
                4,
                false,
              ),
            );
          }
        }
        const capGeo = mergeGeometries(capillaries);
        capillaries.forEach((c) => c.dispose());
        mesh(capGeo, vessel, g);
        tube(
          [
            [0, 1.3, 0],
            [0, 2.5, -1],
            [0, 3.8, -3],
          ],
          0.4,
          membrane,
          g,
        );
      } else if (index === 1) {
        const p = mesh(
          new T.TorusGeometry(1.7, 0.45, 12, 40),
          membrane,
          g,
          [0, 0.4, 0],
        );
        p.rotation.x = Math.PI / 2;
        mesh(sphere, tissueDark, g, [0, 0.25, 0], [1.5, 0.35, 1.5]);
      } else if (index === 2) {
        mesh(organic, membrane, g, [0, 1.4, 0], [1.4, 1.4, 1.4]);
        for (let j = 0; j < 5; j++) {
          const a = (j / 5) * TAU;
          tube(
            [
              [0, 1.3, 0],
              [Math.sin(a) * 2, 1.8, Math.cos(a) * 2],
              [Math.sin(a) * 4, 0.5, Math.cos(a) * 4],
            ],
            0.14,
            membrane,
            g,
          );
        }
      } else {
        for (let j = 0; j < 6; j++) {
          const a = j * 2.4;
          mesh(
            organic,
            membrane,
            g,
            [Math.sin(a) * 1.6, 1 + Math.cos(j) * 0.6, Math.cos(a) * 1.6],
            [1, 1, 1],
          );
        }
      }
      const marker = mesh(ring, cyan, g, [0, 4, 0], [1.1, 1.1, 1.1]);
      g.userData.marker = marker;
      const scan = mesh(
        new T.CylinderGeometry(3.6, 3.6, 0.02, 48),
        glowMat("#8ce9e0"),
        g,
        [0, 0.15, 0],
      );
      g.userData.scan = scan;
    }
    if (index === 0) {
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * TAU;
        for (let j = 0; j < 3; j++)
          mesh(
            organic,
            membrane,
            localDetail,
            [
              Math.sin(a) * 34 + Math.sin(j * 3) * 1.5,
              11 + j * 3,
              Math.cos(a) * 35,
            ],
            [3.5, 3, 3.5],
          );
      }
    }
    if (index === 1) {
      for (let i = 0; i < 9; i++) {
        const o = mesh(
          new T.TorusGeometry(31 - i * 0.22, 0.28, 6, 80),
          vessel,
          localDetail,
          [0, 6 + i * 0.8, 0],
        );
        o.rotation.x = Math.PI / 2;
      }
    }
    if (index === 2) {
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * TAU,
          x = Math.sin(a) * 26,
          z = Math.cos(a) * 26;
        mesh(organic, membrane, localDetail, [x, 7, z], [2, 2, 2]);
        for (let j = 0; j < 4; j++) {
          const b = a + j * 1.5;
          tube(
            [
              [x, 7, z],
              [x + Math.sin(b) * 5, 10, z + Math.cos(b) * 5],
              [x + Math.sin(b) * 8, 15, z + Math.cos(b) * 8],
            ],
            0.3,
            membrane,
            localDetail,
          );
        }
      }
      for (let i = 0; i < 2; i++) {
        const a = s.nodes[i],
          b = s.nodes[i + 1];
        tube(
          [
            [a.x, 0.3, a.z],
            [(a.x + b.x) / 2, 1, (a.z + b.z) / 2],
            [b.x, 0.3, b.z],
          ],
          0.15,
          cyan,
          localDetail,
        );
      }
    }
    if (index === 3) {
      const t = [];
      for (let i = 0; i < 60; i++) {
        const a = i * 2.39996;
        t.push({
          p: [
            Math.sin(a) * (25 + (i % 4)),
            2 + (i % 5) * 2.4,
            Math.cos(a) * (26 + (i % 3)),
          ],
          s: [1.5, 1.5, 1.5],
        });
      }
      inst(organic, membrane, t, localDetail);
    }
  }
  // Biconcave erythrocytes rather than spheres. Kept apart from enemy silhouettes.
  const rbcGeo = new T.SphereGeometry(1, 20, 12),
    rp = rbcGeo.attributes.position;
  for (let i = 0; i < rp.count; i++) {
    const x = rp.getX(i),
      y = rp.getY(i),
      z = rp.getZ(i),
      r = Math.hypot(x, z);
    rp.setY(i, y * (0.15 + 0.32 * r * r));
  }
  rbcGeo.computeVertexNormals();
  const blood = new T.InstancedMesh(rbcGeo, redCell, 48);
  scene.add(blood);
  const dummy = new T.Object3D();
  // Nanobot: compact articulated instrument, no cartoon face.
  const player = new T.Group();
  player.scale.setScalar(0.78);
  scene.add(player);
  mesh(
    new T.CapsuleGeometry(0.46, 0.65, 8, 18),
    silver,
    player,
    [0, 1.35, 0],
    [1, 0.95, 0.68],
  );
  mesh(sphere, graphite, player, [0, 2.15, 0], [0.49, 0.4, 0.44]);
  mesh(
    new T.TorusGeometry(0.37, 0.035, 6, 28),
    cyan,
    player,
    [0, 2.16, -0.32],
    [1, 0.65, 1],
  );
  mesh(box, graphite, player, [0, 1.55, 0.45], [0.65, 0.65, 0.25]);
  mesh(box, cyan, player, [0, 1.5, 0.61], [0.3, 0.07, 0.04]);
  const limbs = [];
  for (const side of [-1, 1]) {
    const arm = new T.Group();
    arm.position.set(side * 0.6, 1.7, 0);
    player.add(arm);
    mesh(capsule, silver, arm, [0, -0.3, 0], [0.6, 0.8, 0.6]);
    const fore = mesh(
      capsule,
      graphite,
      arm,
      [0, -0.62, -0.2],
      [0.65, 0.7, 0.65],
    );
    fore.rotation.x = -0.6;
    limbs.push(arm);
    const leg = new T.Group();
    leg.position.set(side * 0.24, 0.85, 0);
    player.add(leg);
    mesh(capsule, graphite, leg, [0, -0.34, 0], [0.67, 0.7, 0.67]);
    mesh(box, silver, leg, [0, -0.68, -0.13], [0.33, 0.16, 0.55]);
    limbs.push(leg);
  }
  const cannon = mesh(
    new T.CylinderGeometry(0.13, 0.19, 0.8, 12),
    graphite,
    player,
    [0.63, 1.35, -0.6],
  );
  cannon.rotation.x = Math.PI / 2;
  mesh(sphere, cyan, player, [0.63, 1.35, -1], [0.12, 0.12, 0.07]);
  const field = mesh(
    sphere,
    new T.MeshBasicMaterial({
      color: "#87e1ed",
      transparent: true,
      opacity: 0.16,
      wireframe: true,
      depthWrite: false,
    }),
    player,
    [0, 1.2, 0],
    [1.8, 1.8, 1.8],
  );
  field.visible = false;
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = shadowCanvas.height = 64;
  const c = shadowCanvas.getContext("2d"),
    gr = c.createRadialGradient(32, 32, 1, 32, 32, 32);
  gr.addColorStop(0, "rgba(12,16,25,.55)");
  gr.addColorStop(1, "rgba(12,16,25,0)");
  c.fillStyle = gr;
  c.fillRect(0, 0, 64, 64);
  const shadowTex = new T.CanvasTexture(shadowCanvas);
  const shadow = mesh(
    new T.PlaneGeometry(3.5, 3.5),
    new T.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    }),
    scene,
  );
  shadow.rotation.x = -Math.PI / 2;
  const enemyGroup = new T.Group();
  scene.add(enemyGroup);
  const enemies = new Map();
  function microbe(kind) {
    const g = new T.Group(),
      color = {
        viral: "#a971bd",
        bacteriana: "#bfbd76",
        fungica: "#dbc39e",
        severa: "#b692c2",
      }[kind],
      mat = new T.MeshStandardMaterial({
        color,
        roughness: 0.52,
        bumpMap: tissue.bumpMap,
        bumpScale: 0.1,
      });
    if (kind === "bacteriana") {
      const b = mesh(new T.CapsuleGeometry(0.5, 1.3, 8, 16), mat, g);
      b.rotation.z = Math.PI / 2;
      for (let i = 0; i < 2; i++)
        tube(
          [
            [1, 0, 0],
            [1.8, 0.3, i * 0.3],
            [2.5, -0.2, i * 0.4],
            [3, 0.4, i * 0.5],
          ],
          0.035,
          mat,
          g,
        );
    } else {
      mesh(organic, mat, g, [0, 0, 0], [1, kind === "fungica" ? 0.7 : 1, 1]);
      const spikes = [];
      for (let i = 0; i < 22; i++) {
        const y = 1 - (2 * (i + 0.5)) / 22,
          a = i * 2.39996,
          r = Math.sqrt(1 - y * y),
          v = new T.Vector3(Math.cos(a) * r, y, Math.sin(a) * r);
        const geo = new T.CylinderGeometry(0.13, 0.08, 0.55, 6);
        geo.applyQuaternion(
          new T.Quaternion().setFromUnitVectors(new T.Vector3(0, 1, 0), v),
        );
        geo.translate(v.x * 1.1, v.y * 1.1, v.z * 1.1);
        spikes.push(geo);
      }
      const merged = mergeGeometries(spikes);
      spikes.forEach((p) => p.dispose());
      mesh(merged, mat, g);
    }
    return g;
  }
  const projectileMat = new T.MeshBasicMaterial({ color: "#a2e8f5" }),
    hostileMat = new T.MeshBasicMaterial({ color: "#eb8cae" }),
    pickMat = new T.MeshBasicMaterial({ color: "#c2eed1" });
  const shotMesh = new T.InstancedMesh(sphere, projectileMat, 100),
    hostileMesh = new T.InstancedMesh(sphere, hostileMat, 80),
    pickupMesh = new T.InstancedMesh(
      new T.OctahedronGeometry(0.25),
      pickMat,
      60,
    );
  scene.add(shotMesh, hostileMesh, pickupMesh);
  shotMesh.frustumCulled =
    hostileMesh.frustumCulled =
    pickupMesh.frustumCulled =
      false;
  const pointsGeo = new T.BufferGeometry(),
    pcoords = [];
  for (let i = 0; i < 170; i++)
    pcoords.push(
      Math.sin(i * 2.4) * 31,
      1 + ((i * 1.73) % 20),
      Math.cos(i * 2.4) * 31,
    );
  pointsGeo.setAttribute("position", new T.Float32BufferAttribute(pcoords, 3));
  const motes = new T.Points(
    pointsGeo,
    new T.PointsMaterial({
      color: "#f1ded2",
      size: 0.08,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    }),
  );
  scene.add(motes);
  const cameraRay = new T.Raycaster();
  let prev = { x: 0, z: 23 },
    lastYaw = 0;
  function instances(obj, list, scale, y) {
    obj.count = Math.min(obj.instanceMatrix.count, list.length);
    for (let i = 0; i < obj.count; i++) {
      const b = list[i];
      dummy.position.set(b.x, height(b.x, b.z) + y, b.z);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      obj.setMatrixAt(i, dummy.matrix);
    }
    obj.instanceMatrix.needsUpdate = true;
  }
  function render(s, yaw, pitch, dt) {
    if (s.region !== activeRegion) configure(s.region, s);
    const p = s.player,
      t = s.time;
    const moved = Math.hypot(p.x - prev.x, p.z - prev.z) > 0.001;
    prev = { x: p.x, z: p.z };
    player.position.set(p.x, height(p.x, p.z), p.z);
    player.rotation.y = yaw;
    for (let i = 0; i < limbs.length; i++)
      limbs[i].rotation.x = moved
        ? Math.sin(t * 11 + (i % 2) * Math.PI + Math.floor(i / 2) * Math.PI) *
          0.42
        : 0;
    field.visible = p.shield > 0;
    shadow.position.set(p.x, height(p.x, p.z) + 0.02, p.z);
    lamp.position.set(p.x, 3, p.z - 1);
    const offset = new T.Vector3(
      Math.sin(yaw) * 7.3,
      4.4 + pitch * 4,
      Math.cos(yaw) * 7.3,
    );
    camera.position.lerp(
      player.position.clone().add(offset),
      Math.min(1, dt * 7),
    );
    const anchor = player.position.clone().add(new T.Vector3(0, 1.7, 0)),
      delta = camera.position.clone().sub(anchor),
      camDistance = delta.length();
    cameraRay.set(anchor, delta.normalize());
    cameraRay.far = camDistance;
    scene.updateMatrixWorld(true);
    const blockers = [
      wallMesh,
      foldMesh,
      localDetail,
      regionDetail,
      ...cellObstacles,
      ...scene.children.filter((o) => o.geometry?.type === "TubeGeometry"),
    ];
    const hit = cameraRay
      .intersectObjects(blockers, true)
      .find((h) => h.distance > 0.5);
    if (hit && hit.distance < camDistance)
      camera.position
        .copy(anchor)
        .addScaledVector(delta, Math.max(1.8, hit.distance - 0.4));
    camera.lookAt(
      p.x - Math.sin(yaw) * 7,
      1.25 + height(p.x, p.z) - pitch * 3,
      p.z - Math.cos(yaw) * 7,
    );
    lastYaw = yaw;
    for (let i = 0; i < 3; i++) {
      const n = s.nodes[i],
        g = nodes[i],
        done = n.status === "healthy";
      g.userData.marker.rotation.y = t * 0.5;
      g.userData.marker.material = done ? pickMat : cyan;
      g.userData.marker.position.y = 4 + Math.sin(t * 1.5 + i) * 0.12;
      g.userData.scan.material.color.set(
        done ? "#92e7b0" : n.status === "infected" ? "#ed879f" : "#8ce9e0",
      );
      g.userData.scan.material.opacity = done
        ? 0.12
        : 0.17 + 0.05 * Math.sin(t * 2);
    }
    for (const [id, g] of enemies)
      if (!s.enemies.some((e) => e.id === id)) {
        enemyGroup.remove(g);
        g.traverse((o) => {
          if (o.isMesh && ![sphere, organic].includes(o.geometry))
            o.geometry.dispose();
        });
        enemies.delete(id);
      }
    for (const e of s.enemies) {
      let g = enemies.get(e.id);
      if (!g) {
        g = microbe(e.kind);
        enemies.set(e.id, g);
        enemyGroup.add(g);
      }
      g.position.set(
        e.x,
        1.4 + height(e.x, e.z) + Math.sin(t * 2 + e.id) * 0.2,
        e.z,
      );
      g.rotation.y = t * 0.3 + e.id;
      g.scale.setScalar(e.hit > 0 ? 0.83 : 1);
    }
    instances(shotMesh, s.shots, 0.15, 1.35);
    projectileMat.color.set(equipment[p.tool].color);
    instances(hostileMesh, s.hostile, 0.2, 1.2);
    instances(pickupMesh, s.pickups, 0.95, 0.5);
    blood.visible = s.region === 1;
    blood.count = s.region === 1 ? 48 : 12;
    for (let i = 0; i < blood.count; i++) {
      const z = ((i * 7 + t * (s.region === 1 ? 3 : 0.8)) % 64) - 32;
      dummy.position.set(
        Math.sin(i * 3.7) * 25,
        s.region === 1 ? 3 + (i % 5) * 1.2 : 10 + (i % 4),
        z,
      );
      dummy.rotation.set(i * 0.6 + t * 0.1, i * 0.4, i * 0.7);
      dummy.scale.setScalar(s.region === 1 ? 1.1 : 0.65);
      dummy.updateMatrix();
      blood.setMatrixAt(i, dummy.matrix);
    }
    blood.instanceMatrix.needsUpdate = true;
    motes.rotation.y = t * 0.004;
    renderer.render(scene, camera);
  }
  function resize() {
    const w = host.clientWidth || innerWidth,
      h = host.clientHeight || innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);
  return {
    canvas,
    soft,
    render,
    project(x, z, y = 4) {
      return new T.Vector3(x, y, z).project(camera);
    },
    stats() {
      const ray = new T.Raycaster();
      ray.setFromCamera(new T.Vector2(0, 0), camera);
      return {
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        textures: renderer.info.memory.textures,
        camera: camera.position.toArray(),
        player: player.position.toArray(),
        hits: ray
          .intersectObjects(scene.children, true)
          .slice(0, 5)
          .map((h) => ({
            type: h.object.geometry?.type,
            pos: h.object.position.toArray(),
            scale: h.object.scale.toArray(),
            distance: h.distance,
          })),
      };
    },
    dispose() {
      window.removeEventListener("resize", resize);
      scene.traverse((o) => {
        o.geometry?.dispose();
      });
      renderer.dispose();
    },
  };
}
