import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { episodes } from '../data/episodes';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const episode = episodes[id];

  if (!episode) {
    return <div>Episódio não encontrado</div>;
  }

  return (
    <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="player-area">
        <h2>Reproduzindo: {episode.title}</h2>
        <div className="video-wrapper">
          <iframe
            src={episode.videoUrl}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={episode.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;