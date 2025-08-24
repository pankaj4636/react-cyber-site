import React from 'react';
import useMatrixRain from '../../hooks/useMatrixRain';

function MatrixPage({ setCurrentPage }) {
  const canvasRef = useMatrixRain(true);

  return (
    <div className="min-h-screen bg-black relative">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 p-8 text-green-400 font-mono text-center">
        <div className="mt-32">
          <h1 className="text-5xl font-bold mb-8 matrix-title">
            THE MATRIX
          </h1>
          <p className="text-xl mb-8">Welcome to the real world, Neo...</p>
          <div className="space-x-4">
            <button 
              onClick={() => setCurrentPage('main')}
              className="px-6 py-3 border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              [ WAKE UP ]
            </button>
            <button 
              onClick={() => setCurrentPage('secret')}
              className="px-6 py-3 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black transition-all duration-300"
            >
              [ STAY IN WONDERLAND ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatrixPage;