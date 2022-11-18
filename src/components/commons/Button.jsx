function Button ({type, onClick, children}) {
  return (
    <button onClick={onClick} className={`btn-${type}`}> {children} </button>
  )
}

export default Button;