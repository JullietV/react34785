import { useState } from "react"
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { createBuyOrderData } from "../../services/firebase"
import Context from '../../storage/Context'
import Button from "../commons/Button"

export default function Checkout () {
  const { cart, calcSummary, clearCart } = useContext(Context)
  const [fbOrder, setFbOrder] = useState(null)
  const [buyer, setBuyer] = useState(
    {
      name: '',
      phone: '',
      email: ''
    }
  )

  const createBuyOrder = async () => {
    const payload = {
      buyer,
      items: cart,
      total: calcSummary().total,
      date: new Date()
    }

    const order = await createBuyOrderData(payload)

    if (order.id) {
      setFbOrder(order)
      clearCart()
    }
  }

  const handleOnChange = (e) => {
    const {value, name} = e.target

    setBuyer({
      ...buyer,
      [name]: value
    })
  }

  return (<>
    <div className="w-full h-[75vh] flex items-center justify-center">
      <div className="min-w-[500px] bg-white px-6 py-8 rounded-xl flex flex-col justify-center items-center gap-4 border">
        {
          !fbOrder 
          ? (
            <div className="w-full">
              <h2 className="text-lg font-medium text-gray-900">Información de contacto</h2>
              <div className="my-4">
                <div className="mt-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre completo
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ej: Juanin Juan Harris"
                      className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <div className="mt-1">
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      autoComplete="phone"
                      placeholder="Ej: +559999999"
                      className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Ej: mail@mail.com"
                      className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
              </div>
              <Button type="primary" onClick={createBuyOrder} className="w-full">Comprar</Button>
            </div>
          ) 
          : (
            <>
              <img src="/img/happy.png" alt="A cheerful boy playing" />
              <h2 className="text-xl font-bold">Gracias por tu compra!</h2>
              <p>El identificador de tu orden es: <strong>{fbOrder.id}</strong>  </p>
              <Link to="/">
                <Button className="w-full" type="primary">Volver al inicio</Button>
              </Link>
            </>
          )
        }
      </div>
    </div>
  </>)
}