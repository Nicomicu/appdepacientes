import Paciente from "./Paciente"

const ListadosPacientes = ({ paciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center"> Listado Pacientes </h2>
      <p className="text-xl mt-5 mb-5 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold text-xl">
          Pacientes y Citas
        </span>
      </p>

      {paciente.map((paciente) => (
        <Paciente key={paciente.id} paciente={paciente} />
      ))}
    </div>
  )
}
export default ListadosPacientes
