import {useState, useEffect, useRef} from 'react'
import logo from "../../public/logo1.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';




const Menu = ({refs}) => {

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
   
    const handleResize = () => {
      window.innerWidth < 700 ? setIsMobile(true) : setIsMobile(false);

    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToDiv = (target) => {
    setIsOpen(false);
    target.current.scrollIntoView({ behavior: 'smooth' });
    
  };


  
  return (
    <div className='flex justify-around text-white bg-primary w-full fixed z-20'>
        {!isOpen && <img className='hidden sm:block w-96 h-10' src="/logo1.png" alt="" />}
        {
            isMobile ? (
              <div className='flex flex-col w-full'>
                {
              isOpen ? (
                  <button className="flex justify-end" onClick={()=>{setIsOpen(false)}}><IoCloseSharp  className='w-10 h-10 mb-5' /></button>   
       
              ): (
                <button className="flex justify-end items-center mr-5" onClick={()=>{setIsOpen(true)}}><GiHamburgerMenu  className='w-10 h-10' /></button>
              )
               }
            <div className={`${isOpen ? ("h-screen") : ("h-0")} bg-primary w-full transition-all  duration-500 overflow-hidden`}>
              <ul className='flex flex-col w-full mt-30'>
                  <Link className='w-full text-center' to={"/"}> <button className='w-full text-center'><li className='p-3 hover:bg-primary-hover duration-300 w-full text-center'>Página inicial</li></button></Link>
                  <button  onClick={()=>{scrollToDiv(refs.sobrenos)}}><li  className='p-3 hover:bg-primary-hover duration-300 w-full text-center'> Sobre Nós</li></button>
                  <li className='p-3 hover:bg-primary-hover duration-300 w-full text-center'>Agende o seu jogo</li>
                </ul>
            </div>
            </div>

            ) : (
              <ul className='flex flex-row justify-between'>
                <li className='p-3 hover:bg-primary-hover duration-300'>Página inicial</li>
                <button  onClick={()=>{scrollToDiv(refs.sobrenos)}}><li  className='p-3 hover:bg-primary-hover duration-300 w-full text-center'> Sobre Nós</li></button>
                <li className='p-3 hover:bg-primary-hover duration-300'><a href='https://wa.me/5551980184007' target='_blank'>Agende o seu jogo</a></li>
              </ul>
            )
        }
       
    </div>

    
  )
}

export default Menu
