import { useState, useEffect, useRef } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from './components/Loading';
import ThemeBase from './pages/ThemeBase';
import Home from './pages/Home';
import BotaoWhatsapp from './components/botaoWhatsapp';
import GravacoesLance from './components/gravacoesLance';

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
      <BrowserRouter>
         <Routes>
            <Route element={<ThemeBase sobrenosRef={sobrenosRef}/>}>
              <Route path='/' element={<Home sobrenosRef={sobrenosRef} />}></Route>
            </Route>
         </Routes>
         <BotaoWhatsapp />
      </BrowserRouter>  
     
      </>
      )
      
    }
    </>
  )
}

export default App
