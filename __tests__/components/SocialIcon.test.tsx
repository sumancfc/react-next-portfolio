import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SocialIcon from "../../components/SocialIcon";

describe("SocialIcon component", () => {
  test("renders the GitHub svg for name='Github'", () => {
    const { container } = render(<SocialIcon name="Github" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("fill", "currentColor");
  });

  test("renders the LinkedIn svg for name='linkedin'", () => {
    const { container } = render(<SocialIcon name="linkedin" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("fill", "#0A66C2");
  });

  test("renders nothing for an unrecognized name", () => {
    const { container } = render(<SocialIcon name="Twitter" />);
    expect(container).toBeEmptyDOMElement();
  });
});
