import React, { useState } from 'react'

import './FlippingCard.scss'

const FlippingCard = (props) => {

  const [isLeftSide, setIsLeftSide] = useState(true)

  let card = null

  if(isLeftSide){
    card = 
      <div className="flippingCard__left">
        <img className="FlippingCard__left--background" alt="background" src={props.picture} />
        <div className="FlippingCard__left--fullName">{props.fullName}</div>
        <div className="FlippingCard__left--miniTitle">{props.miniTitle}</div>
      </div>
  } else {
    card = 
      <div className="flippingCard__right">
        <img className="FlippingCard__right--roundPicture" alt="background" src={props.picture} />
        <div className="FlippingCard__right--fullName">{props.fullName}</div>
        <div className="FlippingCard__right--miniTitle">{props.miniTitle}</div>
        <div className="FlippingCard__right--description">{props.description}</div>
        <button className="FlippingCard__right--button">Button</button>
      </div>
  }
  
  return (
    <div className="flippingCard" onClick={() => setIsLeftSide(!isLeftSide)}>
      {card}
    </div>
  )
}

export default FlippingCard
