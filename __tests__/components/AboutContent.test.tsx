import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutContent from "../../components/AboutContent";
import getYearsOfExperience from "../../lib/getYearsOfExperience";

describe("AboutContent component", () => {
  test("renders the page title and profile photo", () => {
    render(<AboutContent />);

    expect(screen.getByRole("heading", { name: "Über mich" })).toBeInTheDocument();
    const photo = screen.getByAltText("Suman Shrestha");
    expect(photo).toBeInTheDocument();
    expect(photo).toHaveAttribute("loading", "lazy");
  });

  test("bio mentions the computed years of experience", () => {
    render(<AboutContent />);

    const years = getYearsOfExperience();
    expect(
      screen.getByText(new RegExp(`${years}\\+? Jahren?`))
    ).toBeInTheDocument();
  });

  test("renders an accessible description list mirroring the decorative JSON card", () => {
    const { container } = render(<AboutContent />);

    const dl = container.querySelector("dl.sr-only");
    expect(dl).toBeInTheDocument();
    expect(dl?.textContent).toContain("Suman Shrestha");
    expect(dl?.textContent).toContain("Software-Entwickler");
    expect(dl?.textContent).toContain("Wolfach, Deutschland");

    const jsonBody = container.querySelector(".json-card-body");
    expect(jsonBody).toHaveAttribute("aria-hidden", "true");
  });

  test("renders the traffic-light window dots on the JSON card", () => {
    const { container } = render(<AboutContent />);

    expect(container.querySelector(".window-dot-red")).toBeInTheDocument();
    expect(container.querySelector(".window-dot-yellow")).toBeInTheDocument();
    expect(container.querySelector(".window-dot-green")).toBeInTheDocument();
  });
});
