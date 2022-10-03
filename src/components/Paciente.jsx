const Paciente = () => {
  return (
    <div>
      <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold text-black mb-3 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold text-black mb-3 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">Nico</span>
        </p>
        <p className="font-bold text-black mb-3 uppercase">
          Email: {""}
          <span className="font-normal normal-case">Correo@gmail.com</span>
        </p>
        <p className="font-bold text-black mb-3 uppercase">
          Fecha del Alta: {""}
          <span className="font-normal normal-case">
            10 de Diciembre de 2022
          </span>
        </p>
        <p className="font-bold text-black mb-3 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">Sintomas del Paciente</span>
        </p>
      </div>
    </div>
  )
}

export default Paciente
