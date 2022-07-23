import React from "react";

import { AREA_LV1 } from "./const";
import Area from "./Area";
import "./MapV2.scss";

const MapV2: React.FC = () => {
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      <svg viewBox="0 0 1000 1000">
        {Object.entries(AREA_LV1).map(([name, area]) => (
          <Area key={name} name={name} area={area} />
        ))}
      </svg>
    </div>
  );
};

export default MapV2;
