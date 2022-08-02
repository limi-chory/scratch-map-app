import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const VisitDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // TODO seo : 아래와 같이 JSX 컴포넌트를 따로 정의해서 DatePicker 에 넘겨주는것 어떻게 하는지 모르겠음

  const CustomDatePickerInput = forwardRef<HTMLButtonElement, any>((prop: any, ref: any) => {
    const dates = prop.value.split(" - ");

    return (
      <>
        <button className="example-custom-input" onClick={prop.onClick} ref={ref}>
          {dates[0] ? dates[0] : "Start Date"}
        </button>
        <button className="example-custom-input" onClick={prop.onClick} ref={ref}>
          {dates[1] ? dates[1] : "End Date"}
        </button>
      </>
    );
  });

  return (
    <div className="container">
      <DatePicker
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy년 MM월 dd일"
        customInput={<CustomDatePickerInput />}
        selectsRange
      />
    </div>
  );
};

export default VisitDatePicker;
