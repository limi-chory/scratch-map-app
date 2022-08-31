import React from "react";
import { useNavigate } from "react-router-dom";

import BackIcon from "../../../assets/BackIcon.svg";
import SearchIcon from "../../../assets/SearchIcon.svg";

import "./SearchPage.scss";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="searchBarContainer">
        <div className="searchBar">
          <BackIcon className="backIcon" onClick={() => navigate(-1)} />
          <input className="searchInput" placeholder="시, 군, 구 검색" autoFocus={true} />
          <SearchIcon className="searchIcon" />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
