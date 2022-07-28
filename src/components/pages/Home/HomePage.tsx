import React, { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import "./HomePage.scss";
import MapV2 from "../../views/MapV2/MapV2";
import Header from "../../views/Header/Header";
import { LABEL_BY_RCODE } from "../../views/MapV2/const";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const HomePage: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<number>(0);
  const handleClickArea = (rcode: number) => {
    setSelectedArea(rcode);
  };
  const [startDate, setStartDate] = useState(new Date());


  // getCityLabelByRcode();
  return (
    <div className="container">
      <Header />
      <MapV2 handleClickArea={handleClickArea} />
      <BottomSheet open={!!selectedArea} onDismiss={() => setSelectedArea(0)}>
        <div className="bottomSheet">
          <h2>{LABEL_BY_RCODE[selectedArea]?.kr}</h2>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="yyyy년 MM월 dd일"
          />
        </div>
      </BottomSheet>
    </div>
  );
};

export default HomePage;
