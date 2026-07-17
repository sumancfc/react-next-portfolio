import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactContent from "../../components/ContactContent";

describe("ContactContent component", () => {
  test("renders the page title and intro message", () => {
    render(<ContactContent />);

    expect(screen.getByRole("heading", { name: "Kontakt" })).toBeInTheDocument();
    expect(
      screen.getByText(/Immer offen für Freelance-Projekte/)
    ).toBeInTheDocument();
  });

  test("renders the email, GitHub, and LinkedIn contact links", () => {
    render(<ContactContent />);

    const emailLink = screen.getByRole("link", { name: /E-Mail/ });
    expect(emailLink).toHaveAttribute("href", "mailto:sumanstha999@gmail.com");
    expect(emailLink).toHaveTextContent("sumanstha999@gmail.com");

    const githubLink = screen.getByRole("link", { name: /Github/ });
    expect(githubLink).toHaveAttribute("href", "https://github.com/sumancfc");
    expect(githubLink).toHaveAttribute("target", "_blank");

    const linkedinLink = screen.getByRole("link", { name: /LinkedIn/ });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/suman-shrestha-111410144/"
    );
  });
});
