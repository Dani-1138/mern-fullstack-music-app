import styled, { keyframes } from "styled-components";
import "./wave.css";
import "../../App.css";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import {
  Autorenew,
  FavoriteBorder,
  Forward30,
  Pause,
  Replay10,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSong } from "../../redux/action";
import { device } from "./responsive";

export const ControlDiv = styled.div`
  width: 100%;
  height: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WavDiv = styled.div`
  width: auto;
  height: 30px;
  padding-bottom: 5px;
  display: flex;
  align-items: flex-end;
  @media ${device.mobileS} {
    width: 1rem;
    height: 20px;
  }
`;

const wave = keyframes`
    0%{
        height: 10px;
    }
    50%{
        height: 15px;
    }
    100%{
        height: 10px;
}
`;

const Wave1 = styled.div`
  width: 3px;
  height: 10px;
  margin-right: 3px;
  border-radius: 10px 10px 0px 0px;
  background: #36e2ec;
  animation: ${wave} 0.6s linear infinite;
`;
const Wave2 = styled(Wave1)`
  height: 13px;
  animation-delay: 0.4s;
`;
const Wave3 = styled(Wave1)`
  height: 8px;
  animation-delay: 0.8s;
`;
const Wave4 = styled(Wave1)`
  height: 10px;
  animation-delay: 0.4s;
`;
const Wave5 = styled(Wave1)`
  height: 13px;
  animation-delay: 0.8s;
`;
const Wave6 = styled(Wave1)`
  height: 13px;
  animation-delay: 0.4s;
`;
const Wave7 = styled(Wave1)`
  height: 8px;
  animation-delay: 0.8s;
`;
const Wave8 = styled(Wave1)`
  height: 10px;
  animation-delay: 0.4s;
`;
const Wave9 = styled(Wave1)`
  height: 8px;
  animation-delay: 0.8s;
`;
const Wave10 = styled(Wave1)`
  height: 10px;
  animation-delay: 0.4s;
`;
const Wave11 = styled(Wave1)`
  height: 13px;
  animation-delay: 0.4s;
`;
const Wave12 = styled(Wave1)`
  height: 8px;
  animation-delay: 0.8s;
`;
const Wave13 = styled(Wave1)`
  height: 10px;
  animation-delay: 0.4s;
`;
const Wave14 = styled(Wave1)`
  height: 8px;
  animation-delay: 0.8s;
`;
const Wave15 = styled(Wave1)`
  height: 10px;
  animation-delay: 0.4s;
`;
const BiPrev = styled(BiSkipPrevious)`
  color: #fff;
  font-size: 70px;
  &:hover {
    transform: scale(1.3);
  }
  /* @media ${device.mobileS} {
        font-size: 30px;
   } */
`;
const BiNext = styled(BiSkipNext)`
  color: #fff;
  font-size: 70px;
  &:hover {
    transform: scale(1.3);
  }
  /* @media ${device.mobileS} {
        font-size: 30px;
   } */
`;
export const MainPlayWave = () => {
  return (
    <>
      <WavDiv>
        <Wave1 />
        <Wave2 />
        <Wave3 />
        <Wave4 />
        <Wave5 />
        <Wave6 />
        <Wave7 />
        <Wave8 />
        <Wave9 />
        <Wave10 />
        <Wave11 />
        <Wave12 />
        <Wave13 />
        <Wave14 />
        <Wave15 />
      </WavDiv>
    </>
  );
};

export const TimerBar = styled.input.attrs({
  type: "range",
})`
  min: 0;
  max: 20;
  step: 1;
  margin-bottom: 2rem;
  height: 2px;
  color: red;
  width: 80%;
`;

export const IconWrapper = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;
  margin-bottom: 0.5rem;
  /* @media ${device.mobileS} {
    margin-left: 1rem;
   } */
`;
const Replay10s = styled(Replay10)`
  color: #fff;
  margin-right: 1rem;
  background: rgba(54, 69, 98, 0.3);
  border-radius: 50%;
`;
const SkipPreviouss = styled(SkipPrevious)`
  color: #fff;
  margin-right: 1rem;
`;
const Pauses = styled(Pause)`
  color: #fff;
  margin-right: 1rem;

  width: 300px;
  height: 200px;

  border-radius: 50%;
  background: rgba(54, 69, 98, 0.3);
`;
const SkipNexts = styled(SkipNext)`
  color: #fff;
  margin-right: 1rem;
`;
const Forward30s = styled(Forward30)`
  color: #fff;
  margin-right: 1rem;
  border-radius: 50%;
  background: rgba(54, 69, 98, 0.3);
`;
const Favorite = styled(FavoriteBorder)`
  color: #fff;
  margin-right: 1rem;
`;
const Autorenews = styled(Autorenew)`
  color: #fff;
  margin-right: 1rem;
`;
const Shuffles = styled(Shuffle)`
  color: #fff;
  margin-right: 1rem;
`;
const TimerWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TimeStart = styled.span`
  color: #fff;
  margin-bottom: 2rem;
  margin-right: 1rem;
`;
const TimeFinish = styled.span`
  color: #fff;
  margin-bottom: 2rem;
  margin-left: 1rem;
`;
const PlayingWrapper = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const anime = keyframes`
    0% {
        transform: translateX(40px)
    }
    100% {
        transform: translateX(-20px)
    }
`;
const mobileanime = keyframes`
    0% {
        transform: translateX(200px)
    }
    100% {
        transform: translateX(-160px)
    }
`;
const SongTitle = styled.p`
  width: auto;
  font-weight: 600;
  font-size: 1.725rem;
  color: #fff;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  margin: 0 1rem;
  margin-bottom: 0.2rem;
  /* animation: ${anime} 2s linear infinite;
  @media ${device.mobileL} {
    animation: ${mobileanime} 10s linear infinite;
   } */
`;
const SongSubTitle = styled.p`
  /* text-sm truncate text-gray-300 mt-1 */

  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #4c5262;
  margin-top: 0.25rem;
  margin: 0 1rem;
`;

export const MainControls = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songsReducer.allSongs);
  const song = useSelector((state) => state.songReducer.song);
  const search = useSelector((state) => state.searchReducer.searchTerm);
  const isPlaying = useSelector(
    (state) => state.isSongPlayingReducer.isSongPlaying
  );

  const nextTrack = () => {
    console.log(song);
    if (data) {
      if (song === data.length) {
        dispatch(setSong(0));
      } else {
        dispatch(setSong(song + 1));
      }
    }
  };

  const previousTrack = () => {
    if (data) {
      if (song === 0) {
        dispatch(setSong(0));
      } else {
        dispatch(setSong(song - 1));
      }
    }
  };
  useEffect(() => {
    if (data) {
      if (song > data.length) {
        dispatch(setSong(0));
      }
    }
  }, [song]);
  return (
    <>
      <IconWrapper>
        <BiPrev onClick={previousTrack} />
        <MusicControl />
        <BiNext className="icon" onClick={nextTrack} />
      </IconWrapper>
      {data && (
        <PlayingWrapper>
          <SongTitle>
            {`${
              data[song]?.name.length > 50
                ? data[song]?.name.slice(0, 50)
                : data[song]?.name
            }`}{" "}
          </SongTitle>
          <SongSubTitle>{data[song]?.artist}</SongSubTitle>
        </PlayingWrapper>
      )}
    </>
  );
};

const MusicControl = () => {
  return (
    <>
      <div className="music">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </>
  );
};

// export default  MusicControl
