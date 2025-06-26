import Header from "../Header";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../Utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>

  );
  //1st way to get login button
  //const loginButton = screen.getByRole("button")

  //2nd way to do the same but text is not a good way so use role
  //const loginButton = screen.getByText("Login")

  //3rd way to get button with name Login
  const loginButton = screen.getByRole("button",{name: "Login"})

  expect(loginButton).toBeInTheDocument();
});

it("Should load header component with cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
  
    );

    const cartitem = screen.getByText(/Cart/);
  
    expect(cartitem).toBeInTheDocument();
  });


it("Should change from login to logout on button click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>

  );

  const loginButton = screen.getByRole("button",{name: "Login"});

  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole("button",{name: "Logout"});

  expect(logoutButton).toBeInTheDocument();
});
  
