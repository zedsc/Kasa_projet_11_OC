import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("When I'm on the home page", () => {
  it("should render a banner and footer", () => {
    render(<App />, { wrapper: BrowserRouter });
    const banner = screen.getByText(/Chez vous, partout et ailleurs/i);
    const footer = screen.getAllByText(/All rights reserved/i);
    expect(banner).toBeTruthy();
    expect(footer).toBeTruthy();
  });
  it("should redirect if wrong route", () => {
    const wrongRoute = "/some/bad/route";
    render(
      <MemoryRouter initialEntries={[wrongRoute]}>
        <App />
      </MemoryRouter>
    );
    const errorMsg = screen.getAllByText(
      /La page que vous demandez n'existe pas/i
    );

    expect(errorMsg).toBeTruthy();
  });
  it("should give access to About page", () => {
    render(<App />, { wrapper: BrowserRouter });
    const aboutPageLink = screen.getByTestId("about-test");
    expect(aboutPageLink.textContent).toBe("A propos");

    fireEvent.click(aboutPageLink);
    const contentAboutPage = screen.getAllByText(/Respect/i);
    expect(contentAboutPage).toBeTruthy();
  });
});
