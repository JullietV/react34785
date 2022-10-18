function Button ({type, children}) {
  return (
    <button className={type === 'primary' ? 'bg-green-500 text-white py-2 px-4 rounded-md' : 'bg-white text-green-500 py-2 px-4 rounded-md'}> {children} </button>
  )
}

export default Button;