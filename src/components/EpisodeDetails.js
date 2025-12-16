import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { episodes } from '../data/episodes';

const EpisodeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const episode = episodes[id];
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  if (!episode) {
    return <div>Episódio não encontrado</div>;
  }

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
              {isPlaying ? '⏸️' : '▶️'} {isPlaying ? 'Pausar' : 'Reproduzir'}
            </button>
            {isPlaying && (
              <div className="mini-player">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
                <span className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            )}
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

      <audio 
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={episode.audioUrl} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default EpisodeDetails;