import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ControlDiv, MainControls } from "../components/rightside/musicControl";
import SearchSong from "../components/rightside/search";
import {
  Widgetcard1,
  Widgetcard2,
  Widgetcard3,
  Widgetcard4,
  WidgetWrapper,
} from "../components/rightside/widgetcard";
import SongCard, { MainCardDiv } from "../components/rightside/songCard";
import { SongListCard2 } from "../components/rightside/musicList";

const Home = () => {
  return (
    <>
      <SearchSong />
      <ControlDiv>
        <MainControls></MainControls>
      </ControlDiv>
      <SongListCard2></SongListCard2>
      <WidgetWrapper>
        <Widgetcard1 />
        <Widgetcard2 />
        <Widgetcard3 />
        <Widgetcard4 />
      </WidgetWrapper>
    </>
  );
};

export default Home;
