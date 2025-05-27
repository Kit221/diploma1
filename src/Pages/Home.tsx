import React, { useEffect, useState } from 'react';
import { ArtistCard } from '../Parts/Artist';
import { TrackCard } from '../Parts/Music';
import './Home.css';

import { fetchTopArtists, fetchTopTracks, fetchArtistInfo } from '../API/Last.FM';

/**
 * Главная страница сайта с популярными артистами и треками.
 */

export const Home: React.FC = () => {
  const [topArtists, setTopArtists] = useState<any[]>([]);
  const [topTracks, setTopTracks] = useState<any[]>([]);
  const [loadingArtists, setLoadingArtists] = useState(true);
  const [loadingTracks, setLoadingTracks] = useState(true);

  /**
   * Загружает 8 самых популярных артистов.
   */

  useEffect(() => {
    const loadArtists = async () => {
      try {
        const data = await fetchTopArtists(8); 
        const artists = data?.artists?.artist || [];
        const artistsWithGenres = await Promise.all(
          artists.map(async (artist: any) => {
            try {
              const info = await fetchArtistInfo(artist.name);
              const genre =
                Array.isArray(info.artist?.tags?.tag) && info.artist.tags.tag.length > 0
                  ? info.artist.tags.tag[0].name
                  : 'Unknown';

              return {
                ...artist,
                genre,
                imageUrl:
                  artist.image.find((img: any) => img.size === 'large')?.['#text'] ||
                  artist.image.find((img: any) => img['#text'])?.['#text'] ||
                  'https://lastfm.freetls.fastly.net/i/u/avatar70s/2a96cbd8b46e442fc41c2b86b821562f.jpg',
              };
            } catch (e) {
              return {
                ...artist,
                genre: 'Unknown',
                imageUrl: 'https://lastfm.freetls.fastly.net/i/u/avatar70s/2a96cbd8b46e442fc41c2b86b821562f.jpg',
              };
            }
          })
        );

        setTopArtists(artistsWithGenres);
      } catch (error) {
        console.error('Ошибка при загрузке артистов', error);
      } finally {
        setLoadingArtists(false);
      }
    };

    loadArtists();
  }, []);

  /**
   * Загружает 8 самых популярных треков.
   */

  useEffect(() => {
    const loadTracks = async () => {
      try {
        const data = await fetchTopTracks(8);
        const tracks = data?.tracks?.track || [];
        setTopTracks(tracks);
      } catch (error) {
        console.error('Ошибка при загрузке треков', error);
      } finally {
        setLoadingTracks(false);
      }
    };

    loadTracks();
  }, []);

  return (
    <div className="homePage">
      <h1 className="pageHeading">Music it's my life!</h1>
      <h2 className="sectionTitleLine">Hot right now</h2>

      <div className="resultsGrid">
        {loadingArtists ? (
          <p>Загрузка артистов...</p>
        ) : topArtists.length > 0 ? (
          topArtists.map((artist, index) => (
            <div
              key={index}
              className="artist-card-link"
              onClick={() => window.open(artist.url, '_blank', 'noopener,noreferrer')}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(artist.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <ArtistCard
                name={artist.name}
                genre={artist.genre} 
                imageUrl={artist.imageUrl}
              />
            </div>
          ))
        ) : (
          <p className="noResults">Нет данных о популярных артистах.</p>
        )}
      </div>

      {/* Popular Tracks */}
      <h2 className="sectionTitleLine">Popular tracks</h2>
      <div className="resultsGrid">
        {loadingTracks ? (
          <p>Загрузка треков...</p>
        ) : topTracks.length > 0 ? (
          topTracks.map((track, index) => {
            const imageUrl =
              track.image.find((img: any) => img.size === 'large')?.['#text'] ||
              track.image.find((img: any) => img['#text'])?.['#text'] ||
              'https://lastfm.freetls.fastly.net/i/u/avatar70s/2a96cbd8b46e442fc41c2b86b821562f.jpg';
            return (
              <div
                key={index}
                className="cardLink"
                onClick={() => window.open(track.url, '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open(track.url, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <TrackCard title={track.name} artist={track.artist.name} imageUrl={imageUrl} />
              </div>
            );
          })
        ) : (
          <p className="noResults">Нет популярных треков.</p>
        )}
      </div>
    </div>
  );
};