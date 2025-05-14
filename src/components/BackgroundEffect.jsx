import { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId;

    // Ajuster la taille du canvas à la fenêtre
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Gérer le mouvement de la souris
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
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

      // Dessiner les lignes diagonales
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
          // Calculer la distance entre le point et la souris
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculer l'opacité en fonction de la distance
          let opacity = baseOpacity;
          if (distance < radius) {
            opacity = baseOpacity + (maxOpacity - baseOpacity) * (1 - distance / radius);
          }

          // Dessiner les lignes avec l'opacité calculée
          ctx.strokeStyle = `rgba(78, 205, 196, ${opacity})`;
          ctx.lineWidth = lineWidth;
          
          // Ligne diagonale 1
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + gridSize, y + gridSize);
          ctx.stroke();
          
          // Ligne diagonale 2
          ctx.beginPath();
          ctx.moveTo(x + gridSize, y);
          ctx.lineTo(x, y + gridSize);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialisation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Nettoyage
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