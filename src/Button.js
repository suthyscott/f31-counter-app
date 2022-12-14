import {useState, useRef} from 'react'

const Button = ({type, func}) => {
  return (
    <button onClick={func}>{type}</button>
  )
}

export default Button