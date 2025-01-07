import React from "react";
import { usePathname } from "next/navigation";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../components/Header";
import { Menu } from "../../data/interfaces";
import Icon from "../../data/enum";

// Mock usePathname hook
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockMenus: Menu[] = [
  { id: "1", title: "Home", link: "/", icon: Icon.HomeIcon },
  { id: "2", title: "About", link: "/about", icon: Icon.IdentificationIcon },
];

const usePathnameMock = usePathname as jest.Mock;

// Mock the HeroIcons component
jest.mock("../../components/Icons", () => ({
  __esModule: true,
  default: ({ icon }: { icon: string }) => (
    <div data-testid={`mock-icon-${icon}`} />
  ),
}));

describe("Header component", () => {
  test("renders Logo component", () => {
    usePathnameMock.mockReturnValue("/");
    render(<Header menus={mockMenus} />);
    const logo = screen.getByText("S");
    expect(logo).toBeInTheDocument();
  });

  test("renders menu items correctly", () => {
    usePathnameMock.mockReturnValue("/");
    render(<Header menus={mockMenus} />);

    mockMenus.forEach((menu) => {
      const linkElement = screen.getByRole("link", { name: menu.link });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", menu.link);
      const iconElement = screen.getByTestId(`mock-icon-${menu.icon}`);
      expect(iconElement).toBeInTheDocument();
    });
  });

  test("applies active class to current path", () => {
    usePathnameMock.mockReturnValue("/");
    render(<Header menus={mockMenus} />);

    const activeLink = screen.getByRole("link", { name: "home" });
    expect(activeLink).toHaveClass("active nav-link");

    const inactiveLink = screen.getByRole("link", { name: "about" });
    expect(inactiveLink).toHaveClass("nav-link");
    expect(inactiveLink).not.toHaveClass("active");
  });
});
