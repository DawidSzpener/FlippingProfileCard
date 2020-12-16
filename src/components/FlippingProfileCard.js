import React, { useState } from 'react'

import './FlippingProfileCard.scss'

const FlippingCard = (props) => {

  const [isFrontSide, setIsFrontSide] = useState(true)

  let card = null

  if(isFrontSide){
    card = 
      <div className="flippingCard__front"  onClick={() => setIsFrontSide(!isFrontSide)}>
        <div className="flippingCard__front__radial-gradient"/>
        <div className="flippingCard__front__background" style={{backgroundImage: `url(${props.picture})`}} />
        <div className="flippingCard__front__fullName">{props.fullName}</div>
        <div className="flippingCard__front__miniTitle">{props.miniTitle}</div>
      </div>
  } else {
    card = 
      <div className="flippingCard__back">
        <button className="flippingCard__back__arrow"  onClick={() => setIsFrontSide(!isFrontSide)}>⬅</button>
        <img className="flippingCard__back__roundPicture" alt="background" src={props.picture} />
        <div className="flippingCard__back__fullName">{props.fullName}</div>
        <div className="flippingCard__back__miniTitle">{props.miniTitle}</div>
        <div className="flippingCard__back__description">{props.description}</div>
        <button className="flippingCard__back__button">Button</button>
      </div>
  }
  
  return (
    <div className="flippingCard">
      {card}
    </div>
  )
}

export default FlippingCard
