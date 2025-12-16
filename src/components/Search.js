import React from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: '50px', paddingBottom: '250px' }}>
      <h2 style={{ marginTop: '20px', color: 'var(--text-light)' }}>
        Episódios em Destaque
      </h2>
      <p className="tagline" style={{ marginBottom: '20px' }}>
        Escolha o tema de seu interesse:
      </p>

      <div className="episode-grid">
        <div 
          className="episode-card" 
          onClick={() => navigate('/episode/oficialato')}
        >
          <span className="material-icons card-icon">trending_up</span>
          <h4>Suba Rápido no Oficialato</h4>
          <p>Descubra as táticas e mentalidade para acelerar sua ascensão hierárquica na carreira militar.</p>
        </div>

        <div 
          className="episode-card" 
          onClick={() => navigate('/episode/projetos')}
        >
          <span className="material-icons card-icon">architecture</span>
          <h4>Elaboração de Projetos de Impacto</h4>
          <p>Guia completo para estruturar, formatar e apresentar projetos que serão aprovados e farão a diferença.</p>
        </div>
        
        <div 
          className="episode-card" 
          style={{
            border: '1px solid var(--accent-blue)',
            background: '#0d0d0d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
          onClick={() => alert('Obrigado por querer apoiar o projeto!')}
        >
          <div style={{
            height: '80px',
            width: '80px',
            margin: '10px auto',
            background: 'radial-gradient(circle, var(--accent-blue) 0%, rgba(30, 215, 96, 0.5) 70%, transparent 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--header-dark)',
            fontSize: '1rem',
            fontWeight: '700',
            textAlign: 'center',
            lineHeight: '1.2',
            textTransform: 'uppercase',
            boxShadow: '0 0 15px rgba(30, 215, 96, 0.9)'
          }}>
            Taças
          </div>
          <h4 style={{ color: 'var(--text-light)', marginTop: '5px' }}>
            Apoie o Projeto
          </h4>
          <p style={{ color: 'var(--text-dim)' }}>
            Gostou do conteúdo? Compartilhe e junte-se aos que brindam o futuro!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;