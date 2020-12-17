import React, { useState, useEffect, useRef } from 'react'

import './FlippingProfileCard.scss'

const FlippingCard = (props) => {

  let theme = null

  if(props.theme) {
    theme = props.theme
  } else {
    theme = 'blue'
  }

  const [isFrontSide, setIsFrontSide] = useState(true)
  const [frontSideClass, setFrontSideClass] = useState(["flippingCard__front", `flippingCard__front--${theme}`])
  const [backSideCLass, setBackSideClass] = useState(["flippingCard__back", `flippingCard__back--${theme}`])

  const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
      isMountRef.current = false;
    }, []);
    return isMountRef.current;
  };

  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      console.log('First Render');
    } else {
      console.log('Subsequent Render');
      if(isFrontSide) {
        setFrontSideClass(["flippingCard__front", `flippingCard__front--${theme}`, "flippingCard__front--entry-flip"])
        setBackSideClass(["flippingCard__back", `flippingCard__back--${theme}`, "flippingCard__back--exit-flip"])
      } else {
        setBackSideClass(["flippingCard__back", `flippingCard__back--${theme}`, "flippingCard__back--entry-flip"])
        setFrontSideClass(["flippingCard__front", `flippingCard__front--${theme}`, "flippingCard__front--exit-flip"])
      }
    }
  }, [isFrontSide, isMount, theme])

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
    <div className={`flippingCard__front__radial-gradient flippingCard__front__radial-gradient--${theme}`}/>
    <div className="flippingCard__front__background" style={{backgroundImage: `url(${props.picture})`}} />
    <div className="flippingCard__front__fullName">{props.fullName}</div>
    <div className="flippingCard__front__miniTitle">{props.miniTitle}</div>
  </div>
  
  let backSide = 
    <div className={backSideCLass.join(' ')} style={{opacity: backSideOpacity}}>
      <button className={`flippingCard__back__arrow flippingCard__back__arrow--${theme}`}  onClick={() => setIsFrontSide(!isFrontSide)}>⬅</button>
      <img className={`flippingCard__back__roundPicture flippingCard__back__roundPicture--${theme}`} alt="background" src={props.picture} />
      <div className={`flippingCard__back__fullName flippingCard__back__fullName--${theme}`}>{props.fullName}</div>
      <div className="flippingCard__back__miniTitle">{props.miniTitle}</div>
      <div className="flippingCard__back__description">{props.description}</div>
      <button className={`flippingCard__back__button flippingCard__back__button--${theme}`}>Follow</button>
    </div>
  
  return (
    <div className="flippingCard">
      {frontSide}
      {backSide}
    </div>
  )
}

export default FlippingCard
