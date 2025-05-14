import { useRef, useEffect } from 'react';

export default function ParticulesFloues() {
  const canvasRef = useRef(null);
  const PARTICLE_COUNT = 18;
  const COLORS = [
    'rgba(62,214,182,0.18)',
    'rgba(78,205,196,0.13)',
    'rgba(78,220,220,0.10)',
    'rgba(78,205,196,0.15)'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId;
    let speedMultiplier = 1;

    // Particules
    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
      const baseX = Math.random() * width;
      const baseY = Math.random() * height;
      const angle = Math.random() * Math.PI * 2;
      const radiusMove = 80 + Math.random() * 80; // grand rayon d'oscillation
      return {
        baseX,
        baseY,
        x: baseX,
        y: baseY,
        r: 12 + Math.random() * 12,
        angle,
        speed: 0.003 + Math.random() * 0.002, // lent
        radiusMove,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      };
    });

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function animate(time) {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        // Oscillation sur un grand rayon
        p.angle += p.speed * speedMultiplier;
        p.x = p.baseX + Math.cos(p.angle) * p.radiusMove;
        p.y = p.baseY + Math.sin(p.angle) * p.radiusMove;
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.filter = 'blur(18px)';
        ctx.fill();
        ctx.restore();
      }
      animationId = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener('resize', resize);
    animate();

    // Accélération lors du scroll
    let scrollTimeout;
    const handleScroll = () => {
      speedMultiplier = 4;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        speedMultiplier = 1;
      }, 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
} 