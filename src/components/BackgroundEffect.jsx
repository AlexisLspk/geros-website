import { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId;
    let dpr = window.devicePixelRatio || 1;

    // Ajuster la taille du canvas à la fenêtre et au devicePixelRatio
    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
      ctx.scale(dpr, dpr);
    };

    // Gérer le mouvement de la souris
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    // Fonction d'animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dessiner le quadrillage
      const gridSize = 150;
      const lineWidth = 0.3;
      const baseOpacity = 0.05;
      const maxOpacity = 0.3;
      const radius = 200;
      const DECALAGE_X = 80; // Décalage vers la gauche
      const DECALAGE_Y = 60; // Décalage vers le haut

      for (let x = 0; x < window.innerWidth; x += gridSize) {
        for (let y = 0; y < window.innerHeight; y += gridSize) {
          const dx = x - (mouseX - DECALAGE_X);
          const dy = y - (mouseY - DECALAGE_Y);
          const distance = Math.sqrt(dx * dx + dy * dy);
          let opacity = baseOpacity;
          if (distance < radius) {
            opacity = baseOpacity + (maxOpacity - baseOpacity) * (1 - distance / radius);
          }
          ctx.strokeStyle = `rgba(78, 205, 196, ${opacity})`;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + gridSize, y + gridSize);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x + gridSize, y);
          ctx.lineTo(x, y + gridSize);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
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
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
} 