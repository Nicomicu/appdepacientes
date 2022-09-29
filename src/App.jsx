import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadosPacientes from "./components/ListadosPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListadosPacientes />
    </div>
  );
}

export default App;
