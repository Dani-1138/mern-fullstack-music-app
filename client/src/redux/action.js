export const actionType = {
  // SET_USER: "SET_USER",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_FILTER_TERM: "SET_FILTER_TERM",
  SET_ARTISTS: "SET_ARTISTS",
  SET_ARTIST_FILTER: "SET_ARTIST_FILTER",
  SET_LANGUAGE_FILTER: "SET_LANGUAGE_FILTER",
  // SET_ALL_USERS: "SET_ALL_USERS",
  SET_ALL_SONGS: "SET_ALL_SONGS",
  SET_RECENT_SONGS: "SET_RECENT_SONGS",
  SET_ALL_ALBUMNS: "SET_ALL_ALBUMNS",
  SET_ALBUM_FILTER: "SET_ALBUM_FILTER",
  SET_SONG: "SET_SONG",
  SET_SONG_PLAYING: "SET_SONG_PLAYING",
  SET_MINI_PLAYER: "SET_MINI_PLAYER",
};

export const setSearchAction = (search) => {
  return {
    type: actionType.SET_SEARCH_TERM,
    searchTerm: search,
  };
};
export const setFilterTerm = () => {
  return {
    type: actionType.SET_FILTER_TERM,
  };
};
export const setArtists = () => {
  return {
    type: actionType.SET_ARTISTS,
  };
};
export const setArtistFilter = () => {
  return {
    type: actionType.SET_ARTIST_FILTER,
  };
};
export const setLanguageFilter = () => {
  return {
    type: actionType.SET_LANGUAGE_FILTER,
  };
};
export const setAllSongs = () => {
  return {
    type: actionType.SET_ALL_SONGS,
    // allSongs: data,
  };
};
export const setRecentSongs = () => {
  return {
    type: actionType.SET_RECENT_SONGS,
    // allSongs: data,
  };
};
export const setAllAlbums = () => {
  return {
    type: actionType.SET_ALL_ALBUMNS,
  };
};
export const setSong = (song) => {
  return {
    type: "SET_SONG",
    song: song,
  };
};
export const setSongPlaying = (isPlaying) => {
  return {
    type: actionType.SET_SONG_PLAYING,
    isSongPlaying: isPlaying,
  };
};
export const setMiniPlayer = () => {
  return {
    type: actionType.SET_MINI_PLAYER,
  };
};
