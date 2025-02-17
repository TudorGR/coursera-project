import { render } from "@testing-library/react";
import App from "./App";

describe(App, () => {
  it("App displays correct restaurant name", () => {
    const { getAllByTestId } = render(<App />);
    const name = getAllByTestId("name").textContent;
    expect(name).toEqual("Little Lemon");
  });
});
