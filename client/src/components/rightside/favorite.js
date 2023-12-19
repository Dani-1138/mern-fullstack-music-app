import { Pause, PlayCircle, PlayCircleFilled } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import "../../App.css";
import { setAllSongs, setSong, setSongPlaying } from "../../redux/action";
import {
  isSongPlayingReducer,
  songReducer,
  searchReducer,
} from "../../redux/reducer";
import { MdDelete } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { deleteSongById, editFavorite } from "../../redux/saga/saga";
import { AiFillHeart } from "react-icons/ai";
import { device } from "./responsive";
import LoadingSpinner from "./loading";

const song = "sadas";
const activeSong = "dd";

export const MainCardDiv = styled.div`
  /* flex flex-wrap sm:justify-start justify-center gap-8 */
  width: 100%;
  height: 90%;
  padding: 1rem;
  padding-left: 4rem;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(30, 30, 30);
  }
  @media ${device.mobileL} {
    padding-left: 6rem;
  }
`;

const slide = keyframes`
    from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    
  }
`;
const scaleup = keyframes`
    from {
      transform: scale(1);

  }
  to {
    transform: scale(1.1)
    
  }
`;

const MainDiv = styled.div`
  /* flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer */
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 11rem;
  // padding: 1rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
  position: relative;
  /* background-color: rgba(255, 255, 255, 0.2); */
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgb(40, 58, 88) 0%,
    rgba(54, 69, 98, 0) 100%
  );
  opacity: 0.8;
  backdrop-filter: blur(4px);
  animation: ${slide} 0.6s ease-out;
  &:hover {
    animation: ${scaleup} 0.2s linear;
    cursor: pointer;
    opacity: 0.7;
  }
  border-radius: 8px;
  cursor: pointer;
  @media ${device.mobileL} {
    width: 5rem;
    height: 11rem;
    margin-right: 0.3rem;
  }
`;

const MainDiv2 = styled.div`
  /* relative w-full h-56 group */
  position: relative;
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgb(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%);
  }
`;
const MainDiv3 = styled.div`
  /* absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title ===
  song.title
    ? "flex bg-black bg-opacity-70"
    : "hidden"} */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  /* opacity: 0.5; */
  display: flex;
  opacity: 0.4;
  &:hover {
    display: flex;
  }
`;
const PlayPause = styled(PlayCircleFilled)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 3rem;
  left: 3rem;
  color: #fff;
  opacity: 0;
  font-weight: bold;
  display: none;

  /* isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick} */
`;
const SongImg = styled.img`
  /* w-full h-full rounded-lg */
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;
const SongTitleDiv = styled.div`
  /* mt-4 flex flex-col */
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const FavoriteDiv = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  display: none;
  // background: red;
  bottom: 0;
  background: linear-gradient(rgb(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%);
  border-bottom-radius: 8px;
  cursor: pointer;
  /* &:hover{
     display: block;
      animation: ${scaleup} .2s linear;
   } */
`;
const FavoriteIcon = styled(BiHeart)`
  font-weight: bold;
  color: yellow;
  float: right;
  font-size: 30px;
  margin-right: 0.2rem;
  margin-top: 1rem;
  &:hover {
    transform: scale(1.3);
  }
`;
const FavoriteTrue = styled(AiFillHeart)`
  font-weight: bold;
  color: yellow;
  float: right;
  font-size: 30px;
  margin-right: 0.2rem;
  margin-top: 1rem;
  &:hover {
    transform: scale(1.3);
  }
`;
const DeleteIcon = styled(MdDelete)`
  color: red;
  font-weight: bold;
  float: right;
  font-size: 30px;
  margin-top: 1rem;
  margin-right: 0.4rem;
  &:hover {
    transform: scale(1.3);
  }
`;
const SongTitle = styled.p`
  /* font-semibold text-lg text-white truncate */
  font-weight: 600;
  font-size: 1.125rem;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 1rem;
`;
const SongSubTitle = styled.p`
  /* text-sm truncate text-gray-300 mt-1 */

  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #d1d5db;
  margin-top: 0.25rem;
  margin: 0 1rem;
`;

const SongCard = () => {
  const [favor, setFavor] = useState([]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.songsReducer.allSongs);
  const song = useSelector((state) => state.songReducer.song);
  const search = useSelector((state) => state.searchReducer.searchTerm);
  const isPlaying = useSelector(
    (state) => state.isSongPlayingReducer.isSongPlaying
  );

  const setCurrentPlaySong = (songindex) => {
    if (!isPlaying) {
      dispatch(setSongPlaying(true));
    }
    if (song !== songindex) {
      dispatch(setSong(songindex));
    }
  };
  useEffect(() => {
    dispatch(setAllSongs());
    //  data && setFavor(data.filter((data) => data.name === "Fiyorina"))
  }, []);

  const deleteObject = (id) => {
    deleteSongById(id).then((res) => {
      dispatch(setAllSongs());
    });
  };

  return (
    <>
      {data ? (
        data
          .filter(
            (data) =>
              data.artist.toLowerCase().includes(search) ||
              data.language.toLowerCase().includes(search) ||
              data.name.toLowerCase().includes(search)
          )
          .map(
            (song, i) =>
              song.favorite === true && (
                <MainDiv
                  key={song._id}
                  className="song-card-hover"
                  onClick={() => setCurrentPlaySong(i)}
                >
                  <MainDiv2>
                    <MainDiv3>
                      <PlayPause className="hover-pause-icon" />
                    </MainDiv3>

                    <SongImg src={song.imageURL} />
                  </MainDiv2>

                  <SongTitleDiv>
                    <SongTitle>{song.name}</SongTitle>

                    <SongSubTitle>{song.artist}</SongSubTitle>
                  </SongTitleDiv>
                  <FavoriteDiv className="favor-div">
                    <DeleteIcon onClick={() => deleteObject(song._id)} />

                    {song.favorite ? (
                      <FavoriteTrue
                        onClick={() => editFavorite(song._id, !song.favorite)}
                      />
                    ) : (
                      <FavoriteIcon
                        onClick={() => editFavorite(song._id, !song.favorite)}
                      />
                    )}
                  </FavoriteDiv>
                </MainDiv>
              )
          )
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default SongCard;
