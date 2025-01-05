import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileMenu from "../../components/MobileMenu";

jest.mock("@heroicons/react/outline", () => ({
  MenuIcon: () => <svg data-testid='menu-icon' />,
}));

describe("MobileMenu component", () => {
  test("renders the mobile menu with a toggle button", () => {
    render(<MobileMenu />);

    const toggleMenu = screen.getByTestId("menu-icon");
    expect(toggleMenu).toBeInTheDocument();
  });
});
