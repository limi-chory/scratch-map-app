import React from "react";
import { Tooltip } from "react-svg-tooltip";

import { getCityTooltipLabel } from "../../../utils/getCityLabel";
import { PATH } from "./path";
import { localeText, PATH_TYPE } from "./type";
import "./MapV2.scss";

type BasicCityProps = {
  rcode: number;
  label: localeText;
  handleClickArea: (rcode: number) => void;
};

const BasicCity: React.FC<BasicCityProps> = ({ rcode, label, handleClickArea }) => {
  const { type, d: data } = PATH[rcode];
  const cityRef = React.createRef<SVGCircleElement>();

  const isSinglePath = type === PATH_TYPE.SINGLE && typeof data === "string";
  const isMultiPath = type === PATH_TYPE.MULTI && typeof data === "object";

  const tooltipLabel = getCityTooltipLabel(label);

  return (
    <>
      <g className="Area" id={label.en} ref={cityRef} onClick={() => handleClickArea(rcode)}>
        {isSinglePath && <path key={rcode} d={data} />}
        {isMultiPath && data.map((d, index) => <path key={`${rcode}-${index}`} d={d} />)}
      </g>
      <Tooltip triggerRef={cityRef}>
        <rect className={tooltipLabel.kr.length > 2 ? "tooltipShapeWith3Letter" : "tooltipShape"} x={-3} y={-35} />
        <text className="tooltipText" y={-20}>
          {tooltipLabel.kr}
        </text>
      </Tooltip>
    </>
  );
};

export default BasicCity;
