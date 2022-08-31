import React, { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import "./HomePage.scss";
import MapV2 from "../../views/MapV2/MapV2";
import SearchBar from "../../views/SearchBar";
import { LABEL_BY_RCODE } from "../../views/MapV2/const";
import VisitDatePicker from "../../views/DatePicker/VisitDatePicker";

const HomePage: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<number>(0);
  const handleClickArea = (rcode: number) => {
    setSelectedArea(rcode);
  };

  // getCityLabelByRcode();
  return (
    <div className="container">
      <SearchBar />
      <MapV2 handleClickArea={handleClickArea} />
      <BottomSheet open={!!selectedArea} onDismiss={() => setSelectedArea(0)}>
        <div className="bottomSheet">
          <h2>{LABEL_BY_RCODE[selectedArea]?.kr}</h2>
          <VisitDatePicker />
        </div>
      </BottomSheet>
    </div>
  );
};

export default HomePage;
