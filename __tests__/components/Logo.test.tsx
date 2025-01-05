import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../../components/Logo";

describe("Logo Component", () => {
  test("renders the logo title with a link to the home page", () => {
    const title = "My Logo";
    render(<Logo title={title} />);

    const linkElement = screen.getByRole("link", { name: title });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
