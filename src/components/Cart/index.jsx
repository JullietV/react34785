import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../storage/Context'
import Button from '../commons/Button'
import ItemCart from './ItemCart'
import Summary from './Summary'

export default function Cart () {
  const { cart, substractToCart, addToCart, removeItem } = useContext(Context)

  return (<>
    <div className="grid grid-cols-12 gap-4">
      
      {cart.length > 0 ? (
        <>
        <div className="col-span-12">
          <h2 className='text-2xl font-bold'>Carrito de compra</h2>
        </div>
          <div className="col-span-7">
            {cart.map(item => 
            <ItemCart 
              key={item.id} 
              item={item} 
              handleRemoveItem={removeItem} 
              handleAdd={addToCart}
              handleSubstract={substractToCart}
            />)}
          </div>
          <div className="col-span-5">
            <Summary cart={cart} />
          </div>
        </>
      ) : (<>
        <div className="flex flex-col justify-center items-center w-full col-span-12 mt-11">
          <img src="/img/empty-cart.png" alt="empty cart" className='block' />
          <h3 className='text-xl font-bold mt-4'>Aún no has añadido nada a tu carrito</h3>
          <Link to="/">
            <Button type="primary" className="mt-4">Ir a comprar</Button>
          </Link>
        </div>
      </>)}
    </div>
  </>)
}