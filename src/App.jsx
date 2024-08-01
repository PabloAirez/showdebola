import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu'
import Banner from './components/Banner'
import Loading from './components/Loading';
function App() {

  const [loading,setLoading] = useState(true);


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
      <Menu></Menu>
      <Banner></Banner>
      </>
      )
      
    }
    </>
  )
}

export default App
