import React from 'react'
import logo from "../../public/logo.png"
import futebol from "./../assets/images/foot.jpg"

const Banner = () => {
  return (
    <div className={'h-84 w-full bg-cover bg-center bg-[url("/src/assets/images/foot.jpg")]'}>
        <div className={`h-full w-full bg-secondary/50`}>
        
        <img className='w-64 h-20 ' src={logo} alt="logo" />

        </div>

    </div>
  )
}

export default Banner
