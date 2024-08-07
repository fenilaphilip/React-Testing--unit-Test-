import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting"

test('renders Hello World as a Text', () => {

    render(<Greeting />);

    const element = screen.getByText('Hello World!');
    expect(element).toBeInTheDocument();

})