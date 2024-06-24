import React from 'react'
import { ContainerComponents, InputFormComponents } from '../components'

const RegisterPage = () => {
  return (
    <ContainerComponents>
        <div className='Center'>
            <div className=' w-2/6 h-auto space-y-7'>
                <h1 className=' font-heading text-xl md:text-3xl font-bold text-purple-700 text-center'>Register Your Contact</h1>
                <form className=' flex flex-col gap-y-5' >
                   <InputFormComponents type={"name"} name={"name"} label={"Enter UserName :"} placeholder='Your Name'/>
                </form>
            </div>
        </div>
    </ContainerComponents>
  )
}

export default RegisterPage