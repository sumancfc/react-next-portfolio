import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopHeader from "../components/TopHeader";

describe("TopHeader component", () => {
  test("renders phone number and email", () => {
    render(<TopHeader />);
    const phoneNumber = screen.getByText("+4917685985727");
    const email = screen.getByText("sumanstha999@gmail.com");
    expect(phoneNumber).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test("renders language options", () => {
    render(<TopHeader />);
    const enOption = screen.getByText("EN");
    const deOption = screen.getByText("DE");
    expect(enOption).toBeInTheDocument();
    expect(deOption).toBeInTheDocument();
  });
});
