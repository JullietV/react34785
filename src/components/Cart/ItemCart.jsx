import Button from '../commons/Button'
import CartItemCount from './CartItemCount';

function ItemCart ({item, handleRemoveItem, handleSubstract, handleAdd}) {
  const handleAddCount = () => {
    if (item.stock > item.count) handleAdd(item)
  }

  const handleSubstractCount = () => {
    if (item.count === 1) {
      handleRemoveItem(item.id)
    } else {
      handleSubstract(item)
    }
  }

  if (!item) return <></>

  return (
    <div className="relative bg-white border py-4 px-2 rounded-xl mt-8 pt-8">
      <div className="absolute -top-8 h-16 w-16 mb-4 flex items-center justify-center rounded-full bg-gray-200">
        <img className="h-14" src={item.pictureUrl} alt={item.title} />
      </div>
      <div className="flex justify-between mb-2">
        <h4 className='font-semibold text-lg'>{item.title}</h4>
        <h4 className='font-semibold text-[#E24122]'>$ {item.price}</h4>
      </div>
      <p className='mb-2'>{item.description}</p>
      {item.features && item.features.map(feature => (
        <span key={`${item.id}${feature}`} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
          {feature}
        </span>)
      )}
      
      <div className='flex justify-between items-center w-full mt-4'>
        <CartItemCount 
          stock={item.stock} 
          count={item.count} 
          handleAddCount={handleAddCount} 
          handleSubstractCount={handleSubstractCount} 
        />
        
        <Button onClick={() => handleRemoveItem(item.id)} className="w-full" type="text">Eliminar del carrito</Button>
      </div>
    </div>
  )
}

export default ItemCart;