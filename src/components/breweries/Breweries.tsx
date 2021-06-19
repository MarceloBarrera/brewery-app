import React, { useEffect, useReducer } from "react";
import API from "../../Api";

import BreweriesList from "../breweriesList/BreweriesList";
import Button from "../buttons/Button";
import * as Icons from "../icons/icons";

import {
  breweriesReducer,
  initialState,
  ActionTypes,
} from "../breweries/BreweriesReducer";
import logo from "../../assets/brewery-logo.svg";
import "./Breweries.css";

const Breweries = ({ fetchData }: { fetchData: boolean }) => {
  const [state, dispatch] = useReducer(breweriesReducer, {
    ...initialState,
  });

  const loadData = React.useCallback(async () => {
    try {
      dispatch({ type: ActionTypes.SET_START_FETCHING });
      const breweries = await API.getBreweries();
      dispatch({ type: ActionTypes.SET_BREWERIES_LIST, payload: breweries });
      dispatch({ type: ActionTypes.SET_END_FETCHING });
    } catch {
      dispatch({ type: ActionTypes.FETCHING_FAILED });
    }
  }, []);

  const sortByName = () => {
    dispatch({
      type: ActionTypes.SORT_BY_NAME,
    });
  };

  const sortByState = () => {
    dispatch({
      type: ActionTypes.SORT_BY_STATE,
    });
  };

  const sortByType = () => {
    dispatch({
      type: ActionTypes.SORT_BY_TYPE,
    });
  };

  useEffect(() => {
    (async function () {
      if (fetchData) {
        loadData();
      }
    })();
  }, [loadData, fetchData]);

  return (
    <div className="container">
      <div className="grid header">
        <div className="header__inner">
          <div className="header__logo">
            <img src={logo} alt="logo brewery"></img>
            <span>BREWERIES</span>
          </div>
          <Button className="header__refresh-button" onClick={loadData}>
            Reload Data
            <Icons.Refresh />
          </Button>
        </div>
      </div>

      <div className="grid content">
        <div className="list-buttons">
          <Button onClick={sortByType}>
            Sort by type {state.orderAscByType ? "Desc" : "Asc"}
            <Icons.Sort />
          </Button>

          <Button onClick={sortByName}>
            Sort by name {state.orderAsc ? "Desc" : "Asc"}
            <Icons.Sort />
          </Button>

          <Button onClick={sortByState}>
            Sort by state {state.orderAscByState ? "Desc" : "Asc"}
            <Icons.Sort />
          </Button>
        </div>
        {state.isFetchingBreweries ? (
          <div>Fetching...</div>
        ) : (
          <BreweriesList
            breweries={state.breweriesList}
            errorOcurred={state.errorOccurredWhenFetching}
          ></BreweriesList>
        )}
        {state.errorOccurredWhenFetching ? (
          <div>
            Error occurred when Fetching breweries, please try again later...
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Breweries;
