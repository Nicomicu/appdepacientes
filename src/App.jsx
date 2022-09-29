import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadosPacientes from "./components/ListadosPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadosPacientes />
      </div>
    </div>
  );
}

export default App;
