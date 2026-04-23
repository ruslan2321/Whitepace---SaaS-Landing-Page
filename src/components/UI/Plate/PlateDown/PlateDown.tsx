import React, { type FC, type ReactNode } from "react";
import "./style.scss";
import type { PlatePropsDown } from "../type";
export const UI_PlateDown: FC<PlatePropsDown> = ({ position,plateProps }) => {
  return (
      <div
        className={`ui-plateDown ui-plate-color-${plateProps .color} ui-plate-position-content-${position} ui-plate-bg-${plateProps .bg} ui-plate-position bg-[url(${plateProps .bgimg})]`}
      >
        <div className={`plate-content-down ui-plate-position-${position}`}>
          <div className="plate-content-text-down">
            <h1>{plateProps .label}</h1>
            <p>{plateProps .description}</p>
          </div>
          <div>{plateProps .content}</div>
        </div>
        <div className={`${plateProps.img ? undefined : 'hidden'}`}>
          <div className={`img-container ui-plate-position-${position}`}>
            <img src={plateProps .img} />
          </div>
        </div>
      </div>
  );
};
