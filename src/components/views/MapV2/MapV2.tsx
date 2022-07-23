import React from "react";
import BasicCity from "./BasicCity";

import { AREA_LV1, AREA_LV2 } from "./const";

import "./MapV2.scss";
import MetroPolitanCity from "./MetroPolitanCity";

const MapV2: React.FC = () => {
  return (
    <div style={{}}>
      <svg viewBox="0 -50 530 800">
        {Object.entries(AREA_LV1).map(([name, area]) => {
          const { isMetropolitan, label } = area;

          if (isMetropolitan) return <MetroPolitanCity key={name} label={label} />;
          else {
            return (
              <g id={name} key={name}>
                {AREA_LV2[name].map(({ rcode, label }) => (
                  <BasicCity key={label.en} rcode={rcode} label={label} />
                ))}
              </g>
            );
          }
        })}
      </svg>
    </div>
  );
};

export default MapV2;
