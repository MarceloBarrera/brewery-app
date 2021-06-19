export interface BreweryItem {
  id: string;
  name: string;
  created_at: string;
  phone: string;
  state: string;
}
export interface IState {
  breweriesList: Array<BreweryItem>;
  isFetchingBreweries: boolean;
  errorOccurredWhenFetching: boolean;
  orderAsc: boolean;
  orderAscByState: boolean;
}

export const initialState: IState = {
  breweriesList: [],
  isFetchingBreweries: false,
  errorOccurredWhenFetching: false,
  orderAsc: true,
  orderAscByState: false,
};

export enum ActionTypes {
  SET_BREWERIES_LIST,
  SET_START_FETCHING,
  SET_END_FETCHING,
  SORT_BY_NAME,
  SORT_BY_STATE,
  FETCHING_FAILED,
}

export type Action =
  | {
      type: ActionTypes.SET_BREWERIES_LIST;
      payload: any;
    }
  | {
      type: ActionTypes.SET_START_FETCHING;
    }
  | {
      type: ActionTypes.SET_END_FETCHING;
    }
  | {
      type: ActionTypes.SORT_BY_NAME;
    }
  | {
      type: ActionTypes.FETCHING_FAILED;
    }
  | {
      type: ActionTypes.SORT_BY_STATE;
    };

export const breweriesReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_BREWERIES_LIST:
      return {
        ...state,
        breweriesList: action.payload,
        orderAsc: true,
      };
    case ActionTypes.SET_START_FETCHING:
      return {
        ...state,
        isFetchingBreweries: true,
        errorOccurredWhenFetching: false,
      };
    case ActionTypes.SET_END_FETCHING:
      return { ...state, isFetchingBreweries: false };
    case ActionTypes.SORT_BY_NAME:
      const breweriesOrdered = state.breweriesList.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        breweriesList: state.orderAsc
          ? breweriesOrdered
          : breweriesOrdered.reverse(),
        orderAsc: !state.orderAsc,
      };
    case ActionTypes.SORT_BY_STATE:
      const breweriesOrderedByState = state.breweriesList.sort((a, b) => {
        if (a.state > b.state) {
          return -1;
        }
        if (b.state > a.state) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        breweriesList: state.orderAscByState
          ? breweriesOrderedByState
          : breweriesOrderedByState.reverse(),
        orderAscByState: !state.orderAscByState,
      };
    case ActionTypes.FETCHING_FAILED:
      return {
        ...state,
        isFetchingBreweries: false,
        errorOccurredWhenFetching: true,
      };

    default:
      return state;
  }
};
