function Item ({title, detail, img, price}) {
  return (
    <div className="border py-4 px-2">
      <img className="h-24 mx-auto mb-4" src={img} alt={title} />
      <h3>{title}</h3>
      <p>{detail}</p>
      <h4>$ {price}</h4>
    </div>
  )
}

export default Item;