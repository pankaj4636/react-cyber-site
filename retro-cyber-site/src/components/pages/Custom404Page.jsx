import React from 'react';

function Custom404Page({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-red-900 text-red-100 p-8 font-mono">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-8xl font-bold mb-8 text-red-400 error-glitch">
          4 0 4
        </div>
        <div className="text-3xl mb-6 text-yellow-300">
          SYSTEM BREACH DETECTED
        </div>
        <div className="text-xl mb-8">
          UNAUTHORIZED ACCESS ATTEMPT LOGGED
        </div>
        <div className="border border-red-400 p-6 mb-8 bg-black/50">
          <h3 className="text-lg mb-4">INCIDENT REPORT</h3>
          <div className="text-left text-sm space-y-2">
            <div>TIMESTAMP: {new Date().toISOString()}</div>
            <div>IP ADDRESS: 192.168.1.{Math.floor(Math.random() * 255)}</div>
            <div>THREAT LEVEL: HIGH</div>
            <div>STATUS: CONTAINED</div>
          </div>
        </div>
        <button 
          onClick={() => setCurrentPage('main')}
          className="px-8 py-3 border-2 border-red-400 hover:bg-red-400 hover:text-black transition-all duration-300"
        >
          [ RETURN TO SAFETY ]
        </button>
      </div>
    </div>
  );
}

export default Custom404Page;