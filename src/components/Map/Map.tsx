import React, { useState } from "react";
import {
  AREA_INITIAL_VISITED_STATUS,
  AREA_LIST,
  AREA_NAME,
  AREA_PATH_DATA,
} from "./const";
import "./Map.scss";
import { AreaVisitedType } from "./type";
import { Tooltip } from "react-svg-tooltip";

const Map: React.FC = () => {
  const [areaVisitedStatus, setAreaVisitedStatus] = useState<AreaVisitedType>(
    AREA_INITIAL_VISITED_STATUS
  );

  const pathRef: any = AREA_LIST.reduce(
    (acc, cur) => ({ ...acc, [cur]: React.createRef<SVGCircleElement>() }),
    {}
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
    <div style={{ width: "700px", height: "850px" }}>
      <svg viewBox="0 0 700 850">
        <g>
          {AREA_LIST.map((area) => (
            <>
              <path
                id={area}
                className={areaVisitedStatus[area] ? "VisitedArea" : "Area"}
                ref={pathRef[area]}
                onClick={onClickArea}
                d={AREA_PATH_DATA[area]}
              />
              <Tooltip triggerRef={pathRef[area]}>
                <rect className="tooltipShape" x={-3} y={-35} />
                <text className="tooltipText" y={-20}>
                  {AREA_NAME[area]}
                </text>
              </Tooltip>
            </>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Map;
