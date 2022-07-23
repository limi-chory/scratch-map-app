import React, { useEffect, useRef, useState } from "react";
import { AREA_INITIAL_VISITED_STATUS, AREA_LIST, AREA_NAME, AREA_PATH_DATA } from "./const";
import "./Map.scss";
import { AreaVisitedType } from "./type";
import { Tooltip } from "react-svg-tooltip";

const Map: React.FC = () => {
  const [areaVisitedStatus, setAreaVisitedStatus] = useState<AreaVisitedType>(AREA_INITIAL_VISITED_STATUS);

  const pathRef: any = AREA_LIST.reduce((acc, cur) => ({ ...acc, [cur]: React.createRef<SVGCircleElement>() }), {});

  const onClickArea = (e: any) => {
    const areaId = e.target.id;
    const updatedVisitedStatus = {
      ...areaVisitedStatus,
      [areaId]: !areaVisitedStatus[areaId],
    };
    setAreaVisitedStatus(updatedVisitedStatus);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const viewBox = {
      x: 0,
      y: 0,
      w: 700,
      h: 850,
    };

    const svgSize = {
      w: 700,
      h: 850,
    };

    const startPoint = { x: 0, y: 0 };
    const endPoint = { x: 0, y: 0 };
    let isPanning = false;
    let scale = 1;

    const handleOnMouseWheel = (e: any) => {
      e.preventDefault();
      const w = viewBox.w as number;
      const h = viewBox.h as number;

      const mouseX = e.offsetX;
      const mouseY = e.offsetY;
      const dw = w * Math.sign(e.deltaY) * 0.05;
      const dh = h * Math.sign(e.deltaY) * 0.05;
      const dx = (dw * mouseX) / (svgSize.w as number);
      const dy = (dh * mouseY) / (svgSize.h as number);

      viewBox.x = viewBox.x + dx;
      viewBox.y = viewBox.y + dy;
      viewBox.w = w - dw;
      viewBox.h = h - dh;
      scale = (svgSize.w as number) / viewBox.w;

      svgRef.current?.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
    };

    const handleOnMouseDown = (e: any) => {
      isPanning = true;
      startPoint.x = e.x;
      startPoint.y = e.y;
    };

    const handleOnMouseMove = (e: any) => {
      if (isPanning) {
        endPoint.x = e.x;
        endPoint.y = e.y;

        const dx = (startPoint.x - endPoint.x) / scale;
        const dy = (startPoint.y - endPoint.y) / scale;
        const movedViewbox = {
          x: viewBox.x + dx,
          y: viewBox.y + dy,
          w: viewBox.w,
          h: viewBox.h,
        };

        svgRef.current?.setAttribute(
          "viewBox",
          `${movedViewbox.x} ${movedViewbox.y} ${movedViewbox.w} ${movedViewbox.h}`
        );
      }
    };

    const handleOnMouseUp = (e: any) => {
      if (isPanning) {
        endPoint.x = e.x;
        endPoint.y = e.y;

        const dx = (startPoint.x - endPoint.x) / scale;
        const dy = (startPoint.y - endPoint.y) / scale;

        viewBox.x = viewBox.x + dx;
        viewBox.y = viewBox.y + dy;

        svgRef.current?.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);

        isPanning = false;
      }
    };

    const handleOnMouseLeave = (e: any) => {
      isPanning = false;
    };

    const containerElement = containerRef.current;
    containerElement?.addEventListener("mousewheel", handleOnMouseWheel);
    containerElement?.addEventListener("mousedown", handleOnMouseDown);
    containerElement?.addEventListener("mousemove", handleOnMouseMove);
    containerElement?.addEventListener("mouseup", handleOnMouseUp);
    containerElement?.addEventListener("mouseleave", handleOnMouseLeave);

    return () => {
      containerElement?.removeEventListener("wheel", handleOnMouseWheel);
      containerElement?.removeEventListener("mousedown", handleOnMouseDown);
      containerElement?.removeEventListener("mousemove", handleOnMouseMove);
      containerElement?.removeEventListener("mouseup", handleOnMouseUp);
      containerElement?.removeEventListener("mouseleave", handleOnMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "700px", height: "850px" }}>
      <svg ref={svgRef} viewBox="0 0 700 850">
        <g>
          {AREA_LIST.map((area) => (
            <React.Fragment key={area}>
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
            </React.Fragment>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Map;
