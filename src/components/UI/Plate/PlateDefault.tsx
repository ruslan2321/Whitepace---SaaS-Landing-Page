import React, { type FC, type ReactNode } from "react";
import "./style.scss";
import type { PlateDefault } from "./type";
export const UI_Plate: FC<PlateDefault> = ({ position, plateProps }) => {
  return (
    <div
      className={`ui-plate ui-plate-color-${plateProps.color} ui-plate-position-content-${position} ui-plate-bg-${plateProps.bg} ui-plate-position bg-[url(${plateProps.bgimg})]`}
    >
      <div className={`plate-content ui-plate-position-${position}`}>
        <div className="plate-content-text">
          <h1>{plateProps.label}</h1>
          <p>{plateProps.description}</p>
        </div>
        <div className="w-[219px]">{plateProps.content}</div>
      </div>
      <div>
        <div className={`img-container ui-plate-position-${position}`}>
          <img src={plateProps.img} />
        </div>
      </div>
    </div>
  );
};
