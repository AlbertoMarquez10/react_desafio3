const Buscador = ({busqueda, setbusqueda, colaboradores, setColaboradores}) => {
  
  const funcionBuscar = (e)=>setbusqueda(e.target.value.toLowerCase())
  let resul =''
  const filtrar = colaboradores.filter((colaborador)=>{
    if (busqueda.trim()==='' ) {
      console.log('busqueda sin datos')
    }else if (colaborador.nombre.toLowerCase().includes(busqueda)) {
      resul=colaborador
      setColaboradores(resul)
    }
    
  })
  console.log(resul)
  return (
  <>
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" 
        placeholder="Search" aria-label="Search"
        value={busqueda}
        onChange={funcionBuscar}
        />
        
      </form>
    </>
  )
}

export default Buscador