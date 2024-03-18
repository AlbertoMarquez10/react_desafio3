import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {useState} from 'react'


const Formulario = ({mesajeEstado, colaboradores, setColaboradores}) => {

  const [nombre, setNombre] = useState('')
  const catchNombre = (e)=>setNombre(e.target.value)

  const [email, setEmail] = useState('')
  const catchEmail = (e)=>setEmail(e.target.value)

  const [edad, setEdad] = useState('')
  const catchEdad = (e)=>setEdad(e.target.value)

  const [cargo, setCargo] = useState('')
  const catchCargo = (e)=>setCargo(e.target.value)

  const [telefono, setTelefono] = useState('')
  const catchTelefono = (e)=>setTelefono(e.target.value)
  //console.log(listaColaboradores.length)
  const valorid = ()=>{
    return colaboradores.length+1
  }
  const nuevoCol={
    id:valorid(),
    nombre:nombre,
    correo:email,
    edad:edad,
    cargo:cargo,
    telefono:telefono

  }
  const validarForm = (e) =>{
    e.preventDefault()
    
    if (nombre.trim() === '' || email.trim() === '' || edad.trim() === '' || cargo.trim() === '' || telefono.trim() === '') {
      mesajeEstado({mensaje:'Todos los campos son obligatorios', color:'danger'})
        //console.log('Algunos campos, o todos, estan vacios. Todos los campos son obligatorios')
    }else{
        setColaboradores(colaboradores.push(nuevoCol))

        mesajeEstado({mensaje:'Su registro de colaborador fue exitoso', color:'success'})
        setNombre('')
        setEmail('')
        setEdad('')
        setCargo('')
        setTelefono('')
        
      }
    
  }


  return (<>
  <div className='d-flex flex-column'>
      <h2>Agregar nuevo Colaborador</h2>
      <Form onSubmit={validarForm}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control 
          type="text" 
          placeholder="Nombre del colaborador"
          onChange={catchNombre}
          value={nombre} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
          type="email" 
          placeholder="Email del colaborador"
          onChange={catchEmail}
          value={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control 
          type="number" 
          placeholder="Edad del colaborador"
          onChange={catchEdad}
          value={edad} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCargo">
          <Form.Control 
          type="text" 
          placeholder="Cargo del colaborador"
          onChange={catchCargo}
          value={cargo} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Control 
          type="number" 
          placeholder="Teléfono del colaborador"
          onChange={catchTelefono}
          value={telefono} />
        </Form.Group>

        <div className='d-grid'>
          <Button variant="primary" type="submit">
            Agregar colaborador
          </Button>
        </div>
      </Form>
    </div>
  </>)
}

export default Formulario