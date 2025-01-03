import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Services from "../../components/Services";
import services from "../../data/services";

// Mock the HeroIcons component
jest.mock("../../components/Icons", () => ({
  __esModule: true,
  default: ({ icon }: { icon: string }) => (
    <div data-testid={`mock-icon-${icon}`} />
  ),
}));

// Mock the services data
jest.mock("../../data/services", () => [
  {
    id: 1,
    icon: "code",
    title: "Web Development",
    description: "I can build your website",
  },
  {
    id: 2,
    icon: "design",
    title: "Web Design",
    description: "I can design your website",
  },
]);

describe("Services Component", () => {
  beforeEach(() => {
    render(<Services />);
  });

  test("renders the main title correctly", () => {
    const mainTitle = screen.getByRole("heading", { name: /what i do\?/i });
    expect(mainTitle).toBeInTheDocument();
  });

  test("renders correct number of service items", () => {
    const serviceItems = screen.getAllByTestId(/^mock-icon-/);
    expect(serviceItems).toHaveLength(services.length);
  });

  test("renders service titles correctly", () => {
    services.forEach((service) => {
      const title = screen.getByRole("heading", { name: service.title });
      expect(title).toBeInTheDocument();
    });
  });

  test("renders service descriptions correctly", () => {
    services.forEach((service) => {
      const description = screen.getByText(service.description);
      expect(description).toBeInTheDocument();
    });
  });

  test("renders HeroIcons with correct icons", () => {
    services.forEach((service) => {
      const icon = screen.getByTestId(`mock-icon-${service.icon}`);
      expect(icon).toBeInTheDocument();
    });
  });

  test("service items have correct CSS classes", () => {
    const serviceItems = screen.getAllByTestId(/^mock-icon-/);
    serviceItems.forEach((item) => {
      expect(item.closest(".service-items")).toBeInTheDocument();
      expect(item.closest(".service-item")).toBeInTheDocument();
    });
  });

  test("renders correct structure", () => {
    const mainContainer = screen
      .getByRole("heading", { name: /what i do\?/i })
      .closest(".row");
    expect(mainContainer).toBeInTheDocument();

    const servicesContainer = screen
      .getAllByTestId(/^mock-icon-/)[0]
      .closest(".row");
    expect(servicesContainer).toBeInTheDocument();
  });
});
