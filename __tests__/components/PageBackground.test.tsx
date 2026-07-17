import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageBackground from "../../components/PageBackground";

describe("PageBackground component", () => {
  test("renders the ambient glow and grid layers, hidden from assistive tech", () => {
    const { container } = render(<PageBackground />);

    const wrapper = container.querySelector(".page-bg");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveAttribute("aria-hidden", "true");
    expect(wrapper?.querySelector(".page-bg-glow")).toBeInTheDocument();
    expect(wrapper?.querySelector(".page-bg-grid")).toBeInTheDocument();
  });
});
