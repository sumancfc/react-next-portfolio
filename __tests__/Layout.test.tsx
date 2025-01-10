{
  /*import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "../app/layout";

jest.mock("../components/Header", () => () => <div data-testid='header' />);
jest.mock("../components/Index", () => () => <div data-testid='footer' />);
jest.mock("../components/MobileMenu", () => () => (
  <div data-testid='mobile-menu' />
));
jest.mock("../data/menus", () => []);

describe("RootLayout component", () => {
  test("renders the RootLayout contents with Header, Index, MobileMenu components and children", () => {
    const childrenText = "Sample Children";
    const { RootLayout: LayoutContents } = RootLayout({
      children: childrenText,
    }) as any;

    render(<LayoutContents />);

    const pageWrapper = screen.getByTestId("page-wrapper");
    expect(pageWrapper).toBeInTheDocument();

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
*/
}
