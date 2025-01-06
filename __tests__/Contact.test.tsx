import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactPage from "../app/contact/page";

jest.mock("../components/Icons", () => ({
  __esModule: true,
  default: ({ icon }: { icon: string }) => (
    <div data-testid={`mock-icon-${icon}`} />
  ),
}));

jest.mock("../data/contacts", () => [
  { id: 1, icon: "icon1", information: "info1" },
  { id: 2, icon: "icon2", information: "info2" },
]);

describe("Contact Page Component", () => {
  test("renders the ContactPage with contact information and form", () => {
    render(<ContactPage />);

    expect(
      screen.getByText((content, element) => {
        return element?.textContent === "What’s your story? Get in touch";
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) => {
        return (
          element?.textContent ===
          "Always available for freelancing if the right project comes along, Feel free to contact me."
        );
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId("mock-icon-icon1")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon-icon2")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByText("Send Message")).toBeInTheDocument();
  });
});
