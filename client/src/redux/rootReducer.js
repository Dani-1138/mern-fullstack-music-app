import { combineReducers } from "redux";
import {
  songsReducer,
  songReducer,
  isSongPlayingReducer,
  searchReducer,
  recentSongReducer,
} from "./reducer";
// import { songsReducer,songReducer,isSongPlayingReducer,searchReducer } from './reducer'

export default combineReducers({
  songsReducer: songsReducer,
  songReducer: songReducer,
  isSongPlayingReducer: isSongPlayingReducer,
  searchReducer: searchReducer,
  recentSongReducer: recentSongReducer,
});
