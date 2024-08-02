import {useState, useEffect} from 'react'
import logo from "../../public/logo1.png"


const Menu = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 700 ? setIsMobile(true) : setIsMobile(false);

    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  
  return (
    <div className='flex justify-around text-white bg-primary'>
        <img className='w-16 sm:w-56 lg:w-64 h-10' src="/logo1.png" alt="" />
        {
            isMobile ? (
              <p>hamburguer</p>

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
