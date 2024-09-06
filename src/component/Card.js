import React from 'react'
import img from '../data/69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg'
import './styles/Card.scss'

const Card = (props) => {
  const url= "https://image.tmdb.org/t/p/original/"
  return (
    <>
    <img  className="img_card"src={`${url}${props.img_url}`} alt="error" />
    
    </>
  )
}

export default Card