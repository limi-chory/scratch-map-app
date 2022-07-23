import React from "react";

import { AREA_LV2 } from "./const";
import { PATH } from "./path";
import { PATH_TYPE } from "./type";

type AreaProps = {
  name: string;
  isMetropolitan: boolean;
};

const Area: React.FC<AreaProps> = ({ name, isMetropolitan }) => {
  if (isMetropolitan) {
    return (
      <g className="Area" id={name}>
        {AREA_LV2[name].map(({ rcode }) => {
          const { type, d: data } = PATH[rcode];
          if (type === PATH_TYPE.SINGLE) {
            return typeof data === "string" && <path key={rcode} d={data} />;
          } else {
            return typeof data === "object" && data.map((d, index) => <path key={`${rcode}-${index}`} d={d} />);
          }
        })}
      </g>
    );
  } else {
    return (
      <g id={name}>
        {AREA_LV2[name].map(({ rcode, label }) => {
          const { type, d: data } = PATH[rcode];
          if (type === PATH_TYPE.SINGLE) {
            return (
              typeof data === "string" && (
                <g className="Area" id={label.en} key={rcode}>
                  <path key={rcode} d={data} />
                </g>
              )
            );
          } else {
            return (
              typeof data === "object" && (
                <g className="Area" id={label.en} key={rcode}>
                  {data.map((d, index) => (
                    <path key={`${rcode}-${index}`} d={d} />
                  ))}
                </g>
              )
            );
          }
        })}
      </g>
    );
  }
};

export default Area;
