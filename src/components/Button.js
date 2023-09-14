import React from 'react'

const Button = ({name}) => { //here i am reciving prop
  return (
    <>
    <button className='btn-gray'>{name}</button>
    </>
      
  )
}

export default Button
