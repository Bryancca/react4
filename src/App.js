import './App.css';
import Componente1 from './Componentes/componente1';
import Componente2 from './Componentes/Componente2';
import Componente3 from './Componentes/Footer';
import Componente4 from './Componentes/Galeria1' ;
// import Componente5 from './Componentes/Componente5';
function App() {
  return (
    <div class="container p-3 my-3">
      
      <header class="row bg-success p-3">
      <Componente1/>  
      </header>

      <nav class="navbar navbar-expand-lg navbar-dark row bg-danger">
      <Componente2/>  
      </nav>

      <nav class="col-md bg-primaary">
      <Componente4/>  
      </nav>
      
      <nav class="row bg-dark p-3">
      <Componente3/>  
      </nav>

      

    </div>
  );
}

export default App;
