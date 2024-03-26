const Button = ({ className = '', onClick, children }) => {
  return (
    <button
      className={`border rounded-md px-2 py-1 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
