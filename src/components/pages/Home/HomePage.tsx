import React from "react";

import "./HomePage.scss";
import MapV2 from "../../views/MapV2/MapV2";
import Header from "../../views/Header/Header";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <MapV2 />
    </div>
  );
};

export default HomePage;
