import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../app/page";

jest.mock("../components/BackgroundImage", () => () => (
  <div data-testid='background-image' />
));
jest.mock("../components/Hero", () => () => <div data-testid='hero' />);
jest.mock("../components/TopHeader", () => () => (
  <div data-testid='top-header' />
));

describe("Home Page Component", () => {
  test("renders the HomePage with TopHeader, Hero, and BackgroundImage components", () => {
    render(<HomePage />);

    const topHeader = screen.getByTestId("top-header");
    const hero = screen.getByTestId("hero");
    const backgroundImage = screen.getByTestId("background-image");

    expect(topHeader).toBeInTheDocument();
    expect(hero).toBeInTheDocument();
    expect(backgroundImage).toBeInTheDocument();
  });
});
