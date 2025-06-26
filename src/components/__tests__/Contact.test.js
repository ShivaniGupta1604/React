import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us pgae test cases", () => {

  beforeAll(() => {
    console.log("Before All: This will run at start");
  });

  beforeEach(() => {
    console.log("Before Each: This will run before each test case");
  });


  afterAll(() => {
    console.log("After All: This will run at the end");
  });

  afterEach(() => {
    console.log("After Each: This will run after each test case");
  });


  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load the button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load the button with text as Submit inside contact us component", () => {
    render(<Contact />);
    const buttonText = screen.getByText("Submit");

    expect(buttonText).toBeInTheDocument();
  });

  test("Should load 3 input boxes inside contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox"); //for multiple items
    //console.log("Input Boxes: ", inputBoxes); // returns JSX element

    expect(inputBoxes).toHaveLength(3);
  });
});
