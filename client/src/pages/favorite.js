import React from "react";
import SongCard, { MainCardDiv } from "../components/rightside/favorite";
import SearchSong from "../components/rightside/search";

const Favorite = () => {
  return (
    <>
      <SearchSong />
      <MainCardDiv>
        <SongCard />
      </MainCardDiv>
    </>
  );
};

export default Favorite;
