import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../../components/Hero";

describe("Hero component", () => {
  test("renders the name, role, and location", () => {
    render(<Hero />);

    expect(screen.getByText("Suman Shrestha")).toBeInTheDocument();
    // Matched twice by design: once in the decorative code block, once in
    // the plain-language .sr-only summary alongside it.
    expect(screen.getAllByText(/Software-Entwickler/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Wolfach, Deutschland/).length).toBeGreaterThan(0);
  });

  test("renders the availability badge and greeting comment", () => {
    render(<Hero />);

    expect(screen.getByText("Offen für neue Jobs")).toBeInTheDocument();
    expect(screen.getByText(/Hallo, ich bin/)).toBeInTheDocument();
  });

  test("renders the tech stack list", () => {
    render(<Hero />);

    ["React", "TypeScript", "Node.js", "Docker"].forEach((tech) => {
      expect(screen.getByText(`"${tech}"`)).toBeInTheDocument();
    });
  });

  test("provides a plain-language screen-reader summary alongside the decorative code block", () => {
    const { container } = render(<Hero />);

    const srOnly = container.querySelector(".sr-only");
    expect(srOnly).toBeInTheDocument();
    expect(srOnly?.textContent).toContain("Suman Shrestha");
    expect(srOnly?.textContent).toContain("Software-Entwickler");

    const decorativeRows = container.querySelectorAll('[aria-hidden="true"].code-row');
    expect(decorativeRows.length).toBeGreaterThan(0);
  });
});
