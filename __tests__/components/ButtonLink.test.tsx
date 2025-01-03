import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonLink from "../../components/ButtonLink";
import Icon from "../../data/enum";

// Mock the HeroIcons component
jest.mock("../../components/Icons", () => ({
  __esModule: true,
  default: ({ icon }: { icon: Icon }) => (
    <div data-testid={`mock-icon-${icon}`} />
  ),
}));

describe("ButtonLink component", () => {
  test("renders link with correct text and icon", () => {
    render(
      <ButtonLink textTitle='Click Me' icon={Icon.HomeIcon} link='/some-link' />
    );

    const linkElement = screen.getByRole("link", { name: /click me/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/some-link");

    const iconElement = screen.getByTestId("mock-icon-HomeIcon");
    expect(iconElement).toBeInTheDocument();
  });

  test("applies correct CSS classes", () => {
    render(
      <ButtonLink
        textTitle='Click Me'
        icon={Icon.DesktopComputerIcon}
        link='/some-link'
      />
    );

    const linkElement = screen.getByRole("link", { name: /click me/i });
    expect(linkElement).toHaveClass("btn d-flex justify-center align-center");
  });
});
