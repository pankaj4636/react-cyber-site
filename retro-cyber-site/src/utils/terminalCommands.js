export const handleCommand = (command, terminalHistory, setCurrentPage, setSecretUnlocked) => {
  const cmd = command.toUpperCase().trim();
  const newHistory = [...terminalHistory, `C:\\> ${command}`];
  
  switch (cmd) {
    case 'HELP':
      newHistory.push('Available Commands:');
      newHistory.push('  DIR      - List directory contents');
      newHistory.push('  SYS      - Display system information');
      newHistory.push('  NET      - Network diagnostics');
      newHistory.push('  MATRIX   - Enter the matrix');
      newHistory.push('  CLS      - Clear screen');
      newHistory.push('  EXIT     - Logout');
      break;
      
    case 'DIR':
      newHistory.push('Directory of C:\\CYBERNET\\');
      newHistory.push('');
      newHistory.push(' SYSTEM   <DIR>     12-03-95   3:45p');
      newHistory.push(' CONFIG   DAT     2,048 12-03-95   3:45p');
      newHistory.push(' NEURAL   EXE    45,678 12-03-95   3:45p');
      newHistory.push(' README   TXT     1,234 12-03-95   3:45p');
      newHistory.push(' .HIDDEN  KEY         0 12-03-95   3:45p');
      newHistory.push('         5 file(s)     48,960 bytes');
      break;
      
    case '.HIDDEN':
    case 'HIDDEN.KEY':
    case '.HIDDEN.KEY':
      newHistory.push('ACCESS GRANTED');
      newHistory.push('DECRYPTING...');
      newHistory.push('KEY FOUND: NEON-GHOST-95');
      newHistory.push('INITIATING SECURE CONNECTION...');
      setTimeout(() => {
        setSecretUnlocked(true);
        setCurrentPage('secret');
      }, 2000);
      break;
      
    case 'SYS':
      newHistory.push('CYBERNET SYSTEM INFORMATION');
      newHistory.push('============================');
      newHistory.push('CPU: Intel 486DX4-100 MHz');
      newHistory.push('RAM: 16 MB');
      newHistory.push('HDD: 540 MB');
      newHistory.push('OS:  CyberOS v2.1.4');
      newHistory.push('NET: Connected to ARPANET');
      newHistory.push('STATUS: OPERATIONAL');
      break;
      
    case 'NET':
      newHistory.push('Network Diagnostics Running...');
      newHistory.push('Ping cybercorp.net ... OK');
      newHistory.push('Ping matrix.sys ... TIMEOUT');
      newHistory.push('Ping localhost ... OK');
      newHistory.push('WARNING: Unauthorized access attempts detected');
      break;
      
    case 'MATRIX':
      newHistory.push('Entering the Matrix...');
      newHistory.push('Reality is not what it seems...');
      setTimeout(() => setCurrentPage('matrix'), 1500);
      break;
      
    case 'CLS':
      return ['CYBERNET SYSTEMS v2.1', 'Copyright (c) 1995 CyberCorp'];
      
    case 'EXIT':
      newHistory.push('Logging out...');
      newHistory.push('Connection terminated.');
      setTimeout(() => setCurrentPage('main'), 1000);
      break;
      
    default:
      newHistory.push(`'${cmd}' is not recognized as a command.`);
      newHistory.push('Type HELP for available commands.');
  }
  
  return newHistory;
};