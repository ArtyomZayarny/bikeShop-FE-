import { render } from "@testing-library/react";
import { Footer } from "../../../app/components/footer";

describe("Footer", () => {
  it("should render footer", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
