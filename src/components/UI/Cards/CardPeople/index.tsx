import React, { type FC } from 'react'
import type { CardPeopleProps, CardProps } from '../type'
import './style.scss'

export const UI_CardPeople:FC<CardPeopleProps> = ({bg, avatar, name,  description, descriptionPeopl, img, title}) => {
  return (
      <>
      <div className={`cardspeople card-people-bg-${bg}`}>
        <div className="card-header">
          <img src={img} className='w-[64px]'/>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='line'></div>
        <div className="card-body-people">
          <div>
            <img src={avatar}/>
          </div>
          <div>
            <h1>{name}</h1>
            <p>{descriptionPeopl}</p>
          </div>
        </div>
      </div>
    </>
  )
}
