const Paciente = ({ paciente }) => {
  const { nombre, Propietario, email, fecha, sintomas } = paciente

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
      </div>
    </div>
  )
}

export default Paciente
