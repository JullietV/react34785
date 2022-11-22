function Button ({type, onClick, children, className}) {
  return (
    <button onClick={onClick} className={`btn-${type} ${className}`}> {children} </button>
  )
}

export default Button;