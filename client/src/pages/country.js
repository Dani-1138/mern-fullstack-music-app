import React from "react";
import SearchSong from "../components/rightside/search";
import SongCard, { MainCardDiv } from "../components/rightside/country";

const Country = () => {
  return (
    <>
      <SearchSong />
      <MainCardDiv>
        <SongCard />
      </MainCardDiv>
    </>
  );
};

export default Country;
