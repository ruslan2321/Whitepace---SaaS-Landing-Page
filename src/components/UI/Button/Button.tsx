import React, { type FC, type ReactNode } from "react";
import "./style.scss";
import type { ButtonProps } from "./type";

export const UI_Button: FC<ButtonProps> = ({ text, bg, icon, size, hover=false }) => {
  return (
    <div>
      <div className={`ui-button ui-button-bg-${bg} ui-button-size-${size} ${hover ? 'ui-button-hover' : undefined}`}>
        {text}
        <img src={icon} />
      </div>
    </div>
  );
};
