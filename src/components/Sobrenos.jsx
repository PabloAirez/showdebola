import {useEffect, useRef,useState} from 'react'


const Sobrenos = ({divRef}) => {

    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
       
        if (entry.isIntersecting) {
            setVisible(true);
          }
      });
    });

    const target = divRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
    

  return (
    <div ref={divRef} className='mt-20'>
    {
        visible && (
            <div className={`flex lg:flex-row flex-col sm:m-20 p-5 animate-fadeIn bg-bgCard rounded-2xl shadow-2xl`}>
                <div className='flex flex-col'>
                    <img className='rounded-lg' src='/banner/2.jpg'></img>
                </div>
        
                <div className='flex flex-col justify-center items-center text-xl lg:ml-10 w-full p-5'>
                  <h2 className='text-xl mb-5'>Sobre Nós</h2>   
                  <p>A Society Show  de Bola nasceu de um sonho: Proporcionar um ambiente divertido e familiar para todos os fãs de bola. Aqui sempre temos espaço para um bom jogo de futebol, músicas e bebidas para consumo local. Seja para um aniversário, jogo entre amigos ou para um churrasco em família, nosso espaço está disponível para tornar os seus momentos ainda mais divertidos. Nos chame no Whatsapp e conheça o padrão Show de Bola de jogar futebol.</p>   
                </div>
          
             </div>
        )
  
}

 
    </div>
  )
}

export default Sobrenos
