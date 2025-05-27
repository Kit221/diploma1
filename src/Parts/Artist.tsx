import React from 'react';
import './Artist.css'; 

/**
 * Компонент карточки исполнителя.
 */

interface ArtistCardProps {
  name: string;
  genre: string;
  imageUrl: string;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ name, genre, imageUrl }) => {
  return (
    <div className="card">
      <img
        src={imageUrl || 'https://lastfm.freetls.fastly.net/i/u/avatar70s/2a96cbd8b46e442fc41c2b86b821562f.jpg'}
        alt={name}
        className="image"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://lastfm.freetls.fastly.net/i/u/avatar70s/2a96cbd8b46e442fc41c2b86b821562f.jpg';
        }}
      />
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="genre">{genre}</p>
      </div>
    </div>
  );
};