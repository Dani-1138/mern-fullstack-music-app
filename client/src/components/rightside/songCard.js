import { Pause, PauseCircle, PlayCircleFilled } from "@mui/icons-material";
import { useEffect } from "react";
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
import {
  deleteSongById,
  editFavorite,
  editSongName,
} from "../../redux/saga/saga";
import { AiFillHeart } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import LoadingSpinner from "./loading";
import { device } from "./responsive";
import { useRef, useState } from "react";
import Modal from "./modal";
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const song = "sadas";
const activeSong = "dd";

export const MainCardDiv = styled.div`
  /* flex flex-wrap sm:justify-start justify-center gap-8 */
  width: 100%;
  height: 90%;
  padding: 1rem;
  padding-left: 2rem;
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
  @media ${device.tablet} {
    padding-left: 5rem;
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
const MainDivWrapper = styled.div``;
const MainDiv = styled.div`
  /* flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer */
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 11rem;
  // padding: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
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
  width: auto;
  height: auto;
  top: 3rem;
  right: 0;
  bottom: 0;
  left: 3rem;

  justify-content: center;
  align-items: center;
  color: white;
  /* opacity: 0.5; */
  display: none;
  /* opacity: 0.4; */
  &:hover {
    display: block;
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
const EditIcon = styled(FaEdit)`
  font-weight: bold;
  color: green;
  float: right;
  font-size: 30px;
  margin-right: 2rem;
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
// const confirmation = ()=>{
//   const response = confirm("Are you sure you want to delete!");
//   return response;
// }

const SongCard = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalType, setModalType] = useState("");

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
  }, []);

  const editName = (id, oldName) => {
    let name = prompt("Please enter music name", oldName);
    name &&
      editSongName(id, name).then((res) => {
        dispatch(setAllSongs());
      });
  };

  const removeModal = () => {
    setIsModal(false);
  };

  const deleteObject = (id) => {
    // if (confirmation()) {
    deleteSongById(id).then(() => {
      dispatch(setAllSongs());
      setIsModal(true);
      setModalContent("Song Deleted successfully");
      setModalType("add");
    });
    // }
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
          .map((songs, i) => (
            <MainDiv key={songs._id} className="song-card-hover">
              <MainDiv2
                className="song-card-hover"
                onClick={() => setCurrentPlaySong(i)}
              >
                <MainDiv3 className="mainDiv3-hover">
                  {song == i ? <PauseCircle /> : <PlayCircleFilled />}
                </MainDiv3>

                <SongImg src={songs.imageURL} />
              </MainDiv2>
              <SongTitleDiv>
                <SongTitle>{songs.name}</SongTitle>

                <SongSubTitle>{songs.artist}</SongSubTitle>
              </SongTitleDiv>
              <FavoriteDiv className="favor-div">
                <DeleteIcon onClick={() => deleteObject(songs._id)} />

                {songs.favorite ? (
                  <FavoriteTrue
                    onClick={() => editFavorite(songs._id, !songs.favorite)}
                  />
                ) : (
                  <FavoriteIcon
                    onClick={() => editFavorite(songs._id, !songs.favorite)}
                  />
                )}
                <EditIcon onClick={() => editName(songs._id, songs.name)} />
              </FavoriteDiv>
            </MainDiv>
          ))
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default SongCard;
