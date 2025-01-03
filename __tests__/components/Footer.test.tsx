import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../../components/Footer";

// Mock the SocialIcons component
jest.mock("../../components/SocialIcons", () => ({
  __esModule: true,
  default: () => <div data-testid='mock-social-icons' />,
}));

describe("Footer component", () => {
  test("renders SocialIcons component", () => {
    render(<Footer />);
    const socialIcons = screen.getByTestId("mock-social-icons");
    expect(socialIcons).toBeInTheDocument();
  });

  test("renders copyright text correctly", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    const copyrightElement = screen.getByTestId("copyright");
    expect(copyrightElement.textContent).toContain(currentYear);
    expect(copyrightElement.textContent).toContain("Suman Shrestha");
    expect(copyrightElement.textContent).toContain("All right reserved");
  });

  test("renders Link component correctly", () => {
    render(<Footer />);
    const linkElement = screen.getByTestId("copyright-link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
