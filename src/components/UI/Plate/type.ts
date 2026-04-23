import type { FC, ReactNode } from "react";

export interface PlateProps {
      position?: string;
      bg?: string;
      bgimg?:string;
      label: string;
      description?: string;
      img?: string;
      content?: ReactNode;
      color?  : string,
}
export interface PlateStatic {
    Default: PlateProps,
    Down: PlateProps
}