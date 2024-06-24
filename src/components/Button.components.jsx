import React from 'react'

const ButtonComponents = ({children}) => {
  return (
    <button className=' text-purple-50 bg-purple-500 px-3 py-2 border border-purple-300 rounded-lg duration-200 active:scale-90 active:bg-purple-50 active:text-purple-500 w-1/2 mx-auto'>{children}</button>
  )
}

export default ButtonComponents