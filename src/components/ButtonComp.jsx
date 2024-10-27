const ButtonComp = ({ text, onclick, className }) => {
	const handleClick = (e) => {
		onclick(e)
	}
	return (
		<button className={`btn ${className}`} onClick={handleClick}>
			{text}
		</button>
	)
}

export default ButtonComp
