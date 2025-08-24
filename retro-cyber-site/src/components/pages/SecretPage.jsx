import React from 'react';

function SecretPage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl font-bold mb-4 text-cyan-300 secret-glow">
            ◆ CLASSIFIED ACCESS ◆
          </div>
          <div className="text-xl text-yellow-400 mb-2">
            SECURITY CLEARANCE: LEVEL 9
          </div>
          <div className="text-sm text-green-300">
            {`SESSION ID: ${Math.random().toString(36).substr(2, 8).toUpperCase()}`}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-cyan-400 p-4 bg-black/70">
            <h3 className="text-lg text-cyan-400 mb-3 border-b border-cyan-400 pb-1">
              ◈ PROJECT FILES ◈
            </h3>
            <div className="text-sm text-green-300 space-y-1">
              <div>GHOST_PROTOCOL.EXE</div>
              <div>NEURAL_NET_V3.DAT</div>
              <div>CRYPTO_KEYS.CFG</div>
              <div>MAINFRAME_ACCESS.KEY</div>
              <div>CLASSIFIED_DOCS.ZIP</div>
            </div>
          </div>
          
          <div className="border border-yellow-400 p-4 bg-black/70">
            <h3 className="text-lg text-yellow-400 mb-3 border-b border-yellow-400 pb-1">
              ◈ SYSTEM STATUS ◈
            </h3>
            <div className="text-sm text-green-300 space-y-1">
              <div>FIREWALL: ACTIVE</div>
              <div>ENCRYPTION: 2048-BIT</div>
              <div>TRACKERS: DISABLED</div>
              <div>GHOST MODE: ENABLED</div>
              <div>CONNECTION: SECURED</div>
            </div>
          </div>
        </div>

        <div className="border-2 border-green-400 p-6 mb-6 bg-black/80">
          <h2 className="text-2xl text-green-400 mb-4 text-center">
            ═══ CLASSIFIED INTELLIGENCE ═══
          </h2>
          <div className="text-green-300 text-sm leading-relaxed">
            <p className="mb-2">
              PROJECT CODENAME: NEON GHOST
            </p>
            <p className="mb-2">
              OBJECTIVE: Advanced neural network integration with quantum encryption protocols.
            </p>
            <p className="mb-2">
              STATUS: Phase 3 Complete - Autonomous systems operational
            </p>
            <p className="text-yellow-400">
              WARNING: This information is classified under the Cyber Security Act of 1995
            </p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('main')}
            className="px-8 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 mr-4"
          >
            [ RETURN TO TERMINAL ]
          </button>
          <button 
            onClick={() => setCurrentPage('404')}
            className="px-8 py-3 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-black transition-all duration-300"
          >
            [ EMERGENCY EXIT ]
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecretPage;