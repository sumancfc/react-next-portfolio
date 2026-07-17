import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "../components/Layout";

function MockNavDock() {
  return <div data-testid="nav-dock" />;
}
function MockFloatingContact() {
  return <div data-testid="floating-contact" />;
}
function MockPageBackground() {
  return <div data-testid="page-background" />;
}

jest.mock("../components/NavDock", () => MockNavDock);
jest.mock("../components/FloatingContact", () => MockFloatingContact);
jest.mock("../components/PageBackground", () => MockPageBackground);

describe("Layout component", () => {
  test("renders the background, skip link, nav dock, floating contact, and children", () => {
    render(
      <Layout>
        <p>Page content</p>
      </Layout>
    );

    expect(screen.getByTestId("page-background")).toBeInTheDocument();
    expect(screen.getByTestId("nav-dock")).toBeInTheDocument();
    expect(screen.getByTestId("floating-contact")).toBeInTheDocument();
    expect(screen.getByText("Page content")).toBeInTheDocument();

    const skipLink = screen.getByRole("link", { name: "Zum Inhalt springen" });
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  test("gives <main> a focusable id matching the skip link's target", () => {
    render(
      <Layout>
        <p>Page content</p>
      </Layout>
    );

    const main = screen.getByText("Page content").closest("main");
    expect(main).toHaveAttribute("id", "main-content");
    expect(main).toHaveAttribute("tabIndex", "-1");
  });
});
