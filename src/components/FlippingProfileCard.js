import React, { useState } from 'react'

import './FlippingProfileCard.scss'

const FlippingCard = (props) => {

  const [isLeftSide, setIsLeftSide] = useState(true)

  let card = null

  if(isLeftSide){
    card = 
      <div className="flippingCard__left"  onClick={() => setIsLeftSide(!isLeftSide)}>
        <img className="FlippingCard__left__background" alt="background" src={props.picture} />
        <div className="FlippingCard__left__fullName">{props.fullName}</div>
        <div className="FlippingCard__left__miniTitle">{props.miniTitle}</div>
      </div>
  } else {
    card = 
      <div className="flippingCard__right">
        <button className="FlippingCard__right__arrow"  onClick={() => setIsLeftSide(!isLeftSide)}>{`<-`}</button>
        <img className="FlippingCard__right__roundPicture" alt="background" src={props.picture} />
        <div className="FlippingCard__right__fullName">{props.fullName}</div>
        <div className="FlippingCard__right__miniTitle">{props.miniTitle}</div>
        <div className="FlippingCard__right__description">{props.description}</div>
        <button className="FlippingCard__right__button">Button</button>
      </div>
  }
  
  return (
    <div className="flippingCard">
      {card}
    </div>
  )
}

export default FlippingCard
