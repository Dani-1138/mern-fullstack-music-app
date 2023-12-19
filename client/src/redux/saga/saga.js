import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { actionType } from "../action";

export const SET_ALL_SONGS = "SET_ALL_SONGS";
export const SET_RECENT_SONGS = "SET_RECENT_SONGS";
const baseURL = "https://mern-fullstack-playlist-app.onrender.com/";

function* getProduct() {
  let allSongs = yield fetch(`${baseURL}api/songs/get-all`);
  allSongs = yield allSongs.json();
  yield put({ type: SET_ALL_SONGS, allSongs });
}

function* getRecent() {
  let allSong = yield fetch(`${baseURL}api/songs/get-recent`);
  allSong = yield allSong.json();
  yield put({ type: SET_RECENT_SONGS, allSong });
}

function* Saga() {
  yield takeEvery(actionType.SET_RECENT_SONGS, getRecent);
  yield takeEvery(actionType.SET_ALL_SONGS, getProduct);
}

export const saveNewSong = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/songs/addCar`, { ...data });
    return (await res).data;
  } catch (error) {
    return null;
  }
};

export const deleteSongById = async (id) => {
  try {
    const res = axios.delete(`${baseURL}api/songs/delete/${id}`);
    return res;
  } catch (error) {
    return null;
  }
};

export const editFavorite = async (id, favor) => {
  try {
    const res = axios.put(`${baseURL}api/songs/update/${id}/${favor}`);
    return res;
  } catch (error) {
    return null;
  }
};

export const editSongName = async (id, name) => {
  try {
    const res = axios.put(`${baseURL}api/songs/editName/${id}/${name}`);
    return res;
  } catch (error) {
    return null;
  }
};
export default Saga;
