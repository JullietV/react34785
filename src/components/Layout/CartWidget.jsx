import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useContext } from "react"
import { Link } from "react-router-dom"
import Context from '../../storage/Context'

function CartWidget () {
  const { cart } = useContext(Context)

  return (
    <Link to="/cart">
      <button className="h-11 w-11 rounded-full flex items-center justify-center hover:bg-green-100 hover:text-green-500 relative">
        <ShoppingCartIcon className='h-6 w-6 absolute' />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-medium text-white">
            {cart.length}
          </span>
        )}
      </button>
    </Link>
  )
}

export default CartWidget