import React, { type FC, type ReactNode } from "react";
import "./style.scss";
import type { CardProps } from "./type";

export const UI_Cards: FC<CardProps> = ({ title, description, lable, bg, size, contentfooter, content }) => {
  return (
    <>
      <div className={`cards cards-size-${size} card-bg-${bg}`}>
        <div className="card-header">
          <h3>{title}</h3>
          <h1>{lable}</h1>
          <p>{description}</p>
        </div>
        <div className="card-body">
          {content}
        </div>
        <div className="card-footer w-[219px]">{contentfooter}</div>
      </div>
    </>
  );
};
