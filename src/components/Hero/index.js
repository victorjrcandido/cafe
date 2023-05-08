import React from 'react'
import "./Hero.css"
import { IoMenuSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='nav'>
        <img className='nav-logo' src='/logo.png' alt='logo' />
        <IconContext.Provider value={{ size: "2em", className: "menu-icon", color: "black" }}>
          <div>
            <IoMenuSharp />
          </div>
        </IconContext.Provider>
      </div>
      <div className='hero-section'>
        <img className='hero-img' src='/hero-image.png' alt='banner' />
        <div className='text'>
          <img className='cafe-logo' src='/logo.png' alt='logo' />
          <h1 className='primary-heading'>O melhor lugar para tomar café que você já conheceu.</h1>
          <p>Desperte seus sentidos com o aroma irresistível do nosso café fresco e experimente uma experiência única e saborosa que vai te deixar com vontade de voltar sempre!</p>
          <button className='button'>Saiba mais</button>
        </div>
      </div>
    </div>
  )
}

export default Hero