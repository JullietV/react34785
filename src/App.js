import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './components/404';
import AddProducts from './components/AddProducts';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import EmptyState from './components/commons/EmptyState';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import Landing from './components/landing';
import NavBar from './components/Layout/NavBar';
import { ContextProvider } from './storage/Context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <header className="App-header hidden lg:block">
            <NavBar />
          </header>
          <main className='min-h-[75vh] hidden lg:block'>
            <div className='pt-24 mx-auto max-w-6xl'>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/add-a-product" element={<AddProducts />} />

                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
        <footer className='mt-14 hidden lg:block'>
          <div className='flex items-center justify-between max-w-7xl mx-auto relative h-[300px]'>
            <img className='w-full absolute bottom-0' alt="" src="/img/footer-bg.svg" />
            <img className='absolute bottom-14 right-[17%]' alt="dog with a lease in its mouth" src='/img/footer-dog.png' />
            <p className='absolute w-full bottom-2 text-center font-bold'>Hecho con 💕 por Jénnifer Villalobos</p>
          </div>
        </footer>
        <div className='block lg:hidden'>
          <EmptyState 
            img="/img/sitting-empty.png" 
            title="¡Visualizame en tu compu!"
            subtitle="Actualmente Memento no está optimizado para visualizarse en dispositivos móviles"
          />
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;
