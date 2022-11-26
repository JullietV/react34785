import { useEffect, useState } from 'react';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import Loader from '../commons/Loader';
import LoaderContainer from '../commons/LoaderContainer';
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase';

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
      <ItemList greeting={greeting} items={items} /> : 
      <div className='w-full min-h-[75vh] flex flex-col justify-center items-center'>
        <img src="/img/cat.png" alt="A cute cat" />
        <h2 className='text-xl font-bold'>No hemos conseguido nada</h2>
        <p>El gato se durmió encima de los archivos</p>
      </div>}
    </>
  )
}