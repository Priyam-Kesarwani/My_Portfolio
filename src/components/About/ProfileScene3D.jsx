import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function generateNodePositions(count, minRadius, maxRadius) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    const radius = minRadius + Math.random() * (maxRadius - minRadius);

    positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

function createStarTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.25, "rgba(201, 242, 108, 0.95)");
  gradient.addColorStop(0.55, "rgba(130, 69, 236, 0.45)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(32, 32, 32, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

const ProfileScene3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x8245ec, 2.5, 20);
    purpleLight.position.set(5, 5, 5);
    scene.add(purpleLight);

    const limeLight = new THREE.PointLight(0xc9f26c, 2, 20);
    limeLight.position.set(-5, -4, 4);
    scene.add(limeLight);

    // Group for all star particles
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Primary glowing stars (matching Project 2's lime nodes)
    const starCount = 140;
    const positions = generateNodePositions(starCount, 2.5, 4.2);
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starTexture = createStarTexture();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xc9f26c,
      size: 0.19,
      map: starTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    mainGroup.add(starPoints);

    // 2. Secondary layer of fine purple stardust
    const dustPositions = generateNodePositions(90, 2.3, 3.9);
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(dustPositions, 3)
    );
    const dustMaterial = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.13,
      map: starTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    mainGroup.add(dustPoints);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Rotate star clouds in opposite directions for dynamic depth
      starPoints.rotation.y -= delta * 0.07;
      starPoints.rotation.x += delta * 0.025;

      dustPoints.rotation.y += delta * 0.05;
      dustPoints.rotation.z -= delta * 0.02;

      // Mouse Parallax smooth lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.25;
      mainGroup.rotation.x = -targetY * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();

      // Clean up Three.js resources
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      starTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute -inset-16 sm:-inset-24 md:-inset-32 lg:-inset-40 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default ProfileScene3D;
