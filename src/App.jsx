import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Listado from './componentes/Listado'
import Formulario from './componentes/Formulario'
import Buscador from './componentes/Buscador'
import Alert from './componentes/Alert'
import {Base_usuarios} from './Base_usuarios.js'
import { useState } from 'react'

const App =()=> {
  const[alerta, setAlerta] = useState({mensaje:'', color:''})
  const[colaboradores, setColaboradores] = useState(Base_usuarios)
  const[busqueda, setBusqueda] = useState('')
  

  return (
    <>
      <h1>Lista de Colaboradores</h1>
      
      <Buscador 
      busqueda={busqueda} 
      setbusqueda={setBusqueda}
      colaboradores={colaboradores}
      setColaboradores={setColaboradores}/>
      <div className='d-flex'>
        <Listado colaboradores = {Base_usuarios}
        className='flex-grow-1'/>
        <Formulario 
        mesajeEstado = {setAlerta}
        colaboradores={colaboradores}
        setColaboradores={setColaboradores}
        
        />
        {alerta.mensaje !== '' && <Alert ContenidoMensajeEstado = {alerta}/>}
      </div>
      
      
      
      
    </>
  )
}

export default App
