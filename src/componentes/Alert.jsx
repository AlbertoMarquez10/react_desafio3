const Alert = ({ContenidoMensajeEstado}) => {
  return (
    <div className={`alert alert-${ContenidoMensajeEstado.color} text-center`}         role="alert">
      {ContenidoMensajeEstado.mensaje}
    </div>
  )
}

export default Alert