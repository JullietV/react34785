import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemFromAPI, getItemsFromAPI } from "../../services/firebase";
import Loader from "../commons/Loader";
import LoaderContainer from "../commons/LoaderContainer";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const {id} = useParams()

  const getItem = async () => {
    setIsLoading(true)
    if (id === 'sorprendeme') {
      const items = await getItemsFromAPI()
      const random = Math.floor((Math.random() * items.length));
      setItem(items[random])
    } else {
      const itemDB = await getItemFromAPI(id)
      setItem(itemDB)
      console.log(itemDB)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getItem()
  }, [])

  return (
    <>
      {isLoading ? 
      (<LoaderContainer>
        <Loader />
      </LoaderContainer>) : <ItemDetail item={item} /> }
    </>
  )
}