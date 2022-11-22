import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../commons/Button";

export default function CartItemCount ({count, handleAddCount, handleSubstractCount}) {


  return (
    <div className='flex justify-between items-center mt-4'>
      <div>
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
    </div>
  )
}