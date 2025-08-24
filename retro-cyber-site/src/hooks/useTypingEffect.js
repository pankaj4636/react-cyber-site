import { useState, useEffect } from 'react';

const useTypingEffect = (text, speed = 100) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);

  return typedText;
};

export default useTypingEffect;