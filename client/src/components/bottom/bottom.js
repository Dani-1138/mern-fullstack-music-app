import styled, { keyframes } from "styled-components";
import {
  FavoriteBorder,
  Forward30,
  Pause,
  Replay10,
  Shuffle,
  SkipNext,
  SkipPrevious,
  Autorenew,
} from "@mui/icons-material";
import "../../App.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSong } from "../../redux/action";
import { device } from "../rightside/responsive";

const BottomPlayBar = styled.div`
  width: 100%;
  height: 14%;
  background-color: #111727;
  padding-top: -20px;
  display: flex;
  align-items: center;
  /* padding: 0px 20px; */
  box-shadow: 0px 3px 4px white;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(30, 30, 30);
  }
  @media ${device.mobileL} {
    height: 14%;
  }
`;
const BottomPlayWrapperBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #111727;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  box-shadow: 0px 3px 4px white;
`;

const WavDiv = styled.div`
  width: 10&;
  height: 30px;
  padding-bottom: 5px;
  display: flex;
  align-items: flex-end;
  margin-left: 1rem;
  @media ${device.tablet} {
    display: none;
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
  animation: ${wave} 0.5s linear infinite;
`;
const Wave2 = styled(Wave1)`
  height: 13px;
  animation-delay: 0.4s;
`;
const Wave3 = styled(Wave1)`
  height: 8px;
  animation-delay: 0.8s;
`;

export const MusicBottomImg = styled.img`
  width: 8%;
  height: 70%;
  margin-left: 25px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  @media ${device.tablet} {
    display: none;
  }
`;
export const MusicBottomTitle = styled.h5`
  font-size: 20px;
  margin-left: 15px;
  color: #d6d6d6;
  width: 20%;
  @media ${device.tablet} {
    display: none;
  }
`;
export const MusicBottomSubTitle = styled.div`
  font-size: 15px;
  color: #4c5262;
  @media ${device.tablet} {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8rem;
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgba(54, 69, 98, 0) 0%,
    rgb(40, 58, 88) 50%,
    rgba(54, 69, 98, 0) 100%
  );
`;
export const Replay10s = styled(Replay10)`
  color: #fff;
  margin-right: 1rem;
  background: rgba(54, 69, 98, 0.3);
  border-radius: 50%;
`;
export const SkipPreviouss = styled(SkipPrevious)`
  color: #fff;
  margin-right: 1rem;
`;
export const Pauses = styled(Pause)`
  color: #fff;
  margin-right: 1rem;
  border-radius: 50%;
  background: rgba(54, 69, 98, 0.3);
  height: 100px;
  width: 2rem;

  &:hover {
    background: rgba(54, 69, 98, 0.9);
    transform: scale(1.7);
  }
`;
export const SkipNexts = styled(SkipNext)`
  color: #fff;
  margin-right: 1rem;
  width: 100px;
  height: 100px;
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
const CloseDiv = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 16%;
  color: #b3b3b3;
  justify-content: center;
`;
const VolumeRange = styled.input.attrs({
  type: "range",
})`
  min: 0;
  max: 20;
  step: 1;

  height: 2px;

  width: 5rem;
`;
// const VolumeIcon = styled(VolumeUp)`
//     color: #fff;
// `

export const PlayWave = () => {
  return (
    <>
      <WavDiv>
        <Wave1 />
        <Wave2 />
        <Wave3 />
      </WavDiv>
    </>
  );
};

export const BottomControl = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songsReducer.allSongs);
  const song = useSelector((state) => state.songReducer.song);
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
      if (song > data.length - 1) {
        dispatch(setSong(0));
      }
    }
  }, [song]);

  return (
    <>
      <BottomPlayBar>
        {data && (
          <BottomPlayWrapperBar>
            <PlayWave />
            <MusicBottomImg src={data[song]?.imageURL} />
            <MusicBottomTitle>
              {`${
                data[song]?.name.length > 10
                  ? data[song]?.name.slice(0, 10)
                  : data[song]?.name
              }`}{" "}
              <MusicBottomSubTitle>{data[song]?.artist}</MusicBottomSubTitle>
            </MusicBottomTitle>
            <AudioPlayer
              autoPlay={true}
              src={data[song]?.songUrl}
              onPlay={(e) => console.log("onPlay")}
              showFilledVolume={true}
              showSkipControls={true}
              onClickNext={nextTrack}
              onClickPrevious={previousTrack}
            />
            {/* <CloseDiv>
                            <Close />
                        </CloseDiv> */}

            {/* <TimerWrapper><TimeStart>0:00</TimeStart><TimerBar /><TimeFinish>10:00</TimeFinish></TimerWrapper> */}
          </BottomPlayWrapperBar>
        )}
      </BottomPlayBar>
    </>
  );
};
