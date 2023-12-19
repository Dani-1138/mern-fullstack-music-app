import React from "react";
import SearchSong from "../components/rightside/search";
import SongCard, { MainCardDiv } from "../components/rightside/songCard";

const Playlist = () => {
  return (
    <>
      <SearchSong />
      {/* {isModal && <Modal modalContent={modalContent} removeModal={removeModal} modalType={modalType}/>} */}
      <MainCardDiv>
        <SongCard />
      </MainCardDiv>
    </>
  );
};

export default Playlist;
