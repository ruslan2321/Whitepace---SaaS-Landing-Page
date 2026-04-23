import React, { type FC, type ReactNode } from "react";
import "./style.scss";

export const UI_Button: FC<{
  text: string;
  bg: string;
  icon?: string;
  size: string;
  hover?:boolean
}> = ({ text, bg, icon, size, hover=false }) => {
  return (
    <div>
      <div className={`ui-button ui-button-bg-${bg} ui-button-size-${size} ${hover ? 'ui-button-hover' : undefined}`}>
        {text}
        <img src={icon} />
      </div>
    </div>
  );
};
