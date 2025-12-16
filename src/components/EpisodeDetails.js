import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { episodes } from '../data/episodes';

const EpisodeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const episode = episodes[id];

  if (!episode) {
    return <div>Episódio não encontrado</div>;
  }

  const handlePlay = () => {
    navigate(`/player/${id}`);
  };

  return (
    <div className="podcast-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="podcast-main">
        <div className="podcast-card">
          <h1>{episode.title}</h1>
          <span>{episode.author}</span>

          <div className="podcast-actions">
            <button className="play-btn" onClick={handlePlay}>
              Reproduzir
            </button>
            <div className="like">❤️ 2</div>
          </div>
        </div>

        <div>
          <div className="episodes-header">
            <div>#</div>
            <div></div>
            <div>TÍTULO</div>
            <div></div>
          </div>

          {episode.episodes.map((ep, index) => (
            <div 
              key={ep.id} 
              className="episode-item" 
              onClick={handlePlay}
            >
              <div>{index + 1}</div>
              <div></div>
              <div>
                <h3>{ep.title}</h3>
                <p>{ep.description}</p>
              </div>
              <div className="duration">{ep.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;