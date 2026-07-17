import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImpressumContent from "../../components/ImpressumContent";

describe("ImpressumContent component", () => {
  test("renders the page title and TMG heading", () => {
    render(<ImpressumContent />);

    expect(screen.getByRole("heading", { name: "Impressum" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Angaben gemäß § 5 TMG" })
    ).toBeInTheDocument();
  });

  test("renders the real address", () => {
    const { container } = render(<ImpressumContent />);

    const addressText = container.querySelector(".impressum-body p")?.textContent;
    expect(addressText).toContain("Suman Shrestha");
    expect(addressText).toContain("Kreuzberg Straße 26");
    expect(addressText).toContain("77709 Wolfach");
    expect(addressText).toContain("Deutschland");
  });

  test("renders a mailto link for contact", () => {
    render(<ImpressumContent />);

    const emailLink = screen.getByRole("link", {
      name: "sumanstha999@gmail.com",
    });
    expect(emailLink).toHaveAttribute("href", "mailto:sumanstha999@gmail.com");
  });
});
