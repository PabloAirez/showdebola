import React from 'react'

const Menu = () => {
  return (
    <div className='flex justify-around text-white bg-primary'>
        <ul className='flex flex-row justify-between'>
            <li className='p-3 hover:bg-primary-hover duration-300'>Página inicial</li>
            <li className='p-3 hover:bg-primary-hover duration-300'>Sobre Nós</li>
            <li className='p-3 hover:bg-primary-hover duration-300'>Agende o seu jogo</li>
        </ul>
    </div>

    
  )
}

export default Menu
