import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WorkContent from "../../components/WorkContent";

describe("WorkContent component", () => {
  test("renders the page title and project card", () => {
    render(<WorkContent />);

    expect(screen.getByRole("heading", { name: "Projekte" })).toBeInTheDocument();
    expect(screen.getByText("portfolio.tsx")).toBeInTheDocument();
  });

  test("lists the project's tech stack", () => {
    render(<WorkContent />);

    ["Next.js", "TypeScript", "React", "SCSS"].forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  test("links out to the Experience page from the callout", () => {
    render(<WorkContent />);

    const links = screen.getAllByRole("link");
    const experienceLink = links.find((l) => l.getAttribute("href") === "/experience");
    expect(experienceLink).toBeDefined();
  });
});
