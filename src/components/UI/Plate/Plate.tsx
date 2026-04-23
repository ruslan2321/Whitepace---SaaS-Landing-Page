import React, { type FC, type ReactNode } from "react";
import "./style.scss";
import type { PlateStatic } from "./type";
import { PlateDefault } from "./Template/PlateDefault";
import { PlateDown } from "./Template/PlateDown";
export const UI_Plate: FC<PlateStatic> = ({Default, Down}) => {
  return (
    UI_Plate.Default = PlateDefault,
    UI_Plate.Down = PlateDown,
  );
};
