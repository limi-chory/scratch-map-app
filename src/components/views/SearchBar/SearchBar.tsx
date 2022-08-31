import React from "react";
import { useNavigate } from "react-router-dom";

import ListIcon from "../../../assets/ListIcon.svg";
import SearchIcon from "../../../assets/SearchIcon.svg";

import "./SearchBar.scss";

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("search");
  };

  return (
    <div className="searchBarContainer">
      <div className="searchBar" onClick={handleClick}>
        <ListIcon className="listIcon" />
        <input className="searchInput" placeholder="시, 군, 구 검색" />
        <SearchIcon className="searchIcon" />
      </div>
    </div>
  );
};

export default SearchBar;
