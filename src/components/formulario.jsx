const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y{""}
        <span className="text-indigo-600 font-bold"> Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-5">
          <label htmlFor="mascota" className="block font-black uppercase">
            Nombre Mascota:
          </label>

          <input
            type="text"
            id="mascota"
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="mascota" className="block font-black uppercase">
            Nombre Mascota:
          </label>

          <input
            type="text"
            id="mascota"
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
