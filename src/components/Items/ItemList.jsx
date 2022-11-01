import Item from "./Item";

function ItemList ({items, greeting}) {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-6">{greeting}</h3>
      <div className='grid grid-cols-3 gap-4'>
        {items.map((item) => <Item key={item.id} item={item} />)}
      </div>
      
    </div>
  )
}

export default ItemList;