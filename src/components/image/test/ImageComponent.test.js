import React from "react";
import ImageComponent from "../../image/ImageComponent";
import { render, screen } from "@testing-library/react";

describe("imageComponent", () => {
  test("component has image", () => {
    render(<ImageComponent />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt");
  });
});
