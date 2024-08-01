import React from 'react'
import bola from "./../assets/images/bola.png"


const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl text-bold mb-3'>Carregando...</h1>
      <img className='animate-spin' src={bola} alt="" />
    </div>
  )
}

export default Loading
