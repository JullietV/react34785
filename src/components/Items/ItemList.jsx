import Item from "./Item";

function ItemList ({items}) {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        {items.map((item) => <Item key={item.id} item={item} />)}
      </div>
      
    </div>
  )
}

export default ItemList;