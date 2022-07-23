import React from "react";

import logo from "../../../assets/logo.png";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img className="headerImg" src={logo} alt="Logo" />
      <h1 className="headerText">Scratch Map</h1>
    </header>
  );
};

export default Header;
