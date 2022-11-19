import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../commons/Button";
import ItemCount from "./ItemCount";

import Context from '../../storage/Context'

export default function ItemDetail ({item}) {
  const { cart, addToCart } = useContext(Context)
  const [ isInCart, setIsInCart ] = useState(false)

  const handleOnAdd = (count) => {
    const payload = {
      ...item,
      count
    }
    
    addToCart(payload)
    setIsInCart(true)
  }

  return (<>
    <div className="grid grid-cols-12 grid-rows-7 gap-4">
      <div className="col-span-5 row-span-5">
        <h2 className="text-2xl font-bold mb-12">{item.title}</h2>
        <div className="relative bg-white border py-4 px-2 rounded-xl mt-8 pt-8">
          <div className="absolute -top-8 h-16 w-16 mb-4 flex items-center justify-center rounded-full bg-gray-200">
            <img className="h-14" src={item.pictureUrl} alt={item.title} />
          </div>
          <div className="flex justify-between mb-2">
            <h4 className='font-semibold text-md'>{item.category}</h4>
            <h4 className='font-semibold text-[#E24122]'>$ {item.price}</h4>
          </div>
          <p className='mb-2'>{item.description}</p>
          {item.features && item.features.map(feature => (
            <span key={`${item.id}${feature}`} className="inline-flex items-center mr-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
              {feature}
            </span>)
          )}
          
          {
            !isInCart
            ? (<ItemCount stock={item.stock} onAdd={handleOnAdd} />)
            : (<div className="flex justify-between mt-4">
                <Link to="/"><Button type="text">Seguir comprando</Button></Link>
                <Link to="/cart"><Button type="primary">Ir al carrito</Button></Link>
              </div>)
          }
        </div>
      </div>
      <div className="col-span-3 row-span-5 overflow-hidden rounded-xl">
        <img src="/img/anne1.png" alt="Anne with an E" className="w-full h-full" />
      </div>
      <div className="col-span-4 row-span-5 overflow-hidden rounded-xl">
        <img src="/img/ann2.png" alt="Anne with an E" className="w-full h-full" />
      </div>
      <div className="col-span-5 row-span-2"></div>
      <div className="col-span-3 row-span-2 overflow-hidden rounded-xl">
        <img src="/img/anne3.png" alt="Anne with an E" className="w-full h-full" />
      </div>
      <div className="col-span-4 row-span-2 overflow-hidden rounded-xl">
        <img src="/img/anne4.png" alt="Anne with an E" className="w-full h-full" />
      </div>
    </div>
  </>)
}