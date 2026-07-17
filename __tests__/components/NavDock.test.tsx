import React from "react";
import { usePathname } from "next/navigation";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavDock from "../../components/NavDock";
import { Menu } from "../../data/interfaces";
import Icon from "../../data/enum";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockMenus: Menu[] = [
  { id: "1", title: "Home", link: "/", icon: Icon.HomeIcon },
  { id: "2", title: "About", link: "/about", icon: Icon.IdentificationIcon },
];

const usePathnameMock = usePathname as jest.Mock;

jest.mock("../../components/Icons", () => ({
  __esModule: true,
  default: ({ icon }: { icon: string }) => (
    <div data-testid={`mock-icon-${icon}`} />
  ),
}));

describe("NavDock component", () => {
  test("renders a dock item for every menu entry", () => {
    usePathnameMock.mockReturnValue("/");
    render(<NavDock menus={mockMenus} />);

    mockMenus.forEach((menu) => {
      const linkElement = screen.getByRole("link", { name: menu.title });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", menu.link);
      expect(screen.getByText(menu.title)).toBeInTheDocument();
      expect(screen.getByTestId(`mock-icon-${menu.icon}`)).toBeInTheDocument();
    });
  });

  test("marks the item matching the current path as active", () => {
    usePathnameMock.mockReturnValue("/");
    render(<NavDock menus={mockMenus} />);

    const activeLink = screen.getByRole("link", { name: "Home" });
    expect(activeLink).toHaveClass("dock-item active");
    expect(activeLink).toHaveAttribute("aria-current", "page");

    const inactiveLink = screen.getByRole("link", { name: "About" });
    expect(inactiveLink).toHaveClass("dock-item");
    expect(inactiveLink).not.toHaveClass("active");
    expect(inactiveLink).not.toHaveAttribute("aria-current");
  });

  test("marks no item active when the path matches none of the menus", () => {
    usePathnameMock.mockReturnValue("/unknown");
    render(<NavDock menus={mockMenus} />);

    mockMenus.forEach((menu) => {
      const link = screen.getByRole("link", { name: menu.title });
      expect(link).not.toHaveClass("active");
      expect(link).not.toHaveAttribute("aria-current");
    });
  });
});
