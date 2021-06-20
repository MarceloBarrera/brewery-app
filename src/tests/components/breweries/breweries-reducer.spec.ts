import {
  Action,
  ActionTypes,
  breweriesReducer,
  initialState,
} from "../../../components/breweries/BreweriesReducer";

const dateCreatedAt = new Date().toDateString();
const mockBreweryItem1 = {
  id: "19",
  name: "Australia",
  created_at: dateCreatedAt,
  phone: "01888882233",
  state: "California",
  brewery_type: "planning",
  city: "foo",
  county_province: "foo",
  country: "bar",
  street: "foo",
  address_2: "",
  address_3: "",
  postal_code: "",
  longitude: "",
  latitude: "",
  website_url: "",
  updated_at: "",
};
const mockBreweryItem2 = {
  id: "11",
  name: "Canada",
  created_at: dateCreatedAt,
  phone: "01888882299",
  state: "New York",
  brewery_type: "brewpub",
  city: "foo",
  county_province: "foo",
  country: "bar",
  street: "foo",
  address_2: "",
  address_3: "",
  postal_code: "",
  longitude: "",
  latitude: "",
  website_url: "",
  updated_at: "",
};

it("should fetching started", () => {
  const action: Action = { type: ActionTypes.SET_START_FETCHING };

  const newState = breweriesReducer(initialState, action);

  expect(newState.isFetchingBreweries).toEqual(true);
  expect(newState.breweriesList.length).toEqual(0);
});

it("should set breweries list when set", () => {
  const action = {
    type: ActionTypes.SET_BREWERIES_LIST,
    payload: [{ name: "foo", breweryType: "bar" }],
  };

  const newState = breweriesReducer(initialState, action);

  expect(newState.breweriesList.length).toBeGreaterThan(0);
  expect(newState.isFetchingBreweries).toEqual(false);
});

it("should fetched list when fetching ended", () => {
  const action = {
    type: ActionTypes.SET_END_FETCHING,
    payload: [{ name: "bar" }],
  };

  const newState = breweriesReducer(initialState, action);

  expect(newState.isFetchingBreweries).toEqual(false);
});

it("should sort list by name and descending", () => {
  const action: Action = {
    type: ActionTypes.SORT_BY_NAME,
  };

  const newState = breweriesReducer(
    {
      ...initialState,
      orderAsc: true,
      breweriesList: [mockBreweryItem1, mockBreweryItem2],
    },
    action
  );

  expect(newState.orderAsc).toEqual(false);
  expect(newState.breweriesList).toEqual([mockBreweryItem2, mockBreweryItem1]);
});

it("should sort list by name and ascending", () => {
  const action: Action = {
    type: ActionTypes.SORT_BY_NAME,
  };

  const newState = breweriesReducer(
    {
      ...initialState,
      orderAsc: false,
      breweriesList: [mockBreweryItem2, mockBreweryItem1],
    },
    action
  );

  expect(newState.orderAsc).toEqual(true);
  expect(newState.breweriesList).toEqual([mockBreweryItem1, mockBreweryItem2]);
});

it("should sort list by state and descending", () => {
  const action: Action = {
    type: ActionTypes.SORT_BY_STATE,
  };

  const newState = breweriesReducer(
    {
      ...initialState,
      orderAscByState: true,
      breweriesList: [mockBreweryItem1, mockBreweryItem2],
    },
    action
  );

  expect(newState.orderAscByState).toEqual(false);
  expect(newState.breweriesList).toEqual([mockBreweryItem2, mockBreweryItem1]);
});

it("should sort list by state and ascending", () => {
  const action: Action = {
    type: ActionTypes.SORT_BY_STATE,
  };

  let newState = breweriesReducer(
    {
      ...initialState,
      orderAscByState: false,
      breweriesList: [mockBreweryItem2, mockBreweryItem1],
    },
    action
  );

  expect(newState.orderAscByState).toEqual(true);
  expect(newState.breweriesList).toEqual([mockBreweryItem1, mockBreweryItem2]);

  newState = breweriesReducer(
    {
      ...initialState,
      orderAscByState: false,
      breweriesList: [mockBreweryItem1, mockBreweryItem2],
    },
    action
  );

  expect(newState.breweriesList).toEqual([mockBreweryItem1, mockBreweryItem2]);
});

it("should sort list by type and descending", () => {
  const action: Action = {
    type: ActionTypes.SORT_BY_TYPE,
  };

  const newState = breweriesReducer(
    {
      ...initialState,
      orderAscByType: true,
      breweriesList: [mockBreweryItem2, mockBreweryItem1],
    },
    action
  );

  expect(newState.orderAscByType).toEqual(false);
  expect(newState.breweriesList).toEqual([mockBreweryItem1, mockBreweryItem2]);
});

it("should sort list by type and ascending", () => {
  const action: Action = {
    type: ActionTypes.SORT_BY_TYPE,
  };

  let newState = breweriesReducer(
    {
      ...initialState,
      orderAscByType: false,
      breweriesList: [mockBreweryItem2, mockBreweryItem1],
    },
    action
  );

  expect(newState.orderAscByType).toEqual(true);
  expect(newState.breweriesList).toEqual([mockBreweryItem2, mockBreweryItem1]);
});
