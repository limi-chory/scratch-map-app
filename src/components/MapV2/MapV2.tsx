import React from "react";
import { AREA_LV1, AREA_LV2 } from "./const";

import { PATH } from "./path";
import { PATH_TYPE } from "./type";

const MapV2: React.FC = () => {
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      <svg viewBox="0 0 1000 1000">
        {Object.entries(AREA_LV1).map(([lv1Key, lv1Value]) => {
          const { isMetropolitan, rcode: lv1Rcode } = lv1Value;

          if (isMetropolitan) {
            return (
              <g id={lv1Key} key={lv1Rcode}>
                {AREA_LV2[lv1Key].map(({ rcode }) => {
                  const { type, d: data } = PATH[rcode];
                  if (type === PATH_TYPE.SINGLE) {
                    return typeof data === "string" && <path key={rcode} d={data}></path>;
                  } else {
                    return (
                      typeof data === "object" && data.map((d, index) => <path key={`${rcode}-${index}`} d={d}></path>)
                    );
                  }
                })}
              </g>
            );
          } else {
            return (
              <g id={lv1Key} key={lv1Rcode}>
                {AREA_LV2[lv1Key].map(({ rcode, label }) => {
                  const { type, d: data } = PATH[rcode];
                  if (type === PATH_TYPE.SINGLE) {
                    return (
                      typeof data === "string" && (
                        <g id={label.en} key={rcode}>
                          <path key={rcode} d={data}></path>
                        </g>
                      )
                    );
                  } else {
                    return (
                      typeof data === "object" && (
                        <g id={label.en} key={rcode}>
                          {data.map((d, index) => (
                            <path key={`${rcode}-${index}`} d={d}></path>
                          ))}
                        </g>
                      )
                    );
                  }
                })}
              </g>
            );
          }
        })}
      </svg>
    </div>
  );
};

export default MapV2;
