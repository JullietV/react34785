import { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import Loader from '../commons/Loader';
import LoaderContainer from '../commons/LoaderContainer';
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase';
import EmptyState from '../commons/EmptyState';

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
      if (itemsDB && itemsDB.length) setGreeting(itemsDB[0].category)
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

  if (isLoading) return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  )

  return (
    <>
      {items && items.length ? 
      <ItemList greeting={greeting} items={items} /> : (
        <EmptyState 
          img="/img/cat.png" 
          title="No hemos conseguido nada" 
          subtitle="El gato se durmió encima de los archivos" 
          textBtn="Volver al inicio"
          hrefBtn="/"
        />
      )
      }
    </>
  )
}