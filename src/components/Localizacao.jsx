import React from 'react'

const Localizacao = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 mb-5 bg-gradient-to-r from-bgCard to-white'>
      <h2 className='text-xl mb-5 pt-10 text-center'>Localização</h2> 
      <p className='text-lg text-center'>Nossa quadra está localizada na R. Silmar Berbiger, 341 - Sul América, Charqueadas - RS</p>
      <p className='text-lg text-center mb-5'>Em frente à padaria Yung</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13825.234720584418!2d-51.62881171564351!3d-29.97055769016695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951bc17d489f9cdf%3A0xf32052525ccdaa93!2sShow%20de%20Bola!5e0!3m2!1spt-BR!2sbr!4v1722874203236!5m2!1spt-BR!2sbr" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
  )
}

export default Localizacao
