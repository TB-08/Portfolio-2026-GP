import { useEffect, useRef } from "react";
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  EdgesGeometry,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TorusGeometry,
  TorusKnotGeometry,
  WebGLRenderer,
} from "three";

function createParticleField(count) {
  const geometry = new BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const radius = 2.7 + ((index * 29) % 67) / 23;
    const angle = index * 2.39996;
    const drift = (((index * 17) % 31) - 15) / 8;

    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = Math.sin(angle * 1.31) * 2.15 + drift;
    positions[index * 3 + 2] = Math.sin(angle) * radius * 0.45;
  }

  geometry.setAttribute("position", new BufferAttribute(positions, 3));
  return geometry;
}

function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return undefined;
    }

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scene = new Scene();
    const camera = new PerspectiveCamera(44, 1, 0.1, 28);
    let renderer;

    try {
      renderer = new WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
    } catch {
      return undefined;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.domElement.className = "three-atmosphere-canvas";
    mount.appendChild(renderer.domElement);

    camera.position.set(0, 0, 8.4);

    const objectGroup = new Group();
    objectGroup.position.set(0.25, 0.15, 0);
    scene.add(objectGroup);

    const shellMaterial = new MeshBasicMaterial({
      blending: AdditiveBlending,
      color: 0x4b7fff,
      opacity: 0.16,
      transparent: true,
      wireframe: true,
    });
    const ribbonMaterial = new MeshBasicMaterial({
      blending: AdditiveBlending,
      color: 0xcfd6ed,
      opacity: 0.13,
      transparent: true,
    });
    const lineMaterial = new LineBasicMaterial({
      blending: AdditiveBlending,
      color: 0x75a0ff,
      opacity: 0.31,
      transparent: true,
    });
    const ringMaterial = new MeshBasicMaterial({
      blending: AdditiveBlending,
      color: 0x1246dd,
      opacity: 0.28,
      transparent: true,
    });

    const ribbon = new Mesh(
      new TorusKnotGeometry(1.35, 0.32, 120, 14, 2, 3),
      ribbonMaterial,
    );
    ribbon.rotation.set(0.45, -0.34, 0.18);
    objectGroup.add(ribbon);

    const shell = new Mesh(new IcosahedronGeometry(2.18, 1), shellMaterial);
    shell.rotation.set(-0.18, 0.45, 0.2);
    objectGroup.add(shell);

    const cageSource = new IcosahedronGeometry(2.52, 1);
    const cage = new LineSegments(new EdgesGeometry(cageSource), lineMaterial);
    cage.rotation.set(0.22, -0.38, 0.1);
    cageSource.dispose();
    objectGroup.add(cage);

    const halo = new Mesh(new TorusGeometry(3.12, 0.025, 8, 180), ringMaterial);
    halo.rotation.set(1.12, 0.28, 0.14);
    objectGroup.add(halo);

    const orbit = new Mesh(new TorusGeometry(2.66, 0.018, 8, 160), ringMaterial);
    orbit.rotation.set(0.36, 1.08, 0.34);
    objectGroup.add(orbit);

    const particleGeometry = createParticleField(126);
    const particles = new Points(
      particleGeometry,
      new PointsMaterial({
        blending: AdditiveBlending,
        color: 0xcfd6ed,
        opacity: 0.55,
        size: 0.045,
        sizeAttenuation: true,
        transparent: true,
      }),
    );
    scene.add(particles);

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const renderScene = (time = 0) => {
      const progress = time * 0.001;

      objectGroup.rotation.x = Math.sin(progress * 0.34) * 0.12;
      objectGroup.rotation.y = progress * 0.1;
      ribbon.rotation.z = progress * 0.16;
      shell.rotation.z = -progress * 0.06;
      halo.rotation.z = progress * 0.08;
      orbit.rotation.x = 0.36 + Math.sin(progress * 0.28) * 0.08;
      particles.rotation.y = -progress * 0.018;
      particles.rotation.z = Math.sin(progress * 0.22) * 0.03;
      camera.position.x = Math.sin(progress * 0.17) * 0.16;
      camera.position.y = Math.cos(progress * 0.13) * 0.1;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    let animationFrame = 0;
    const animate = (time) => {
      renderScene(time);
      animationFrame = window.requestAnimationFrame(animate);
    };
    const startMotion = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };
    const stopMotion = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };
    const handleMotionPreference = () => {
      if (reduceMotionQuery.matches) {
        stopMotion();
        renderScene();
        return;
      }

      startMotion();
    };

    resize();
    handleMotionPreference();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    reduceMotionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      stopMotion();
      resizeObserver.disconnect();
      reduceMotionQuery.removeEventListener("change", handleMotionPreference);
      scene.traverse((object) => {
        object.geometry?.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material?.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="three-atmosphere" aria-hidden="true" />;
}

export default ThreeBackground;
