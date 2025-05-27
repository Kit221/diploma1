import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArtistCard } from '../Parts/Artist';
import { TrackCard } from '../Parts/Music';
import { AlbumCard } from '../Parts/Album';
import './Search.css';
import { searchArtists, searchTracks, searchAlbums } from '../API/Last.FM';

/**
 * Страница поиска по артистам, трекам и альбомам.
 */

export const Search: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q')?.trim() || '';

  const [artists, setArtists] = useState<any[]>([]);
  const [tracks, setTracks] = useState<any[]>([]);
  const [albums, setAlbums] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);
  const [loadingAlbums, setLoadingAlbums] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  /**
   * Загружает результаты поиска.
   */

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        setArtists([]);
        setTracks([]);
        setAlbums([]);
        setLoading(false);
        setLoadingAlbums(false);
        return;
      }

      try {
        const [artistData, trackData, albumData] = await Promise.all([
          searchArtists(query),
          searchTracks(query),
          searchAlbums(query) 
        ]);

        const fetchedArtists = artistData?.results?.artistmatches?.artist || [];
        const artistsWithGenres = fetchedArtists.map((artist: any) => ({
          ...artist,
          genre: Array.isArray(artist.tags?.tag) && artist.tags.tag.length > 0
            ? artist.tags.tag[0].name
            : 'Unknown',
          imageUrl:
            artist.image.find((img: any) => img.size === 'large')?.['#text'] ||
            artist.image.find((img: any) => img['#text'])?.['#text'] ||
            '',
        }));

        const fetchedTracks = trackData?.results?.trackmatches?.track || [];
        const fetchedAlbums = albumData?.results?.albummatches?.album || [];

        setArtists(artistsWithGenres);
        setTracks(fetchedTracks);
        setAlbums(fetchedAlbums);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Ошибка при загрузке данных');
      } finally {
        setLoading(false);
        setLoadingAlbums(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) {
    return (
      <div className="searchPage">
        <h1 className="searchTitle">Поиск: "{query}"</h1>
        <p>Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="searchPage">
      <h1 className="searchTitle">Результаты поиска: "{query}"</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {artists.length > 0 && (
        <>
          <h1 className="searchSectionTitle">Артисты</h1>
          <div className="searchResultsGrid">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="searchResultItem"
                onClick={() => window.open(artist.url, '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open(artist.url, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <ArtistCard name={artist.name} genre={artist.genre} imageUrl={artist.imageUrl} />
              </div>
            ))}
          </div>
        </>
      )}
      {tracks.length > 0 && (
        <>
          <h1 className="searchSectionTitle">Треки</h1>
          <div className="searchResultsGrid">
            {tracks.map((track, index) => {
              const imageUrl =
                track.image.find((img: any) => img.size === 'large')?.['#text'] ||
                track.image.find((img: any) => img['#text'])?.['#text'] ||
                '';

              return (
                <div
                  key={index}
                  className="searchResultItemTwo"
                  onClick={() => window.open(track.url, '_blank', 'noopener noreferrer')}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.open(track.url, '_blank', 'noopener noreferrer');
                    }
                  }}
                >
                  <TrackCard title={track.name} artist={track.artist.name} imageUrl={imageUrl} />
                </div>
              );
            })}
          </div>
        </>
      )}
      {albums.length > 0 && (
        <>
          <h1 className="searchSectionTitle">Альбомы</h1>
          <div className="searchResultsGrid">
            {albums.map((album, index) => {
              const imageUrl =
                album.image.find((img: any) => img.size === 'large')?.['#text'] ||
                album.image.find((img: any) => img['#text'])?.['#text'] ||
                '';

              return (
                <div
                  key={index}
                  className="searchResultItemThree"
                  onClick={() => window.open(album.url, '_blank', 'noopener noreferrer')}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.open(album.url, '_blank', 'noopener noreferrer');
                    }
                  }}
                >
                  <AlbumCard name={album.name} artist={album.artist} imageUrl={imageUrl} />
                </div>
              );
            })}
          </div>
        </>
      )}
      {!artists.length && !tracks.length && !albums.length && (
        <p className="searchNoResults">Ничего не найдено.</p>
      )}
    </div>
  );
};
