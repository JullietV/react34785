import Button from './components/commons/Button';
import ItemListContainer from './components/commons/ItemListContainer';
import NavBar from './components/Layout/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='pt-24 mx-auto max-w-6xl'>
        <ItemListContainer greeting="¡Hola! ¿Qué necesitas hoy? ✨" />
      </div>
    </div>
  );
}

export default App;
