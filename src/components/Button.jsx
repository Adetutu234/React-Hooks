import React from 'react'

const Button = ({text,className,onClick }) => {
  return (
    <div className={`w-fit ${className}`} onClick={onClick}>
      {text}
    </div>
  )
}

export default Button
