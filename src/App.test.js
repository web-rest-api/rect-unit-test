import { render, screen } from "@testing-library/react"
import App from "./App"
import logo from "./logo.svg" // Adjust if your logo is located elsewhere

test("renders the logo image", () => {
	render(<App />)
	// Check if the image with class "App-logo" and alt text "logo" is in the document
	const logoImage = screen.getByAltText("logo")
	expect(logoImage).toBeInTheDocument()
	expect(logoImage).toHaveClass("App-logo")
	expect(logoImage).toHaveAttribute("src", logo)
})

test("the paragraph shows the correct text prop passed", () => {
	render(<App />)
	// select the paragraph
	const paragraph = screen.getByTestId("paragraph-element")
	expect(paragraph).toBeInTheDocument()
})
