import {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination} from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css/navigation';




const Galeria = () => {
    SwiperCore.use([Navigation]);
    const [qtdImagens,setQtdImagens] = useState(3);
    const [imagens,setImagens] = useState([
        {id:1, imagem:"1.jpg", texto:"Bora jogar e se divertir?"},
        {id:2, imagem:"2.jpg", texto:"Contamos com um espaço fechado para maior lazer"},
        {id:3, imagem:"3.jpg", texto:"Realizamos festas empresariais"},
        {id:4, imagem:"4.jpg", texto:"Contamos com fut-fralda para os pequenos"},
        {id:5, imagem:"5.jpg", texto:"Temos Fut-aniversários aos domingos"}
    
      ]);

      useEffect(() => {
   
        const handleResize = () => {
          if(window.innerWidth > 700 && window.innerWidth < 1000){
            setQtdImagens(2);
          }else if(window.innerWidth <= 700){
            setQtdImagens(1);
          }else{
            setQtdImagens(3);
          } ;
    
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      

  return (
    <div className='bg-gradient-to-b from-bgCard to-white h-100 mt-10 p-30'>
        <h2 className='text-xl mb-5 pt-10 text-center'>Conheça a nossa quadra</h2> 
        
        <Swiper
            slidesPerView={qtdImagens}
            spaceBetween={50}
            modules={[Pagination,Navigation]}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            >
      
      
      {imagens.map((imagem)=>(
        <SwiperSlide key={imagem.id}>
            <div className=" h-full w-full">
          
                <img className='h-full w-full' src={`/banner/${imagem.imagem}`} alt="" />

            </div>

        
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default Galeria
