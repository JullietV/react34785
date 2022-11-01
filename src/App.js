import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/Layout/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='pt-24 mx-auto max-w-6xl'>
        <ItemListContainer />
      </div>
      
    </div>
  );
}

export default App;
