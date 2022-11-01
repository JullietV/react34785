import { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import { getItemsFromAPIByCategory, getItemsFromAPI } from '../../mockService'
import { useParams } from 'react-router-dom';
import Loader from '../commons/Loader';
import LoaderContainer from '../commons/LoaderContainer';

export default function ItemListContainer () {
  const [items, setItems] = useState([])
  const [greeting, setGreeting] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams();

  const getItems = async () => {
    setIsLoading(true)
    let itemsDB = []

    if (id) {
      itemsDB = await getItemsFromAPIByCategory(id)
      setGreeting(itemsDB[0].category)
    } else {
      itemsDB = await getItemsFromAPI()
      setGreeting('Favoritos del mes')
    }

    setIsLoading(false)
    setItems(itemsDB)
  }

  useEffect(() => {
    getItems()
  }, [id])

  return (
    <>
      {isLoading ? 
      (<LoaderContainer>
        <Loader />
      </LoaderContainer>) : <ItemList greeting={greeting} items={items} />}
    </>
  )
}