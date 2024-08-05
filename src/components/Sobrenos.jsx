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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae reiciendis id! Ipsam, at illo? Modi possimus fugiat maiores, repellat quod culpa provident similique dolor nulla magni praesentium quam voluptatem.</p>
                </div>
          
             </div>
        )
  
}

 
    </div>
  )
}

export default Sobrenos
