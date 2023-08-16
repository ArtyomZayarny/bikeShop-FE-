import { render } from "@testing-library/react";
import { Navigation } from "../../../app/components/navigation";

describe("Navigation", () => {
  it("should render Navigation", () => {
    const { container } = render(<Navigation />);
    expect(container).toMatchSnapshot();
  });
});
