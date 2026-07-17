import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import i18n from "../../lib/i18n";
import FloatingContact from "../../components/FloatingContact";

describe("FloatingContact component", () => {
  afterEach(async () => {
    document.cookie = "lang=; path=/; max-age=0";
    await i18n.changeLanguage("de");
  });

  test("renders the email, GitHub, LinkedIn, download CV, and Impressum links", () => {
    render(<FloatingContact />);

    expect(screen.getByRole("link", { name: /e-mail/i })).toHaveAttribute(
      "href",
      "mailto:sumanstha999@gmail.com"
    );
    expect(screen.getByRole("link", { name: "Github" })).toHaveAttribute(
      "href",
      "https://github.com/sumancfc"
    );
    expect(screen.getByRole("link", { name: "linkedin" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/suman-shrestha-111410144/"
    );
    const downloadLink = screen.getByRole("link", {
      name: "Lebenslauf herunterladen",
    });
    expect(downloadLink).toHaveAttribute(
      "href",
      "/Suman_Shrestha_Resume.pdf"
    );
    expect(downloadLink).toHaveAttribute("download");
    expect(screen.getByRole("link", { name: "Impressum" })).toHaveAttribute(
      "href",
      "/impressum"
    );
  });

  test("places the download-CV link after LinkedIn and before Impressum", () => {
    render(<FloatingContact />);

    const links = screen.getAllByRole("link").map((l) => l.getAttribute("href"));
    const linkedinIndex = links.indexOf(
      "https://www.linkedin.com/in/suman-shrestha-111410144/"
    );
    const downloadIndex = links.indexOf("/Suman_Shrestha_Resume.pdf");
    const impressumIndex = links.indexOf("/impressum");

    expect(linkedinIndex).toBeLessThan(downloadIndex);
    expect(downloadIndex).toBeLessThan(impressumIndex);
  });

  test("renders both language toggle buttons, with the active one marked", () => {
    render(<FloatingContact />);

    const deButton = screen.getByRole("button", { name: /switch to de/i });
    const enButton = screen.getByRole("button", { name: /switch to en/i });
    expect(deButton).toBeInTheDocument();
    expect(enButton).toBeInTheDocument();
    expect(deButton).toHaveClass("active");
    expect(enButton).not.toHaveClass("active");
  });

  test("switching language updates the active button and persists a cookie", async () => {
    const user = userEvent.setup();
    render(<FloatingContact />);

    await user.click(screen.getByRole("button", { name: /switch to en/i }));

    expect(screen.getByRole("button", { name: /switch to en/i })).toHaveClass(
      "active"
    );
    expect(screen.getByRole("button", { name: /switch to de/i })).not.toHaveClass(
      "active"
    );
    expect(document.cookie).toContain("lang=en");
  });
});
