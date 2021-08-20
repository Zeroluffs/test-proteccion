import React from "react";
import MainPage from "../MainPage";
import { render} from "@testing-library/react";

test("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<MainPage></MainPage>, div);
  render(<MainPage />);
});
