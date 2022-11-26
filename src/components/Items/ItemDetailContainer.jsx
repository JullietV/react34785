import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemFromAPI } from "../../services/firebase";
import Loader from "../commons/Loader";
import LoaderContainer from "../commons/LoaderContainer";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const {id} = useParams()

  const getItem = async () => {
    setIsLoading(true)
    const itemDB = await getItemFromAPI(id)
    setItem(itemDB)
    setIsLoading(false)
    console.log(itemDB)
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