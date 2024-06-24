import React from 'react'

const ContainerComponents = ({children}) => {
  return (
    <div className=' max-w-[1000px] mx-auto h-screen'>{children}</div>
  )
}

export default ContainerComponents