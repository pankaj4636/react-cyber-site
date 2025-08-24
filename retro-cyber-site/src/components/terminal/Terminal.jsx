import React, { useState } from 'react';
import { handleCommand } from '../../utils/terminalCommands';

function Terminal({ setCurrentPage, setSecretUnlocked }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    'CYBERNET SYSTEMS v2.1',
    'Copyright (c) 1995 CyberCorp',
    'Type HELP for available commands'
  ]);

  const handleTerminalCommand = (e) => {
    if (e.key === 'Enter') {
      const result = handleCommand(
        terminalInput,
        terminalHistory,
        setCurrentPage,
        setSecretUnlocked
      );
      
      if (terminalInput.toUpperCase().trim() === 'CLS') {
        setTerminalHistory(result);
      } else {
        setTerminalHistory(result);
      }
      
      setTerminalInput('');
    }
  };

  return (
    <div className="border-2 border-green-400 bg-black/90 p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        <span className="text-sm ml-4">CyberNet Terminal v2.1</span>
      </div>
      
      <div className="h-64 overflow-y-auto mb-4 text-sm">
        {terminalHistory.map((line, index) => (
          <div key={index} className="mb-1">{line}</div>
        ))}
      </div>
      
      <div className="flex items-center">
        <span className="text-yellow-400 mr-2">C:\></span>
        <input
          type="text"
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          onKeyDown={handleTerminalCommand}
          className="bg-transparent border-none outline-none flex-1 text-green-400"
          placeholder="Enter command..."
          autoFocus
        />
        <span className="animate-pulse text-green-400">█</span>
      </div>
    </div>
  );
}

export default Terminal;