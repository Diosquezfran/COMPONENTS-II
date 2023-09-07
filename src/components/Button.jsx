import React from 'react'

const Button = ({ children, cb}) => {
    console.log(children)
    return (
    <button onClick={cb}> { children }</button>
  )
}

export default Button