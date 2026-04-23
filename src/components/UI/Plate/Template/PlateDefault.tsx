import React, { type FC } from 'react'
import type { PlateProps } from '../type'

export const  PlateDefault:FC<PlateProps> = ({label, bg, bgimg, color, content ,description ,img ,position}) => {
  return (
    <>
         <div
        className={`ui-plate ui-plate-color-${color} ui-plate-position-content-${position} ui-plate-bg-${bg} ui-plate-position bg-[url(${bgimg})]`}
      >
        <div className={`plate-content ui-plate-position-${position}`}>
          <div className="plate-content-text">
            <h1>{label}</h1>
            <p>{description}</p>
          </div>
          <div className="w-[219px]">{content}</div>
        </div>
        <div>
          <div className={`img-container ui-plate-position-${position}`}>
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  )
}
