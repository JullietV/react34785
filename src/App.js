import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/Layout/NavBar';
import { ContextProvider } from './storage/Context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <div className='pt-24 mx-auto max-w-6xl'>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
