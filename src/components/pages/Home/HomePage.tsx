import React, { forwardRef, useState } from "react";
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
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  interface Foo {
    value: any;
    onClick: any;
  }
  const CustomDatePickerInput = forwardRef<HTMLButtonElement, Foo>((prop: { value: any, onClick: any }, ref: any) => (
    <button className="example-custom-input" onClick={prop.onClick} ref={ref}>
      {prop.value}
    </button>
  ));

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
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            dateFormat="yyyy년 MM월 dd일"
            customInput={<CustomDatePickerInput value={undefined} onClick={undefined} />}
            selectsRange
          />
        </div>
      </BottomSheet>
    </div>
  );
};

export default HomePage;
