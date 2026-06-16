import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.4, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);
    const light = new THREE.PointLight(0x10b981, 28, 16);
    light.position.set(-2, 3, 4);
    scene.add(light);

    const materials = {
      hostel: new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.35, metalness: 0.12 }),
      ngo: new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.28, metalness: 0.08 }),
      food: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.2, metalness: 0.04 }),
      line: new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.55 }),
    };

    const makeBox = (x, colorMaterial, scale, name) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), colorMaterial);
      mesh.position.x = x;
      mesh.scale.set(...scale);
      mesh.name = name;
      group.add(mesh);
      return mesh;
    };

    const hostel = makeBox(-2.6, materials.hostel, [1.15, 1.35, 1.15], "Hostels");
    const ngo = makeBox(2.6, materials.ngo, [1.15, 1.05, 1.15], "NGOs");
    const family = new THREE.Mesh(new THREE.SphereGeometry(0.72, 48, 48), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.18 }));
    family.position.set(0, -1.15, 0);
    group.add(family);

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.6, 0.55, 0),
      new THREE.Vector3(-1, 1.6, 0.15),
      new THREE.Vector3(1, 1.55, -0.15),
      new THREE.Vector3(2.6, 0.35, 0),
      new THREE.Vector3(0, -0.9, 0),
    ]);
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(100)), materials.line));

    const foodItems = Array.from({ length: 9 }, (_, index) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.13 + (index % 3) * 0.025, 24, 24), materials.food);
      group.add(mesh);
      return { mesh, offset: index / 9 };
    });

    const particles = Array.from({ length: 80 }, () => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.55 }));
      mesh.position.set((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3);
      group.add(mesh);
      return mesh;
    });

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = Math.sin(elapsed * 0.35) * 0.18;
      hostel.rotation.y = elapsed * 0.25;
      ngo.rotation.y = -elapsed * 0.22;
      family.scale.setScalar(1 + Math.sin(elapsed * 1.6) * 0.04);
      foodItems.forEach((item) => {
        const point = curve.getPoint((elapsed * 0.12 + item.offset) % 1);
        item.mesh.position.copy(point);
        item.mesh.position.y += Math.sin(elapsed * 2 + item.offset * 8) * 0.06;
      });
      particles.forEach((particle, index) => {
        particle.position.y += Math.sin(elapsed + index) * 0.0015;
        particle.rotation.x += 0.01;
      });
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    let frame = requestAnimationFrame(animate);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full min-h-[420px] w-full" aria-label="Animated food redistribution visualization" />;
}
