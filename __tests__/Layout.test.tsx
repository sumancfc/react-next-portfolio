import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "../app/layout";

jest.mock("../components/Header", () => () => <div data-testid='header' />);
jest.mock("../components/Footer", () => () => <div data-testid='footer' />);
jest.mock("../components/MobileMenu", () => () => (
  <div data-testid='mobile-menu' />
));
jest.mock("../data/menus", () => []);

describe("Root Layout component", () => {
  test("renders the RootLayout with Header, Footer, and MobileMenu components and children", () => {
    const childrenText = "Sample Children";
    render(<RootLayout>{childrenText}</RootLayout>);

    const header = screen.getByTestId("header");
    const footer = screen.getByTestId("footer");
    const mobileMenu = screen.getByTestId("mobile-menu");
    const children = screen.getByText(childrenText);

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(mobileMenu).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
