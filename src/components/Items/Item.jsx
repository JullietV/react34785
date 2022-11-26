import Button from '../commons/Button'
import { HeartIcon } from "@heroicons/react/24/outline"
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid"
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Item ({item}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="relative bg-white border py-4 px-2 rounded-xl mt-8 pt-8">
      <div className="absolute -top-8 h-16 w-16 mb-4 flex items-center justify-center rounded-full bg-gray-200">
        <img className="h-14" src={`/categories/${item.category}.png`} alt={item.title} />
      </div>
      <div className="flex justify-between mb-2">
        <h4 className='font-semibold text-lg'>{item.title}</h4>
        <div onClick={handleFavorite} className="rounded-full h-8 w-8 hover:bg-gray-100 hover:cursor-pointer flex justify-center items-center">
          {isFavorite 
            ? <HeartIconSolid className='h-6 w-6' /> 
            : <HeartIcon className='h-6 w-6' />
          }
        </div>
      </div>
      <p className='mb-2'>{item.description}</p>
      {item.features && item.features.map(feature => (
        <span key={`${item.id}${feature}`} className="inline-flex mr-2 items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
          {feature}
        </span>)
      )}
      
      <div className='flex justify-between items-center w-full mt-4'>
        <h4 className='font-semibold'>$ {item.price}</h4>
        <Link to={`/item/${item.id}`}>
          <Button type="primary">Ver más!</Button>
        </Link>
      </div>
    </div>
  )
}

export default Item;