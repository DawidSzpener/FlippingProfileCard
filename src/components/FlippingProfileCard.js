import React, { useState, useEffect } from 'react'

import './FlippingProfileCard.scss'

const FlippingCard = (props) => {

  const [isFrontSide, setIsFrontSide] = useState(true)
  const [frontSideClass, setFrontSideClass] = useState(["flippingCard__front"])
  const [backSideCLass, setBackSideClass] = useState(["flippingCard__back"])

  useEffect(() => {
    if(isFrontSide) {
      setFrontSideClass(["flippingCard__front", "flippingCard__front--entry-flip"])
      setBackSideClass(["flippingCard__back", "flippingCard__back--exit-flip"])
    } else if (isFrontSide) {
      setFrontSideClass(["flippingCard__front"])
      setBackSideClass(["flippingCard__back"])
    } else {
      setBackSideClass(["flippingCard__back", "flippingCard__back--entry-flip"])
      setFrontSideClass(["flippingCard__front", "flippingCard__front--exit-flip"])
    }

  }, [isFrontSide])

  let frontSideOpacity = 0
  let backSideOpacity = 0

  if(isFrontSide){
    frontSideOpacity = 1
    backSideOpacity = 0
  } else {
    frontSideOpacity = 0
    backSideOpacity = 1
  }

  let frontSide = 
  <div className={frontSideClass.join(' ')} style={{opacity: frontSideOpacity}}  onClick={() => setIsFrontSide(!isFrontSide)}>
    <div className="flippingCard__front__radial-gradient"/>
    <div className="flippingCard__front__background" style={{backgroundImage: `url(${props.picture})`}} />
    <div className="flippingCard__front__fullName">{props.fullName}</div>
    <div className="flippingCard__front__miniTitle">{props.miniTitle}</div>
  </div>
  
  let backSide = 
    <div className={backSideCLass.join(' ')} style={{opacity: backSideOpacity}}>
      <button className="flippingCard__back__arrow"  onClick={() => setIsFrontSide(!isFrontSide)}>⬅</button>
      <img className="flippingCard__back__roundPicture" alt="background" src={props.picture} />
      <div className="flippingCard__back__fullName">{props.fullName}</div>
      <div className="flippingCard__back__miniTitle">{props.miniTitle}</div>
      <div className="flippingCard__back__description">{props.description}</div>
      <button className="flippingCard__back__button">Follow</button>
    </div>
  
  return (
    <div className="flippingCard">
      {frontSide}
      {backSide}
    </div>
  )
}

export default FlippingCard
