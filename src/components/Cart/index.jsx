import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../storage/Context'
import Button from '../commons/Button'
import EmptyState from '../commons/EmptyState'
import ItemCart from './ItemCart'
import Summary from './Summary'

export default function Cart () {
  const { cart, substractToCart, addToCart, removeItem, calcSummary } = useContext(Context)

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
            <Summary summary={calcSummary} />
          </div>
        </>
      ) : (
        <EmptyState 
          img="/img/cat.png" 
          title="No hemos conseguido nada" 
          subtitle="El gato se durmió encima de los archivos" 
          textBtn="Volver al inicio"
          hrefBtn="/"
        />
      )}
    </div>
  </>)
}