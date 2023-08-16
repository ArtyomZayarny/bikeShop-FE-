import { render } from "@testing-library/react";
import { Header } from "../../../app/components/header";

describe("Header", () => {
  it("should render Header", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
