import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackgroundImage from "../../components/BackgroundImage";

describe("Background Image Component", () => {
  test("renders with correct background image", () => {
    const { container } = render(
      <BackgroundImage className='test-class' imageSrc='/path/to/image.jpg' />
    );

    const divElement = container.firstChild as HTMLElement;
    expect(divElement).toHaveClass("test-class");
    expect(divElement).toHaveStyle({
      background: "url(/path/to/image.jpg)",
    });
  });

  test("renders without className", () => {
    const { container } = render(
      <BackgroundImage imageSrc='/path/to/image.jpg' />
    );

    const divElement = container.firstChild as HTMLElement;
    expect(divElement).not.toHaveClass();
    expect(divElement).toHaveStyle({
      background: "url(/path/to/image.jpg)",
    });
  });
});
