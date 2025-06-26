import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../Mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should RestaurantCard component with props data", () => {

    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name= screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
})
