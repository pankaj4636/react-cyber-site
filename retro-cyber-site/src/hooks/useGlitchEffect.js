import { useState, useEffect } from 'react';

const useGlitchEffect = (interval = 3000, duration = 200) => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchTimer = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), duration);
      }
    }, interval);
    
    return () => clearInterval(glitchTimer);
  }, [interval, duration]);

  return glitchActive;
};

export default useGlitchEffect;