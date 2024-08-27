import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the button with provided label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);

    // Check if the button is rendered with the correct label
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click Me");
  });

  it("calls the onClick function when clicked", () => {
    const mockOnClick = vi.fn();
    render(<Button label="Click Me" onClick={mockOnClick} />);

    // Simulate a click event
    const buttonElement = screen.getByTestId("button");
    fireEvent.click(buttonElement);

    // Check if the onClick function is called
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
