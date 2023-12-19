import { PlayCircleFilled, PauseCircle } from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setAllSongs, setSong, setSongPlaying } from "../../redux/action";
import { songReducer } from "../../redux/reducer";
import { device } from "../rightside/responsive";
import LoadingSpinner from "./loading";

const MusicNo = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #4c5262;
`;
const MusicImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 25px;
  border-radius: 50%;
`;
const MusicTitle = styled.h5`
  font-size: 11px;
  margin-left: 15px;
  color: ${(props) => props.playing};
`;
const MusicSubTitle = styled.div`
  font-size: 9px;
  color: ${(props) => props.playing};
`;
const IconListWrapper = styled.div`
  float: right;
  right: 0.3rem;
  color: #fff;
  position: absolute;
`;

export const SongListCard2 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songsReducer.allSongs);
  const song = useSelector((state) => state.songReducer.song);
  const search = useSelector((state) => state.searchReducer.searchTerm);
  const isPlaying = useSelector(
    (state) => state.isSongPlayingReducer.isSongPlaying
  );

  useEffect(() => {
    dispatch(setAllSongs());
  }, []);

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
  return (
    <>
      <SongList>
        {data ? (
          data
            .filter(
              (data) =>
                data.artist.toLowerCase().includes(search) ||
                data.language.toLowerCase().includes(search) ||
                data.name.toLowerCase().includes(search)
            )
            .map((songs, i) => (
              <MusicList
                onClick={() => setCurrentPlaySong(i)}
                playing={song === i}
              >
                <MusicNo>{i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}</MusicNo>
                <MusicImg src={songs.imageURL} />
                <MusicTitle playing={song === i ? "green" : "white"}>
                  {songs.name}
                  <MusicSubTitle playing={song === i ? "green" : "#4c5262"}>
                    {songs.artist}
                  </MusicSubTitle>
                </MusicTitle>
                <IconListWrapper>
                  {song === i ? <PauseCircle /> : <PlayCircleFilled />}
                </IconListWrapper>
              </MusicList>
            ))
        ) : (
          <LoadingSpinner />
        )}
      </SongList>
    </>
  );
};

export const Left = styled.div`
  width: 25%;
  height: 100%;
  background-color: #111727;
  color: #fff;
  box-shadow: 5px 0px 2px #090f1f;
  @media ${device.tablet} {
    display: none;
  }
`;
export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 0px;
  border-radius: 50%;
`;
export const PlayListTitle = styled.h1`
  font-size: 20px;
  margin: 15px 0px 0px 20px;
  font-weight: 500;
  display: flex;
  color: rgb(87, 79, 33);
`;

export const PlayListDiv = styled.div`
  margin: 40px 0px 0px 20px;
`;

export const PlayListList = styled.h4`
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 10px;
  &:hover {
    color: #fff;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.3s linear;
  color: #4c5262;
`;

export const PlayListSpan = styled.span`
  position: relative;
  margin-left: 1rem;
  margin-right: 35px;
  &::before {
    content: "";
    margin-right: 35px;
    position: absolute;
    top: -4px;
    transition: 0.3s linear;
  }
`;
export const SongList = styled.div`
  width: 100%;
  height: 70%;
  display: none;
  margin-top: 40px;
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
    display: block;
  }
  /* background-color: red; */
`;

const MusicList = styled.li`
  list-style-type: none;
  padding: 5px 0px 5px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 3rem;
  position: relative;
  cursor: pointer;
  transition: 0.3s linear;
  background: ${(props) => props.playing && "rgb(105,105,170,.1)"};
  &:hover {
    background: rgb(105, 105, 170, 0.1);
  }
`;
