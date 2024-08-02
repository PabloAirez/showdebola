import React from 'react'
import logo from "../../public/logo1.png"


const Menu = () => {
  return (
    <div className='flex justify-around text-white bg-primary'>
        <img className='w-32 sm:w-56 lg:w-64 h-10' src="/logo1.png" alt="" />
        <ul className='flex flex-row justify-between'>
            <li className='p-3 hover:bg-primary-hover duration-300'>Página inicial</li>
            <li className='p-3 hover:bg-primary-hover duration-300'>Sobre Nós</li>
            <li className='p-3 hover:bg-primary-hover duration-300'>Agende o seu jogo</li>
        </ul>
    </div>

    
  )
}

export default Menu
