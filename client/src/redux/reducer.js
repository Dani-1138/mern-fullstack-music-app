import { SET_ALL_SONGS, SET_RECENT_SONGS } from "./saga/saga";
import { actionType } from "./action";

const initialState = {
  // user: null,
  // searchTerm: "",
  // filterTerm: "all",
  // artists: null,
  // artistFilter: null,
  // languageFilter: null,
  // allUsers: null,
  allSongs: [],
  allSong: [],
  // allAlbums: null,
  // albumFilter: null,
  song: 0,
  isSongPlaying: false,
  // miniPlayer: false,
};

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_SONGS:
      return {
        ...state,
        allSongs: action.allSongs,
      };
    default:
      return state;
  }
};

const initialRecent = {
  allSong: [],
};
export const recentSongReducer = (state = initialRecent, action) => {
  switch (action.type) {
    case SET_RECENT_SONGS:
      return {
        ...state,
        allSong: action.allSong,
      };
    default:
      return state;
  }
};

export const isSongPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_SONG_PLAYING:
      return {
        ...state,
        isSongPlaying: action.isSongPlaying,
      };
    default:
      return state;
  }
};

export const initialIndex = {
  song: 0,
};
export const songReducer = (state = initialIndex, action) => {
  switch (action.type) {
    case actionType.SET_SONG:
      return {
        ...state,
        song: action.song,
      };
    default:
      return state;
  }
};

const initialSearch = {
  searchTerm: "",
};
export const searchReducer = (state = initialSearch, action) => {
  switch (action.type) {
    case actionType.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
};
