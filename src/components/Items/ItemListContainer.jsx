import { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import getItemsFromAPI from '../../mockService'

export default function ItemListContainer () {
  const [items, setItems] = useState([])

  const getItems = async () => {
    const itemsDB = await getItemsFromAPI()
    console.log(itemsDB)
    setItems(itemsDB)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <ItemList items={items} />
    </>
  )
}