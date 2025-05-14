const Button = ({text, btnStyles, handleClick}) => {
  return (
    <button
      className={`btn ${btnStyles}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button