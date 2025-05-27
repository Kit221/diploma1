const API_KEY = "8c04ba1d51db3318b2dcec07cf4f16b2"; 
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

/**
 * Топ 10 артистов.
 */
export const fetchTopArtists = async (limit = 10) => {
  const response = await fetch(
    `${BASE_URL}?method=chart.gettopartists&limit=${limit}&api_key=${API_KEY}&format=json`
  );
  return response.json();
};

/**
 * Информация об артисте.
 */
export const fetchArtistInfo = async (artistName: string) => {
  const response = await fetch(
    `${BASE_URL}?method=artist.getinfo&artist=${encodeURIComponent(artistName)}&api_key=${API_KEY}&format=json`
  );
  return response.json();
};

/**
 * Топ 10 треков.
 */
export const fetchTopTracks = async (limit = 10) => {
  const response = await fetch(
    `${BASE_URL}?method=chart.gettoptracks&limit=${limit}&api_key=${API_KEY}&format=json`
  );
  return response.json();
};

/**
 * Поиск артистов по запросу.
 */
export const searchArtists = async (query: string, limit = 10) => {
  const response = await fetch(
    `${BASE_URL}?method=artist.search&artist=${query}&limit=${limit}&api_key=${API_KEY}&format=json`
  );
  return response.json();
};

/**
 * Поиск треков по запросу.
 */
export const searchTracks = async (query: string, limit = 10) => {
  const response = await fetch(
    `${BASE_URL}?method=track.search&track=${query}&limit=${limit}&api_key=${API_KEY}&format=json`
  );
  return response.json();
};

/**
 * Поиск альбомов по запросу.
 */
export const searchAlbums = async (query: string, limit = 10) => {
  const response = await fetch(
    `${BASE_URL}?method=album.search&album=${encodeURIComponent(query)}&limit=${limit}&api_key=${API_KEY}&format=json`
  );
  return response.json();
};
