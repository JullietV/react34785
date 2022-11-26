import { useState, createContext } from "react";

const Context = createContext();

export function ContextProvider (props) {
  const [cart, setCart] = useState([])
  
  function addToCart (item) {
    const index = cart.findIndex(x => x.id === item.id)
    let newCart = [...cart]

    if (index > -1) {
      if (newCart[index].stock >= newCart[index].count + item.count) {
        newCart[index].count = newCart[index].count + item.count
        setCart(newCart)
      }
    } else {
      newCart.push(item)
      setCart(newCart)
    }
  }
  
  function substractToCart (item) {
    const index = cart.findIndex(x => x.id === item.id)
    let newCart = [...cart]

    newCart[index].count = newCart[index].count - 1
    setCart(newCart)
  }

  function removeItem (id) {
    const index = cart.findIndex(x => x.id === id)
    let newCart = [...cart]

    if (index > -1) {
      newCart.splice(index, 1)
      setCart(newCart)
    }
  }

  function clearCart () {
    setCart([])
  }

  function isInCart (id) {
    const index = cart.findIndex(x => x.id === id)

    return index > -1
  }

  function calcSummary () {
    let subtotal = 0
    cart.forEach(item => {
      subtotal = subtotal + (item.count * item.price)
    })
    const delivery = 2000
    const iva = subtotal * 0.019
    const total = subtotal + delivery + iva

    return {
      subtotal,
      delivery,
      iva,
      total
    }
  }

  const value = {
    cart,
    addToCart,
    substractToCart,
    removeItem,
    clearCart,
    isInCart,
    calcSummary
  }
  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export default Context;