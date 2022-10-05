import { useState, useEffect } from "react"

const Formulario = ({ paciente, setPacientes }) => {
  const [nombre, setNombre] = useState("")
  const [Propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  //  Error en la validacion//
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validacion de formulario

    if ([nombre, Propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio")

      setError(true)
      return
    }
    setError(false)
    //Objetos de los pacientes//
    const objetoPaciente = {
      nombre,
      Propietario,
      email,
      fecha,
      sintomas,
    }
    // console.log(objetoPaciente)
    setPacientes([...paciente, objetoPaciente])

    //---- Reinicio de form-----//
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y{""}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && (
          <div className="bg-red-700 text-white text-center p-3 uppercase font-bold mb-5 rounded-md">
            <p> Todos los campos son obligatorios</p>
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="mascota" className="block font-black uppercase">
            Nombre Mascota:
          </label>

          <input
            type="text"
            id="mascota"
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Propietario" className="block font-black uppercase">
            Nombre Propietario:
          </label>

          <input
            type="text"
            id="Propietario"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block font-black uppercase">
            Email del Propietario:
          </label>

          <input
            type="email"
            id="email"
            placeholder="Email del Propíetario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block font-black uppercase">
            Alta
          </label>

          <input
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Sintomas" className="block font-black uppercase">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-colors"
          value="Agregar paciente"
        />
      </form>
    </div>
  )
}

export default Formulario
