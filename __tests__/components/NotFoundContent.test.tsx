import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFoundContent from "../../components/NotFoundContent";

describe("NotFoundContent component", () => {
  test("renders the speech bubble and the friendly message", () => {
    render(<NotFoundContent />);

    expect(screen.getByText("404 – Seite nicht gefunden")).toBeInTheDocument();
    expect(
      screen.getByText(/Selbst eine KI konnte diese Seite nicht aufspüren/)
    ).toBeInTheDocument();
  });

  test("renders a terminal card with a fallback path before the real URL is read", () => {
    render(<NotFoundContent />);
    // jsdom's default test URL is http://localhost/, so the client-side
    // window.location.pathname effect resolves to "/" almost immediately;
    // either that or the pre-mount fallback should show up.
    expect(screen.getByText("bash — 404")).toBeInTheDocument();
  });

  test("links back to the home page", () => {
    render(<NotFoundContent />);

    const cta = screen.getByRole("link", { name: "Zurück zur Startseite" });
    expect(cta).toHaveAttribute("href", "/");
  });

  test("provides a screen-reader description for the decorative robot illustration", () => {
    const { container } = render(<NotFoundContent />);

    const robot = container.querySelector(".not-found-robot");
    expect(robot).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("Ein verwirrter Roboter zuckt mit den Schultern")).toHaveClass(
      "sr-only"
    );
  });
});
