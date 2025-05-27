import React from 'react';
import './Music.css';

interface TrackCardProps {
  title: string;
  artist: string;
  imageUrl: string;
}

/**
 * Карточка трека.
 * Название трека, исполнителя и обложка.
 */

export const TrackCard: React.FC<TrackCardProps> = ({ title, artist, imageUrl }) => {
  return (
    <div className="trackCard">
      <img src={imageUrl} alt={title} className="trackCardImage" />
      <h3 className="trackCardTitle">{title}</h3>
      <p className="trackCardArtist">{artist}</p>
    </div>
  );
};