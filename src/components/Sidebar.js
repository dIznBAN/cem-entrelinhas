import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo">
          <h2>Entrelinhas</h2>
        </div>
        
        <div className="nav-link" onClick={() => navigate('/')}>
          <span className="material-icons">home</span>
          Início
        </div>
        
        <div className="nav-link" onClick={() => navigate('/search')}>
          <span className="material-icons">search</span>
          Buscar Episódio
        </div>

        <div className="library">
          <h3>Sua Biblioteca</h3>
          <div className="nav-link" onClick={() => navigate('/episode/oficialato')}>
            <span className="material-icons">mic</span>
            Oficialato
          </div>
          <div className="nav-link" onClick={() => navigate('/episode/projetos')}>
            <span className="material-icons">notes</span>
            Projetos
          </div>
          <div style={{
            marginTop: '20px',
            fontSize: '0.8rem',
            backgroundColor: 'var(--bg-card)',
            padding: '10px',
            borderRadius: '4px',
            color: 'var(--accent-blue)',
            textAlign: 'center'
          }}>
            #UmBrindeAoFuturo
          </div>
        </div>
      </div>

      <div className="sidebar-footer">
        <p className="credit-text">Projeto idealizado por ,Policial</p>
        <p className="credit-text">Site desenvolvido por Slintow</p>
        <p className="credit-text" style={{marginTop: '5px'}}>
          © Todos os direitos reservados ao Centro de Elitização Militar
        </p>
      </div>
    </div>
  );
};

export default Sidebar;