import React from 'react';

function GlitchText({ children, isActive, className = '' }) {
  return (
    <div className={`${isActive ? 'glitch-active' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default GlitchText;