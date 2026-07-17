import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroIcons from "../../components/Icons";
import Icon from "../../data/enum";

describe("HeroIcons component", () => {
  test.each(Object.values(Icon))("renders the %s icon", (icon) => {
    const { container } = render(<HeroIcons icon={icon} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("icons");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  test("renders nothing for an unknown icon key", () => {
    const { container } = render(<HeroIcons icon="NotARealIcon" />);
    expect(container).toBeEmptyDOMElement();
  });
});
