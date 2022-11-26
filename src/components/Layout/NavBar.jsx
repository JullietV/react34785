import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar () {
  return (
    <div className='bg-[#F2FFFD] fixed w-full py-2 px-4'>
      <nav className='flex w-full items-center justify-between max-w-6xl mx-auto'>
        <h1 className='text-xl font-semibold'>
          <Link to="/">
            <img alt="Memento logo" src="/memento-logo.svg" />
          </Link>
        </h1>
        <ul className='flex gap-6'>
          <li>
            <Link to="/category/apoyo" className='text-green-500 hover:text-green-700'>Apoyo</Link>
          </li>
          <li>
            <Link to="/category/distraccion" className='text-green-500 hover:text-green-700'>Distracción</Link>
          </li>
          <li>
            <Link to="/category/diversion" className='text-green-500 hover:text-green-700'>Diversión</Link>
          </li>
          <li>
            <Link to="/category/buenas-noticias" className='text-green-500 hover:text-green-700'>Buenas noticias</Link>
          </li>
          <li>
            <Link to="/item/sorprendeme" className='text-green-500 hover:text-green-700'>Sorprendeme</Link>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;