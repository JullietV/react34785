import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProducts from './components/AddProducts';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
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
          <header className="App-header">
            <NavBar />
          </header>
          <main className='min-h-[75vh]'>
            <div className='pt-24 mx-auto max-w-6xl'>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/add-a-product" element={<AddProducts />} />
              </Routes>
            </div>
          </main>
        </BrowserRouter>
        <footer className='mt-14'>
          <div className='flex items-center justify-between max-w-7xl mx-auto relative h-[300px]'>
            <img className='w-full absolute bottom-0' alt="" src="/img/footer-bg.svg" />
            <img className='absolute bottom-14 right-[17%]' alt="dog with a lease in its mouth" src='/img/footer-dog.png' />
          </div>
        </footer>
      </ContextProvider>
    </div>
  );
}

export default App;
