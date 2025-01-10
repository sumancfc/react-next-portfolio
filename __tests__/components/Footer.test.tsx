import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "../../components/Footer";

// Mock the SocialIcons component
jest.mock("../../components/SocialIcons", () => ({
  __esModule: true,
  default: () => <div data-testid='mock-social-icons' />,
}));

describe("Index component", () => {
  test("renders SocialIcons component", () => {
    render(<Index />);
    const socialIcons = screen.getByTestId("mock-social-icons");
    expect(socialIcons).toBeInTheDocument();
  });

  test("renders copyright text correctly", () => {
    render(<Index />);
    const currentYear = new Date().getFullYear().toString();
    const copyrightElement = screen.getByTestId("copyright");
    expect(copyrightElement.textContent).toContain(currentYear);
    expect(copyrightElement.textContent).toContain("Suman Shrestha");
    expect(copyrightElement.textContent).toContain("All right reserved");
  });

  test("renders Link component correctly", () => {
    render(<Index />);
    const linkElement = screen.getByTestId("copyright-link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
