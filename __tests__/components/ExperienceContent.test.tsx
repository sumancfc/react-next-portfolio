import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExperienceContent from "../../components/ExperienceContent";
import experiences from "../../data/experience";

describe("ExperienceContent component", () => {
  test("renders the page title", () => {
    render(<ExperienceContent />);
    expect(screen.getByRole("heading", { name: "Erfahrung" })).toBeInTheDocument();
  });

  test("renders a tab for every company in the experience data", () => {
    render(<ExperienceContent />);

    experiences.forEach((exp) => {
      expect(screen.getByRole("tab", { name: exp.company })).toBeInTheDocument();
    });
  });
});
