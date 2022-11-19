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

  const value = {
    cart,
    addToCart,
    removeItem,
    clearCart,
    isInCart
  }
  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export default Context;