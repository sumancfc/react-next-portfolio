import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRequestedPath } from "../../lib/useRequestedPath";

function Probe({ fallback }: { fallback: string }) {
  const path = useRequestedPath(fallback);
  return <span>{path}</span>;
}

describe("useRequestedPath", () => {
  test("resolves to the browser's actual current path", () => {
    render(<Probe fallback="/fallback" />);
    // jsdom's default test URL is http://localhost/
    expect(screen.getByText("/")).toBeInTheDocument();
  });
});
