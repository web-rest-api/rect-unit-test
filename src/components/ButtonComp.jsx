const ButtonComp = ({ text, onclick }) => {
	const handleClick = (e) => {
		onclick(e)
	}
	return <button onClick={handleClick}>{text}</button>
}

export default ButtonComp
