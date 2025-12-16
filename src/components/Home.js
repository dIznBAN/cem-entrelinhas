import React from 'react';

const Home = () => {
  return (
    <div className="home-view">
      <h1>Entrelinhas Podcast</h1>
      <p className="tagline">Análises aprofundadas sobre carreira e projetos.</p>
      <span className="floating-text">#UMBRINDEAOFUTURO</span>
      <p style={{
        marginTop: '50px',
        color: 'var(--text-dim)',
        maxWidth: '600px'
      }}>
        Selecione um tema na sua Biblioteca ou use "Buscar Episódio" para começar a aprofundar suas análises sobre ascensão profissional e desenvolvimento de projetos de impacto.
      </p>
    </div>
  );
};

export default Home;