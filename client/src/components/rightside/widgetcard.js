import { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { setAllSongs, setRecentSongs } from "../../redux/action";
import { device } from "./responsive";

export const WidgetWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 67%;
  width: 100%;
  justify-content: space-around;

  padding: 2rem 2rem;
  padding: 2rem;
  margin-bottom: 0;
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    justify-content: center;

    margin-left: 4rem;
  }
`;
const Widget = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgb(40, 58, 88) 0%,
    rgba(54, 69, 98, 0) 100%
  );
  padding: 1rem 1rem;
  transition: all 0.2s ease-in-out;
  overflow-x: scroll;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
  @media ${device.tablet} {
    width: 95%;
    height: 70%;
    margin-left: 0rem;
  }
  @media ${device.mobileL} {
    display: none;
  }

  overflow-y: scroll;
  ::-webkit-scrollbar {
    height: 0px;
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(30, 30, 30);
  }
`;

const WidgetTitle = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 1rem;
`;

const MainEntry = styled.div`
  height: 80%;
`;

const WidgetFade = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 84%;
  height: 34%;
  border-radius: 30px;
  background: linear-gradient(
    180deg,
    rgba(54, 69, 98, 0) 10%,
    rgba(54, 69, 98, 1) 100%
  );
  opacity: 0;
  transition: 0.5s ease-in-out;
  animation: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8%;
`;
const WidgetButton = styled.div``;
const EntryBody = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 10%;
  display: flex;
  align-items: center;
`;
const EntryImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 15px;
  margin-right: 10px;
`;
const EntryFlex = styled.div`
  flex-direction: column;
  justify-content: center;
  overflow-y: hidden;
`;
const EntryTitle = styled.p`
  color: #c9d0e3;
  margin: 0px 0px 5px;
  font-weight: 600;
  font-size: 1.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const EntrySubTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #c4d0e37c;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Nav = styled(NavLink)`
  height: 100%;
  width: 100%;
`;
export const Widgetcard1 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.recentSongReducer.allSong);

  useEffect(() => {
    dispatch(setRecentSongs());
  }, []);

  return (
    <>
      <Nav to="get-recent">
        <Widget>
          <WidgetTitle>New Released Songs</WidgetTitle>
          <MainEntry>
            {data &&
              data.map((song) => (
                <EntryBody>
                  <EntryImg className="bottom-image" src={song.imageURL} />

                  <EntryFlex>
                    <EntryTitle>{song.name}</EntryTitle>
                    <EntrySubTitle>{song.artist}</EntrySubTitle>
                  </EntryFlex>
                </EntryBody>
              ))}
          </MainEntry>
          {/* <WidgetFade>
                    <WidgetButton>
                        <FiChevronRight />
                    </WidgetButton>
                </WidgetFade> */}
        </Widget>
      </Nav>
    </>
  );
};
const FavoriteTrue = styled(AiFillHeart)`
  font-weight: bold;
  height: 32px;
  width: 32px;
  color: red;
  float: right;
  font-size: 30px;
  margin-right: 0.3rem;
`;
export const Widgetcard2 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songsReducer.allSongs);

  useEffect(() => {
    dispatch(setAllSongs());
  }, []);

  return (
    <>
      <Nav to="favorite">
        <Widget>
          <WidgetTitle>
            Favorite Songs
            <FavoriteTrue />
          </WidgetTitle>
          <MainEntry>
            {data &&
              data
                .filter((data) => data.favorite === true)
                .map((song) => (
                  <EntryBody>
                    <EntryImg className="bottom-image" src={song.imageURL} />

                    <EntryFlex>
                      <EntryTitle>{song.name}</EntryTitle>
                      <EntrySubTitle>{song.artist}</EntrySubTitle>
                    </EntryFlex>
                  </EntryBody>
                ))}
          </MainEntry>
          {/* <WidgetFade>
                    <WidgetButton>
                        <FiChevronRight />
                    </WidgetButton>
                </WidgetFade> */}
        </Widget>
      </Nav>
    </>
  );
};
export const Widgetcard3 = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.songsReducer.allSongs);

  useEffect(() => {
    dispatch(setAllSongs());
  }, []);

  return (
    <>
      <Nav to="get-country-song">
        <Widget>
          <WidgetTitle>Best Country Songs</WidgetTitle>
          <MainEntry>
            {data &&
              data
                .filter((data) => data.category === "Country")
                .map((song) => (
                  <EntryBody>
                    <EntryImg className="bottom-image" src={song.imageURL} />

                    <EntryFlex>
                      <EntryTitle>{song.name}</EntryTitle>
                      <EntrySubTitle>{song.artist}</EntrySubTitle>
                    </EntryFlex>
                  </EntryBody>
                ))}
          </MainEntry>
          {/* <WidgetFade>
                    <WidgetButton>
                        <FiChevronRight />
                    </WidgetButton>
                </WidgetFade> */}
        </Widget>
      </Nav>
    </>
  );
};
const Widget4 = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgb(40, 58, 88) 0%,
    rgba(54, 69, 98, 0) 100%
  );
  padding: 1rem 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
  overflow-x: scroll;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(30, 30, 30);
  }
  @media ${device.tabletL} {
    display: none;
    width: 0%;
  }
  @media ${device.tabletL} {
    display: none;
  }
`;
export const Widgetcard4 = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchReducer.searchTerm);
  const data = useSelector((state) => state.songsReducer.allSongs);

  useEffect(() => {
    dispatch(setAllSongs());
  }, []);

  return (
    <>
      <Nav to="get-recent">
        <Widget4>
          <WidgetTitle>Best Raggae songs</WidgetTitle>
          <MainEntry>
            {data &&
              data
                .filter((data) => data.category === "Raggae")
                .map((song) => (
                  <EntryBody>
                    <EntryImg className="bottom-image" src={song.imageURL} />

                    <EntryFlex>
                      <EntryTitle>{song.name}</EntryTitle>
                      <EntrySubTitle>{song.artist}</EntrySubTitle>
                    </EntryFlex>
                  </EntryBody>
                ))}
          </MainEntry>
          {/* <WidgetFade>
                    <WidgetButton>
                        <FiChevronRight />
                    </WidgetButton>
                </WidgetFade> */}
        </Widget4>
      </Nav>
    </>
  );
};
