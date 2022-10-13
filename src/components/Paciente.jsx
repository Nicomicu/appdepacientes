const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, Propietario, email, fecha, sintomas, id } = paciente

  // funcion de alerta (eliminar si aceptas)
  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente")
    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div>
      <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold text-black mb-3 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold text-black mb-3 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{Propietario}</span>
        </p>
        <p className="font-bold text-black mb-3 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold text-black mb-3 uppercase">
          Fecha del Alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold text-black mb-3 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-center mt-10 space-x-5">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            onClick={() => setPaciente(paciente)}>
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-md"
            onClick={handleEliminar}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Paciente
