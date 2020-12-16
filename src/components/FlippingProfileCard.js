import React, { useState, useEffect } from 'react'

import './FlippingProfileCard.scss'

const FlippingCard = (props) => {

  const [isFrontSide, setIsFrontSide] = useState(true)
  const [frontSideClass, setFrontSideClass] = useState(["flippingCard__front"])
  const [backSideCLass, setBackSideClass] = useState(["flippingCard__back"])

  let frontSide = null
  let backSide = null

  useEffect(() => {
    if(isFrontSide) {
      setFrontSideClass(["flippingCard__front", "flippingCard__front--entry-flip"])
      setBackSideClass(["flippingCard__back", "flippingCard__back--exit-flip"])
    } else {
      setBackSideClass(["flippingCard__back", "flippingCard__back--entry-flip"])
      setFrontSideClass(["flippingCard__front", "flippingCard__front--exit-flip"])
    }

  }, [isFrontSide])

  if(isFrontSide){
    frontSide = 
      <div className={frontSideClass.join(' ')}  onClick={() => setIsFrontSide(!isFrontSide)}>
        <div className="flippingCard__front__radial-gradient"/>
        <div className="flippingCard__front__background" style={{backgroundImage: `url(${props.picture})`}} />
        <div className="flippingCard__front__fullName">{props.fullName}</div>
        <div className="flippingCard__front__miniTitle">{props.miniTitle}</div>
      </div>
    backSide =
      <div className={backSideCLass.join(' ')} style={{opacity: '0'}}>
        <button className="flippingCard__back__arrow"  onClick={() => setIsFrontSide(!isFrontSide)}>⬅</button>
        <img className="flippingCard__back__roundPicture" alt="background" src={props.picture} />
        <div className="flippingCard__back__fullName">{props.fullName}</div>
        <div className="flippingCard__back__miniTitle">{props.miniTitle}</div>
        <div className="flippingCard__back__description">{props.description}</div>
        <button className="flippingCard__back__button">Follow</button>
      </div>
  } else {
    frontSide = 
      <div className={frontSideClass.join(' ')} style={{opacity: '0'}} onClick={() => setIsFrontSide(!isFrontSide)}>
        <div className="flippingCard__front__radial-gradient"/>
        <div className="flippingCard__front__background" style={{backgroundImage: `url(${props.picture})`}} />
        <div className="flippingCard__front__fullName">{props.fullName}</div>
        <div className="flippingCard__front__miniTitle">{props.miniTitle}</div>
      </div>
    backSide =
      <div className={backSideCLass.join(' ')}>
        <button className="flippingCard__back__arrow"  onClick={() => setIsFrontSide(!isFrontSide)}>⬅</button>
        <img className="flippingCard__back__roundPicture" alt="background" src={props.picture} />
        <div className="flippingCard__back__fullName">{props.fullName}</div>
        <div className="flippingCard__back__miniTitle">{props.miniTitle}</div>
        <div className="flippingCard__back__description">{props.description}</div>
        <button className="flippingCard__back__button">Follow</button>
      </div>
  }
  
  return (
    <div className="flippingCard">
      {frontSide}
      {backSide}
    </div>
  )
}

export default FlippingCard
