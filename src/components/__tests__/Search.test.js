import Body from "../Body";
import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

//in body we have a fetch call, whihc gives error- [ReferenceError: fetch is not defined] when running tests to fix that we'll create a dummy fetch function here with sane logic
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should reneder the search button inside body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByRole("button", {name: "Search"});
  //console.log(searchButton);
  expect(searchButton).toBeInTheDocument();
});


it("should be able to search restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const totalCards = screen.getAllByTestId("resCard")
  
    expect(totalCards.length).toBe(20);

    const searchButton = screen.getByRole("button", {name: "Search"});

    const searchInput=screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target:{value: "pizza"}})

    fireEvent.click(searchButton);
    
    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(3);
  });
  

  it("should filter top rated restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const totalCards = screen.getAllByTestId("resCard")
  
    expect(totalCards.length).toBe(20);

    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedButton);
    
    const topRatedCards = screen.getAllByTestId("resCard")

    expect(topRatedCards.length).toBe(18);
  });