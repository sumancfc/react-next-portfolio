import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../app/page";

function MockHero() {
  return <div data-testid="hero" />;
}
function MockLayout({ children }: { children: React.ReactNode }) {
  return <div data-testid="layout">{children}</div>;
}

jest.mock("../components/Hero", () => MockHero);
jest.mock("../components/Layout", () => MockLayout);

describe("Home Page", () => {
  test("renders the Hero inside the shared Layout", () => {
    render(<HomePage />);

    expect(screen.getByTestId("layout")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
  });

  test("renders the home section with its id, for the fixed-viewport CSS to target", () => {
    const { container } = render(<HomePage />);
    expect(container.querySelector("section.home-section#home")).toBeInTheDocument();
  });
});
