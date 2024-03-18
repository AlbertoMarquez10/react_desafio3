import Table from 'react-bootstrap/Table'
const Listado = ({colaboradores}) => {
  //console.log(colaboradores)
  return(<>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>correo</th>
            <th>edad</th>
            <th>cargo</th>
            <th>telefono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.length > 0 ? 
          colaboradores.map(colaborador=>
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
          </tr>
            ) : 
          <h2>No hay registro de usuarios en la base</h2>}
        </tbody>
      </Table>
    
    </>)
}

export default Listado