import PropTypes from "prop-types";
import { formatDate } from "../../Utils";
import "./BreweriesList.css";
import { BreweryItem } from "../breweries/BreweriesReducer";
import { useState } from "react";
import Brewery from "./Brewery";

const BreweriesList = ({
  breweries,
  errorOcurred,
}: {
  breweries: Array<BreweryItem>;
  errorOcurred: boolean;
}) => {
  const [showItemId, setShowItemId] = useState("");
  return (
    <ul className="breweries-list">
      {breweries.map((item) => {
        return (
          <li
            key={item.id}
            className="breweries-list__item"
            data-test-id={item.id}
          >
            <button
              className="button-link"
              onClick={(e) => {
                setShowItemId(item.id);
              }}
            >
              {item.id}
            </button>

            {showItemId === item.id && (
              <Brewery item={item} setShowItemId={setShowItemId}></Brewery>
            )}
            <div className="breweries-list__type">
              {item.brewery_type}
              <span>{item.name}</span>
              <span>{item.country}</span>
            </div>
            <div className="breweries-list__date-state">
              <div className="breweries-list__date">
                {formatDate(item.created_at)}
              </div>
              <div className="breweries-list__state">{item.state}</div>
            </div>
          </li>
        );
      })}
      {breweries.length === 0 && !errorOcurred ? "No Breweries yet" : ""}
    </ul>
  );
};

BreweriesList.propTypes = {
  breweries: PropTypes.array.isRequired,
};

export default BreweriesList;
