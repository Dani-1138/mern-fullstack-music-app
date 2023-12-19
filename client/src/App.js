import React, { useEffect } from "react";
import { useState } from "react";

import { Provider } from "react-redux";
import "./App.css";
import {
  Left,
  LogoImg,
  SongNo,
  MusicImg,
  MusicList,
  MusicNo,
  MusicSubTitle,
  MusicTitle,
  PlayListDiv,
  PlayListList,
  PlayListSpan,
  PlayListTitle,
  SongList,
  SongListCard,
} from "./components/leftside/left";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Right } from "./components/rightside/right";
import {
  PlayCircleFilled,
  SkipPrevious,
  SkipNext,
  Pause,
  VolumeUp,
  Forward30,
} from "@mui/icons-material";
import SearchSong from "./components/rightside/search";
import Widgetcard, { WidgetWrapper } from "./components/rightside/widgetcard";
import {
  ControlDiv,
  MainControls,
  MainPlayWave,
} from "./components/rightside/musicControl";
import {
  IconWrapper,
  BottomPlayBar,
  MusicBottomImg,
  MusicBottomSubTitle,
  MusicBottomTitle,
  Pauses,
  PlayWave,
  SkipNexts,
  SkipPreviouss,
  TimeFinish,
  TimerBar,
  TimerWrapper,
  TimeStart,
  VolumeWrapper,
  BottomControl,
} from "../src/components/bottom/bottom";
import SongCard, { MainCardDiv } from "./components/rightside/songCard";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/home";
import AddSong from "./pages/addSong";
import Playlist from "./pages/playlist";
import Favorite from "./pages/favorite";
import Recent from "./pages/recent";
import AddNewSong from "./components/rightside/addNewSong";
import { RiPlayListFill } from "react-icons/ri";
import { MdFavorite, MdPlaylistAdd } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import Country from "./pages/country";
import Sidebar from "./components/leftside/sidebar";
import Error from "./pages/error";
import { useDispatch, useSelector } from "react-redux";

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Wrapper1 = styled.div`
  height: 86%;
  width: 100%;
  display: flex;
`;

const App = () => {
  const [songs, setSongs] = useState(0);
  const data = useSelector((state) => state.songsReducer.allSongs);

  useEffect(() => {
    data && setSongs(data.length);
  });

  return (
    <>
      {/* <Library />
      <Sidebar />
      <Login /> */}
      <Reset />
      <FullScreen>
        {/* start */}
        <Wrapper1>
          <Sidebar />
          <Left>
            <PlayListTitle>
              <LogoImg className="logo-image" />
              Habesha Music
            </PlayListTitle>
            <PlayListDiv>
              <PlayListList>
                <PlayListSpan>
                  <FaHome />
                </PlayListSpan>
                <NavLink to="/">Home</NavLink>
              </PlayListList>
              <PlayListList>
                <PlayListSpan>
                  <RiPlayListFill />
                </PlayListSpan>
                <NavLink to="playlist">Playlist</NavLink>
              </PlayListList>
              <PlayListList>
                <PlayListSpan>
                  <BsFillPersonLinesFill />
                </PlayListSpan>
                <NavLink to="get-recent"> New released</NavLink>
              </PlayListList>
              <PlayListList>
                <PlayListSpan>
                  <MdFavorite />
                </PlayListSpan>{" "}
                <NavLink to="favorite">Favorite</NavLink>
              </PlayListList>
              <PlayListList>
                <PlayListSpan>
                  <MdPlaylistAdd />
                </PlayListSpan>
                <NavLink to="add-new-song">
                  <h5 className="inactive">Add Song</h5>
                </NavLink>
              </PlayListList>
              <SongNo>All Songs( {songs} )</SongNo>
            </PlayListDiv>
            <SongListCard></SongListCard>
          </Left>
          <Right>
            <Routes>
              <Route path="/" element={<Home />}>
                {/* <MusicControl></MusicControl> */}
                {/* <MainPlayWave></MainPlayWave> */}
              </Route>
              <Route path="/playlist" element={<Playlist />}></Route>

              <Route path="/add-new-song" element={<AddSong />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/get-recent" element={<Recent />} />
              <Route path="/get-country-song" element={<Country />} />
            </Routes>
          </Right>
        </Wrapper1>
        {/* end */}
        <BottomControl></BottomControl>
      </FullScreen>
    </>
  );
};

export default App;
