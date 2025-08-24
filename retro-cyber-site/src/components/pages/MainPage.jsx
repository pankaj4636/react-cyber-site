import React from 'react';
import Terminal from '../terminal/Terminal';
import GlitchText from '../common/GlitchText';
import useTypingEffect from '../../hooks/useTypingEffect';

function MainPage({ setCurrentPage, setSecretUnlocked, glitchActive }) {
  const typedText = useTypingEffect('ACCESSING MAINFRAME...');

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 relative">
      {/* Background grid effect */}
      <div className="fixed inset-0 opacity-5">
        <div className="cyber-grid"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with glitch effect */}
        <div className="text-center mb-12">
          <GlitchText isActive={glitchActive} className="text-4xl md:text-7xl font-bold mb-4 text-cyan-400">
            ◊ CYBER-NET ◊
          </GlitchText>
          <div className="text-lg md:text-xl text-yellow-400 mb-2">
            {typedText}<span className="animate-ping">█</span>
          </div>
          <div className="text-sm">
            {new Date().toLocaleDateString()} | SECURE CONNECTION ESTABLISHED
          </div>
        </div>

        {/* ASCII Art Banner */}
        <div className="text-center mb-8 text-xs text-green-300 hidden md:block">
          <pre className="ascii-art">
{`╔═══════════════════════════════════════════════════════════════╗
║  ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███╗   ██╗███████╗████████╗ ║
║ ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗████╗  ██║██╔════╝╚══██╔══╝ ║
║ ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝██╔██╗ ██║█████╗     ██║    ║
║ ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗██║╚██╗██║██╔══╝     ██║    ║
║ ╚██████╗   ██║   ██████╔╝███████╗██║  ██║██║ ╚████║███████╗   ██║    ║
║  ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝    ║
╚═══════════════════════════════════════════════════════════════╝`}
          </pre>
        </div>

        {/* Mobile ASCII Art */}
        <div className="text-center mb-8 text-xs text-green-300 block md:hidden">
          <pre className="ascii-art">
{`╔═══════════════════════╗
║     CYBER-NET         ║
║   TERMINAL v2.1       ║
╚═══════════════════════╝`}
          </pre>
        </div>

        {/* Navigation Menu */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-4">
            <button 
              className="px-4 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition-all duration-200"
              title="Inspect the source code for hidden clues..."
              onMouseEnter={() => console.log('HINT: Try running DIR command to find hidden files')}
            >
              [SYSTEMS]
            </button>
            <button 
              onClick={() => setCurrentPage('matrix')}
              className="px-4 py-2 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200"
            >
              [MATRIX]
            </button>
            <button 
              onClick={() => setCurrentPage('404')}
              className="px-4 py-2 border border-red-400 hover:bg-red-400 hover:text-black transition-all duration-200"
            >
              [NETWORK]
            </button>
          </div>
        </div>

        {/* Terminal Interface */}
        <Terminal setCurrentPage={setCurrentPage} setSecretUnlocked={setSecretUnlocked} />

        {/* Footer with hidden clues */}
        <div className="text-center mt-12 text-xs">
          <div className="text-gray-600 hover:text-green-400 transition-colors cursor-help">
            ◇ Status: Online | Security: Maximum | Access Level: Guest ◇
          </div>
          <div className="text-gray-700 mt-2 hover:text-yellow-400 transition-colors cursor-help">
            Hint: Some files might be hidden from normal view...
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;