import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./sidebar.css";
import { PlayListSpan, PlayListList } from "./left";
import { RiPlayListFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdFavorite, MdPlaylistAdd } from "react-icons/md";
import styled from "styled-components";
import { device } from "../rightside/responsive";

{
  /* <PlayListDiv>
<PlayListList>
  <PlayListSpan><RiPlayListFill /></PlayListSpan><NavLink to='playlist'>Playlist</NavLink>
</PlayListList>
<PlayListList>
  <PlayListSpan><BsFillPersonLinesFill /></PlayListSpan> Artist
</PlayListList>
<PlayListList>
  <PlayListSpan><MdFavorite /></PlayListSpan> <NavLink to='favorite'>Favorite</NavLink>
</PlayListList>
<PlayListList>
  <PlayListSpan><MdPlaylistAdd /></PlayListSpan> 
  <NavLink to='add-new-song' ><h5 className='inactive'>Add Song</h5></NavLink>
</PlayListList>
</PlayListDiv> */
}

const SideNavBar = styled(SideNav)`
  @media ${device.mintablet} {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <>
      <SideNavBar
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <PlayListList>
                <NavLink to="/">
                  <PlayListSpan>
                    <FaHome />
                  </PlayListSpan>
                </NavLink>
              </PlayListList>
            </NavIcon>
            <NavText>
              <PlayListList>
                <NavLink to="/">Home</NavLink>
              </PlayListList>
            </NavText>
          </NavItem>

          <NavItem eventKey="home">
            <NavIcon>
              <PlayListList>
                <NavLink to="playlist">
                  <PlayListSpan>
                    <RiPlayListFill />
                  </PlayListSpan>
                </NavLink>
              </PlayListList>
            </NavIcon>
            <NavText>
              <PlayListList>
                <NavLink to="playlist">Playlist</NavLink>
              </PlayListList>
            </NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <PlayListList>
                <NavLink to="get-recent">
                  <PlayListSpan>
                    <BsFillPersonLinesFill />
                  </PlayListSpan>
                </NavLink>
              </PlayListList>
            </NavIcon>
            <NavText>
              <PlayListList>
                <NavLink to="get-recent">New released</NavLink>
              </PlayListList>
            </NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <PlayListList>
                <NavLink to="favorite">
                  {" "}
                  <PlayListSpan>
                    <MdFavorite />
                  </PlayListSpan>{" "}
                </NavLink>
              </PlayListList>
            </NavIcon>
            <NavText>
              <PlayListList>
                <NavLink to="favorite">Favorite</NavLink>
              </PlayListList>
            </NavText>
          </NavItem>
          <NavItem eventKey="home">
            <NavIcon>
              <PlayListList>
                <NavLink to="add-new-song">
                  <PlayListSpan>
                    <MdPlaylistAdd />
                  </PlayListSpan>{" "}
                </NavLink>
              </PlayListList>
            </NavIcon>
            <NavText>
              <PlayListList>
                <NavLink to="add-new-song">Add Song</NavLink>
              </PlayListList>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNavBar>
    </>
  );
};

export default Sidebar;
