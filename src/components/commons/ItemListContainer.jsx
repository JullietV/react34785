import Item from "./Item";

function ItemListContainer ({greeting}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">{ greeting }</h2>
    </div>
  )
}

export default ItemListContainer;