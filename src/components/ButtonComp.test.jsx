import { render, screen, fireEvent } from "@testing-library/react"
import ButtonComp from "./ButtonComp"

describe("ButtonComp", () => {
	test("renders button with provided text", () => {
		render(<ButtonComp text="Click me" onclick={() => {}} />)
		const button = screen.getByRole("button", { name: "Click me" })
		expect(button).toBeInTheDocument()
	})

	test("calls onclick function when button is clicked", () => {
		const handleClick = jest.fn() // Mock function to track clicks
		render(<ButtonComp text="Click me" onclick={handleClick} />)

		const button = screen.getByRole("button", { name: "Click me" })
		fireEvent.click(button)

		expect(handleClick).toHaveBeenCalledTimes(1) // Verify function is called once
	})
})
