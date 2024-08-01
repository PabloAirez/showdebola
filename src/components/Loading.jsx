import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl text-bold mb-3'>Carregando...</h1>
      <img className='animate-spin' src="src/assets/images/bola.png" alt="" />
    </div>
  )
}

export default Loading
