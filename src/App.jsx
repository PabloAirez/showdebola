import { useState, useEffect, useRef } from 'react'
import './App.css'
import Menu from './components/Menu'
import Banner from './components/Banner'
import Loading from './components/Loading';
import Sobrenos from './components/Sobrenos';
function App() {

  const [loading,setLoading] = useState(true);
  const sobrenosRef = useRef(null);



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {
      loading ? (
        <Loading></Loading>
      ): (
      <>  
      <Menu refs={{sobrenos:sobrenosRef}}></Menu>
      <Banner></Banner>
      <Sobrenos divRef={sobrenosRef}></Sobrenos>
      </>
      )
      
    }
    </>
  )
}

export default App
