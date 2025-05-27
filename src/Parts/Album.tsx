import React from 'react';
import './Album.css';

interface AlbumCardProps {
  name: string;
  artist: string;
  imageUrl: string;
}

/**
 * Карточка альбома.
 */

export const AlbumCard: React.FC<AlbumCardProps> = ({ name, artist, imageUrl }) => {
  return (
    <div className="albumCard">
      <img
        src={imageUrl || 'https://lastfm.freetls.fastly.net/i/u/300x300/8fe88ba9c9cbd70bba7782a494c08d37.jpg '}
        alt={name}
        className="albumCardImage"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://lastfm.freetls.fastly.net/i/u/300x300/8fe88ba9c9cbd70bba7782a494c08d37.jpg ';
        }}
      />
      <h3 className="albumCardTitle">{name}</h3>
      <p className="albumCardArtist">{artist}</p>
    </div>
  );
};