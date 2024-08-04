import {useState, useEffect} from 'react'
import logo from "../../public/logo1.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";




const Menu = () => {

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


  
  return (
    <div className='flex justify-around text-white bg-primary w-full'>
        {!isOpen && <img className='hidden sm:block w-56 lg:w-64 h-10' src="/logo1.png" alt="" />}
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
                  <li className='p-3 hover:bg-primary-hover duration-300 w-full text-center'>Página inicial</li>
                  <li className='p-3 hover:bg-primary-hover duration-300 w-full text-center'>Sobre Nós</li>
                  <li className='p-3 hover:bg-primary-hover duration-300 w-full text-center'>Agende o seu jogo</li>
                </ul>
            </div>
            </div>

            ) : (
              <ul className='flex flex-row justify-between'>
                <li className='p-3 hover:bg-primary-hover duration-300'>Página inicial</li>
                <li className='p-3 hover:bg-primary-hover duration-300'>Sobre Nós</li>
                <li className='p-3 hover:bg-primary-hover duration-300'>Agende o seu jogo</li>
              </ul>
            )
        }
       
    </div>

    
  )
}

export default Menu
