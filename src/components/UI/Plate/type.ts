import type { FC, ReactNode } from "react";

interface PlateProps {
  bg?: 'darkblue' | 'white';
  bgimg?: string;
  label: string;
  description?: string;
  img?: string;
  content?: ReactNode;
  color?: string;
}

export interface PlateDefault {
  plateProps: PlateProps;
  position?: "left" | "right";
}
export interface PlatePropsDown {
  plateProps: PlateProps;
  position?: "down" | "up";
}
