import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import CartWidget from './CartWidget';

function NavBar () {
  return (
    <div className='fixed w-full py-2 px-4'>
      <nav className='flex w-full items-center justify-between max-w-6xl mx-auto'>
        <h1 className='text-xl font-semibold'>Memento 💚</h1>
        <ul className='flex gap-6'>
          <li><a className='text-green-500 hover:text-green-700' href="#cat-1">Categoría 1</a></li>
          <li><a className='text-green-500 hover:text-green-700' href="#cat-2">Categoría 2</a></li>
          <li><a className='text-green-500 hover:text-green-700' href="#cat-3">Categoría 3</a></li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;