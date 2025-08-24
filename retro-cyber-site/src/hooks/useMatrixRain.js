import { useEffect, useRef } from 'react';

const useMatrixRain = (isActive = true) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Resize function
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const chars = ' ｱ 7 F ｼ 2 B ﾂ X 9 K 0 ｵ M 5 Z';
    const drops = Array(Math.floor(canvas.width / 20)).fill(1);
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = '15px monospace';
      
      drops.forEach((y, x) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, x * 20, y * 20);
        
        if (y * 20 > canvas.height && Math.random() > 0.975) {
          drops[x] = 0;
        }
        drops[x]++;
      });
    };
    
    const interval = setInterval(draw, 50);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isActive]);

  return canvasRef;
};

export default useMatrixRain;