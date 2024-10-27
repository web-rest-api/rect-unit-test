import logo from "./logo.svg"
import "./App.css"
import ButtonComp from "./components/ButtonComp"
import ResultComp from "./components/ResultComp.jsx"
import { useState } from "react"

function App({ appText }) {
	const [result, setResult] = useState(0)
	const addFn = (e) => {
		setResult((prev) => prev + 1)
	}
	const restFn = (e) => {
		setResult((prev) => prev - 1)
	}
	const resetFn = (e) => {
		setResult(() => 0)
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p data-testid="paragraph-element">{appText}</p>
				<ResultComp result={result}></ResultComp>
				<div className="button-container">
					<ButtonComp onclick={addFn} text="Add"></ButtonComp>
					<ButtonComp onclick={restFn} text="Rest"></ButtonComp>
					<ButtonComp onclick={resetFn} text="Reset"></ButtonComp>
				</div>
			</header>
		</div>
	)
}

export default App
