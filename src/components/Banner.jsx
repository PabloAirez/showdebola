import React from 'react'
import logo from "../../public/logo.png"
import futebol from "./../assets/images/foot.jpg"

const Banner = () => {
  return (
    <div className={'h-84 w-full bg-cover bg-center bg-[url("/src/assets/images/foot.jpg")]'}>
        <div className={`h-full w-full bg-secondary/50`}>
        
            <div className='flex flex-col justify-center items-center'>
                <img className=' w-96 h-72 ' src={logo} alt="logo" />
                <p className='text-white text-center'>Futebol society Charqueadas</p>
            </div>

        </div>

    </div>
  )
}

export default Banner
