import React, { useState } from "react";
import {
  AREA_INITIAL_VISITED_STATUS,
  AREA_LIST,
  AREA_PATH_DATA,
} from "./const";
import "./Map.scss";
import { AreaVisitedType } from "./type";

const Map: React.FC = () => {
  const [areaVisitedStatus, setAreaVisitedStatus] = useState<AreaVisitedType>(
    AREA_INITIAL_VISITED_STATUS
  );

  const onClickArea = (e: any) => {
    const areaId = e.target.id;
    const updatedVisitedStatus = {
      ...areaVisitedStatus,
      [areaId]: !areaVisitedStatus[areaId],
    };
    setAreaVisitedStatus(updatedVisitedStatus);
  };

  return (
    <div style={{ width: "700px", height: "750px" }}>
      <svg viewBox="0 0 700 750">
        <g>
          {AREA_LIST.map((area) => (
            <path
              id={area}
              className={areaVisitedStatus[area] ? "VisitedArea" : "Area"}
              onClick={onClickArea}
              d={AREA_PATH_DATA[area]}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Map;
