import React, { type FC, type ReactNode } from "react";
import "./style.scss";

export const UI_Cards: FC<{
  title: string;
  lable: string;
  description: string;
  size: string;
  bg: string;
  contentfooter: ReactNode;
}> = ({ title, description, lable, bg, size, contentfooter }) => {
  return (
    <>
      <div className={`cards cards-size-${size} card-bg-${bg}`}>
        <div className="card-header">
          <h3>{title}</h3>
          <h1>{lable}</h1>
          <p>{description}</p>
        </div>
        <div className="card-body">
          <ul>
            <li>
              <p>Sync unlimited devices</p>
            </li>
            <li>
              <p>10 GB monthly uploads</p>
            </li>
            <li>
              <p>200 MB max. note size</p>
            </li>
            <li>
              <p>Customize Home dashboard and access extra widgets</p>
            </li>
            <li>
              <p>Connect primary Google Calendar account</p>
            </li>
            <li>
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </li>
          </ul>
        </div>
        <div className="card-footer w-[219px]">{contentfooter}</div>
      </div>
    </>
  );
};
