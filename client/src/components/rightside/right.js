import styled from "styled-components";
import { device } from "./responsive";

export const Right = styled.div`
  width: 75%;
  height: 100%;
  background: #0b1320;
  @media ${device.tablet} {
    width: 100%;
  }
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
`;
