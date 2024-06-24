import React from 'react'

const ContainerComponents = ({children}) => {
  return (
    <div className=' max-w-[1000px] mx-auto min-h-screen'>{children}</div>
  )
}

export default ContainerComponents