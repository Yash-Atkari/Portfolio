import React, { useRef, useEffect } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const shootingStars = useRef([]);
  const mouse = useRef({ x: null, y: null });

  // Detect mobile
  const isMobile = window.innerWidth <= 768;

  // Lower resolution and density for mobile
  const widthRef = useRef(isMobile ? 800 : 7680);
  const heightRef = useRef(isMobile ? 1600 : 4320);

  const STAR_LAYERS = isMobile ? 2 : 4;
  const STARS_PER_LAYER = isMobile ? 40 : 250;

  const initStars = () => {
    stars.current = [];
    for (let layer = 0; layer < STAR_LAYERS; layer++) {
      for (let i = 0; i < STARS_PER_LAYER; i++) {
        stars.current.push({
          x: Math.random() * widthRef.current,
          y: Math.random() * heightRef.current,
          radius: (Math.random() * 1.8 + 0.5) * (layer + 1),
          speed: 0.01 * (layer + 1),
          layer,
          baseX: 0,
          baseY: 0,
          twinkleSpeed: Math.random() * 0.015 + 0.007,
          opacity: Math.random() * 0.7 + 0.3,
          color: `hsl(210, 90%, ${80 - layer * 18}%)`
        });
      }
    }
    stars.current.forEach(star => {
      star.baseX = star.x;
      star.baseY = star.y;
    });
  };

  const createShootingStar = () => {
    shootingStars.current.push({
      x: Math.random() * widthRef.current,
      y: Math.random() * heightRef.current * 0.6,
      length: Math.random() * 80 + 80,
      speed: Math.random() * 8 + 12,
      size: Math.random() * 1.2 + 0.8,
      life: 0,
      maxLife: Math.random() * 30 + 30,
      angle: Math.random() * 0.25 + 0.15,
    });
  };

  const drawNebula = (ctx, width, height, time) => {
    // Optionally skip nebula on mobile for performance
    if (isMobile) return;
    const grad1 = ctx.createRadialGradient(
      width * 0.25 + Math.sin(time / 6000) * 600,
      height * 0.45 + Math.cos(time / 5000) * 450,
      800,
      width * 0.25,
      height * 0.45,
      2800
    );
    const grad2 = ctx.createRadialGradient(
      width * 0.70 + Math.cos(time / 8000) * 700,
      height * 0.60 + Math.sin(time / 7000) * 350,
      600,
      width * 0.70,
      height * 0.60,
      2500
    );
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = widthRef.current;
    let height = heightRef.current;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';

    initStars();

    let lastShootingStarTime = 0;
    let shootingStarInterval = isMobile ? 5000 : 3500;

    let driftX = 0;
    let driftY = 0;
    let driftSpeedX = 0.015;
    let driftSpeedY = 0.02;

    let animationFrameId;

    const animate = (time = 0) => {
      ctx.clearRect(0, 0, width, height);

      drawNebula(ctx, width, height, time);

      driftX += driftSpeedX;
      driftY += driftSpeedY;

      driftSpeedX += (Math.random() - 0.5) * 0.0003;
      driftSpeedY += (Math.random() - 0.5) * 0.0003;
      driftSpeedX = Math.min(Math.max(driftSpeedX, 0.012), 0.018);
      driftSpeedY = Math.min(Math.max(driftSpeedY, 0.015), 0.025);

      let inputX = 0;
      let inputY = 0;
      // Only use mouse on desktop
      if (!isMobile && mouse.current.x !== null && mouse.current.y !== null) {
        inputX = (mouse.current.x / window.innerWidth - 0.5) * 2;
        inputY = (mouse.current.y / window.innerHeight - 0.5) * 2;
      }

      const combinedOffsetX = driftX * 40 - inputX * 80;
      const combinedOffsetY = driftY * 40 - inputY * 80;

      stars.current.forEach(star => {
        star.x = star.baseX + combinedOffsetX / (star.layer + 1.5);
        star.y = star.baseY + combinedOffsetY / (star.layer + 1.5);

        star.opacity += star.twinkleSpeed;
        if (star.opacity >= 1) star.twinkleSpeed = -star.twinkleSpeed;
        if (star.opacity <= 0.25) star.twinkleSpeed = -star.twinkleSpeed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 10 * star.radius;
        ctx.fill();
      });

      // Shooting stars
      if (time - lastShootingStarTime > shootingStarInterval && shootingStars.current.length < (isMobile ? 1 : 3)) {
        createShootingStar();
        lastShootingStarTime = time;
        shootingStarInterval = (isMobile ? 4000 : 3000) + Math.random() * (isMobile ? 4000 : 5000);
      }

      shootingStars.current.forEach((star, idx) => {
        star.x += star.speed * Math.cos(star.angle);
        star.y += star.speed * Math.sin(star.angle);
        star.life++;

        const tailLength = star.length;

        ctx.strokeStyle = `rgba(255,255,255,${1 - star.life / star.maxLife})`;
        ctx.lineWidth = star.size * 1.3;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - tailLength * Math.cos(star.angle), star.y - tailLength * Math.sin(star.angle));
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.life / star.maxLife})`;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 20;
        ctx.fill();

        if (star.life > star.maxLife) shootingStars.current.splice(idx, 1);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Only add mouse listeners on desktop
    if (!isMobile) {
      const handleMouseMove = (e) => {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      };
      const handleMouseLeave = () => {
        mouse.current.x = null;
        mouse.current.y = null;
      };
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
      };
    } else {
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        background: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        userSelect: 'none',
        pointerEvents: 'none',
        willChange: 'transform',
        zIndex: -1,
      }}
    />
  );
}
