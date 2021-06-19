import React from "react";
import renderer from "react-test-renderer";

import Breweries from "../../../components/breweries/Breweries";

it("renders correctly when no fetching data", () => {
  const tree = renderer.create(<Breweries fetchData={false} />);
  expect(tree).toMatchSnapshot();
});
