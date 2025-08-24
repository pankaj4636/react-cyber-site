import React, { useState } from 'react';
import MainPage from './components/pages/MainPage';
import SecretPage from './components/pages/SecretPage';
import MatrixPage from './components/pages/MatrixPage';
import Custom404Page from './components/pages/Custom404Page';
import useGlitchEffect from './hooks/useGlitchEffect';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const glitchActive = useGlitchEffect();

  const pageProps = {
    currentPage,
    setCurrentPage,
    secretUnlocked,
    setSecretUnlocked,
    glitchActive
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'secret':
        return <SecretPage {...pageProps} />;
      case 'matrix':
        return <MatrixPage {...pageProps} />;
      case '404':
        return <Custom404Page {...pageProps} />;
      default:
        return <MainPage {...pageProps} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;