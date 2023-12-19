import React from "react";
import SongCard, { MainCardDiv } from "../components/rightside/recent";
import SearchSong from "../components/rightside/search";

const Recent = () => {
  return (
    <>
      <SearchSong />
      <MainCardDiv>
        <SongCard />
      </MainCardDiv>
    </>
  );
};

export default Recent;
