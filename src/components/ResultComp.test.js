import { render, screen } from "@testing-library/react"
import ResultComp from "./ResultComp"

describe("ResultComp", () => {
	test("renders component with result text", () => {
		render(<ResultComp result="Test Result" />)
		const resultDiv = screen.getByText("Test Result")
		expect(resultDiv).toBeInTheDocument()
	})

	test("renders number correctly when result is a number", () => {
		render(<ResultComp result={42} />)
		const resultDiv = screen.getByText("42")
		expect(resultDiv).toBeInTheDocument()
	})
})
