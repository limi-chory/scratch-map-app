import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const VisitDatePicker: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const onChange = (dates: [Date, Date]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    // TODO seo : 아래와 같이 JSX 컴포넌트를 따로 정의해서 DatePicker 에 넘겨주는것 어떻게 하는지 모르겠음
    interface Foo {
        value: any;
        onClick: any;
    }
    const CustomDatePickerInput = forwardRef<HTMLButtonElement, Foo>((prop: { value: any, onClick: any }, ref: any) => (
        <button className="example-custom-input" onClick={prop.onClick} ref={ref}>
            {prop.value}
        </button>
    ));

    return (
        <div className="container">
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
    );
};

export default VisitDatePicker;
