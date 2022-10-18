import { ShoppingCartIcon } from "@heroicons/react/24/outline"

function CartWidget () {
  return (
    <button className="h-11 w-11 rounded-full flex items-center justify-center hover:bg-green-100 hover:text-green-500">
      <ShoppingCartIcon className='h-6 w-6' />
    </button>
  )
}

export default CartWidget