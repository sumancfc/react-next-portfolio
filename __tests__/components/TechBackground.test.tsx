import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SiReact, SiDocker } from "react-icons/si";
import TechBackground, { BackgroundIconConfig } from "../../components/TechBackground";

const icons: BackgroundIconConfig[] = [
  { Icon: SiReact, top: "12%", left: "8%", size: 46, delay: "0s", duration: "9s" },
  { Icon: SiDocker, top: "68%", left: "6%", size: 40, delay: "1.2s", duration: "11s" },
];

describe("TechBackground component", () => {
  test("renders one icon per config entry, positioned and timed accordingly", () => {
    const { container } = render(<TechBackground icons={icons} />);

    const wrapper = container.querySelector(".tech-bg");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveAttribute("aria-hidden", "true");

    const rendered = container.querySelectorAll(".tech-bg-icon");
    expect(rendered).toHaveLength(icons.length);

    icons.forEach((icon, index) => {
      const el = rendered[index] as HTMLElement;
      expect(el).toHaveStyle({ top: icon.top, left: icon.left, fontSize: `${icon.size}px` });
      expect(el.style.animationDelay).toBe(icon.delay);
      expect(el.style.animationDuration).toBe(icon.duration);
      expect(el.querySelector("svg")).toBeInTheDocument();
    });
  });

  test("renders no icons when given an empty list", () => {
    const { container } = render(<TechBackground icons={[]} />);
    expect(container.querySelectorAll(".tech-bg-icon")).toHaveLength(0);
  });
});
