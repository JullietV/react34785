import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../commons/Button";

export default function ItemCount ({stock, onAdd}) {
  const [count, setCount] = useState(stock > 0 ? 1 : 0)

  const handleAddCount = () => {
    if (stock > 0 && stock > count + 1)setCount(count + 1)
  }

  const handleSubstractCount = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className='flex justify-between items-center w-full mt-4'>
      <div className="w-3/6">
        <div className="flex gap-2">
          <Button onClick={handleSubstractCount} type="icon">
            <MinusIcon className="h-4 w-4" />
          </Button>
          <input
            type="text"
            name="counterInput"
            id="counterInput"
            className="block w-full py-2 px-4 rounded-full border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-center"
            value={count}
            readOnly
          />
          <Button onClick={handleAddCount} type="icon">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Button onClick={() => onAdd(count)} type="primary">Añadir al carrito</Button>
    </div>
  )
}