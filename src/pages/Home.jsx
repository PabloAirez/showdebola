import React from 'react'
import Banner from './../components/Banner'
import Sobrenos from './../components/Sobrenos';
import Galeria from './../components/Galeria';
import Localizacao from './../components/Localizacao';
import Rodape from './../components/Rodape';
import GravacoesLance from './../components/gravacoesLance';

const Home = ({sobrenosRef}) => {
    
  return (
    <>
       
      <Banner></Banner>
      <Sobrenos divRef={sobrenosRef}></Sobrenos>
      <GravacoesLance></GravacoesLance>
      <Galeria ></Galeria>
      <Localizacao></Localizacao>
      <Rodape></Rodape>
    </>
  )
}

export default Home
