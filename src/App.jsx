import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadosPacientes from "./components/ListadosPacientes"

function App() {
  const [paciente, setPacientes] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario paciente={paciente} setPacientes={setPacientes} />
        <ListadosPacientes />
      </div>
    </div>
  )
}

export default App
