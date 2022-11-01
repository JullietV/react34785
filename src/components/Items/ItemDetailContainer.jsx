import { useEffect, useState } from "react";
import { getItemFromAPI } from "../../mockService";
import Loader from "../commons/Loader";
import LoaderContainer from "../commons/LoaderContainer";
import Item from "./Item";

export default function ItemDetailContainer () {
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getItem = async () => {
    setIsLoading(true)
    const itemDB = await getItemFromAPI(1)
    console.log({itemDB})
    setItem(itemDB)
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
      </LoaderContainer>) : <Item item={item} /> }
    </>
  )
}