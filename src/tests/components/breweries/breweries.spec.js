import { render } from "@testing-library/react";

import Breweries from "../../../components/breweries/Breweries";

const renderComponent = (args) => {
  const defaultProps = { fetchData: false };

  const props = { ...defaultProps, ...args };
  return render(<Breweries {...props} />);
};

it("should render component", () => {
  const { getByText } = renderComponent();
  getByText("No Breweries yet");
});

it("should render component with fetching text", () => {
  const { getByText } = renderComponent({ fetchData: true });
  getByText("Fetching...");
});
