import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import "../../App.css";
import styled from "styled-components";
import { setSearchAction } from "../../redux/action";
import { useDispatch } from "react-redux";
import { device } from "./responsive";

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  background: rgba(54, 69, 98, 0.3);
  width: 30%;
  height: 2rem;
  border-radius: 5px;
  margin: 1rem 2.5rem;
  box-shadow: 1px 1px 2px 1px 090f1f;
  @media ${device.tablet} {
    width: 50%;
    margin: 1rem 4.5rem;
  }
  @media ${device.mobileL} {
    width: 70%;
  }
`;
const InputLabel = styled.label.attrs({
  for: "search-field",
})``;

const SearchInput = styled.input.attrs({
  type: "search",
  placeholder: "Search",
  id: "search-field",
  name: "search-field",
})`
  font-size: 14px;
  height: 2rem;
  width: 90%;
  padding: 1rem;
  background: transparent;

  border: none;
  border-radius: 5px;
  color: #fff;

  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: rgb(90, 90, 90);
  }
`;

const SearchSong = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(setSearchAction(searchTerm));
  }, [searchTerm]);

  return (
    <>
      <SearchDiv>
        <InputLabel>
          <FiSearch className="search-icon" />
        </InputLabel>
        <SearchInput onChange={(e) => setSearchTerm(e.target.value)} />
      </SearchDiv>
    </>
  );
};

export default SearchSong;
