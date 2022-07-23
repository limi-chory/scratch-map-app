import React from "react";
import { Tooltip } from "react-svg-tooltip";

import { AREA_LV2 } from "./const";
import { PATH } from "./path";
import { localeText, PATH_TYPE } from "./type";

type MetroPolitanCityProps = {
  label: localeText;
  handleClickArea: () => void;
};

const MetroPolitanCity: React.FC<MetroPolitanCityProps> = ({ label, handleClickArea }) => {
  const cityRef = React.createRef<SVGCircleElement>();

  return (
    <>
      <g className="Area" id={label.en} ref={cityRef} onClick={handleClickArea}>
        {AREA_LV2[label.en].map(({ rcode }) => {
          const { type, d: data } = PATH[rcode];
          if (type === PATH_TYPE.SINGLE) {
            return typeof data === "string" && <path key={rcode} d={data} />;
          } else {
            return typeof data === "object" && data.map((d, index) => <path key={`${rcode}-${index}`} d={d} />);
          }
        })}
      </g>
      <Tooltip triggerRef={cityRef}>
        <rect className="tooltipShape" x={-3} y={-35} />
        <text className="tooltipText" y={-20}>
          {label.kr.slice(0, 2)}
        </text>
      </Tooltip>
    </>
  );
};

export default MetroPolitanCity;
