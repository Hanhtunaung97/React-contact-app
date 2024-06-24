import React from 'react'

const InputFormComponents = ({type,name,label,placeholder="",...rest}) => {
  return (
    <div className=' flex flex-col gap-y-3'>
        <label htmlFor={name} className=' text-lg text-purple-500 select-none cursor-pointer'>{label}</label>
        <input {...rest} type={type} name={name} id={name} placeholder={placeholder} className=' px-3 py-2 border-2 border-purple-300 rounded-lg outline-purple-400' />
    </div>
  )
}

export default InputFormComponents