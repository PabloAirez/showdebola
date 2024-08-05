import {useRef} from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './../components/Menu'


const ThemeBase = ({sobrenosRef}) => {
  return (
    <div>
       <Menu refs={{sobrenos:sobrenosRef}}></Menu>
       <Outlet/>

    </div>
  )
}

export default ThemeBase
