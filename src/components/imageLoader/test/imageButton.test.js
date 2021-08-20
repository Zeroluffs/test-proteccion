import React from "react";
import ImageButton from "../ImageButton";
import { render} from "@testing-library/react";

test("check input", () => {
  const { getByTestId } = render(<ImageButton />);
  const input = getByTestId("required-input");
  expect(input).toBeInTheDocument();
});
