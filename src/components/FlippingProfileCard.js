import React, { useState } from 'react'

import './FlippingProfileCard.scss'

const FlippingCard = (props) => {

  const [isLeftSide, setIsLeftSide] = useState(true)

  let card = null

  if(isLeftSide){
    card = 
      <div className="flippingCard__left"  onClick={() => setIsLeftSide(!isLeftSide)}>
        <div className="flippingCard__left__radial-gradient"/>
        <div className="flippingCard__left__background" style={{backgroundImage: `url(${props.picture})`}} />
        <div className="flippingCard__left__fullName">{props.fullName}</div>
        <div className="flippingCard__left__miniTitle">{props.miniTitle}</div>
      </div>
  } else {
    card = 
      <div className="flippingCard__right">
        <button className="flippingCard__right__arrow"  onClick={() => setIsLeftSide(!isLeftSide)}>{`<-`}</button>
        <img className="flippingCard__right__roundPicture" alt="background" src={props.picture} />
        <div className="flippingCard__right__fullName">{props.fullName}</div>
        <div className="flippingCard__right__miniTitle">{props.miniTitle}</div>
        <div className="flippingCard__right__description">{props.description}</div>
        <button className="flippingCard__right__button">Button</button>
      </div>
  }
  
  return (
    <div className="flippingCard">
      {card}
    </div>
  )
}

export default FlippingCard
