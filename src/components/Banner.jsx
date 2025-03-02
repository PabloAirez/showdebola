import {useState} from 'react'
import logo from "../../public/logo2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css/pagination';



const Banner = () => {

  SwiperCore.use([Autoplay, Pagination]);


  const [imagens,setImagens] = useState([
    {id:1, imagem:"1.jpg", texto:"Bora jogar e se divertir?"},
    {id:2, imagem:"2.jpg", texto:"Contamos com um espaço fechado para maior lazer"},
    {id:3, imagem:"3.jpg", texto:"Realizamos festas empresariais"},
    {id:4, imagem:"4.jpg", texto:"Contamos com fut-fralda para os pequenos"},
    {id:5, imagem:"5.jpg", texto:"Temos Fut-aniversários aos domingos"}

  ]);
  return (
    <div className='relative h-screen '>
      <div className='flex flex-col absolute opacity-100 z-10 justify-start items-start'>
          <img className='animate-fadeIn w-56 h-48 lg:w-64 lg:h-56 ml-5 mt-5 ' src={logo} alt="logo" />
      </div>
    <Swiper
    style={{
      "--swiper-pagination-color": "#FFFFFF",
      "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
      "--swiper-pagination-bullet-inactive-opacity": "0.5",
      "--swiper-pagination-bullet-size": "12px",
      "--swiper-pagination-bullet-horizontal-gap": "6px"
    }}
    slidesPerView={1}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    loop={true}
    >
      
      
      {imagens.map((imagem)=>(
        <SwiperSlide key={imagem.id}>
          <div className="h-screen w-full  bg-cover bg-center z-8" style={{ backgroundImage: `url('/banner/${imagem.imagem}')` }}>
                <div className={`h-full w-full bg-black/80 `}>
                    <div className='h-full flex flex-col justify-center items-center'>
                        <p className='text-2xl sm:text-3xl text-white bg-black/20 p-2'>{imagem.texto}</p>
                    </div>
             </div>

        </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default Banner
