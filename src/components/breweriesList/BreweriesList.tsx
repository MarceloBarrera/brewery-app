import PropTypes from "prop-types";
import { formatDate } from "../../Utils";
import "./BreweriesList.css";
import { BreweryItem } from "../breweries/BreweriesReducer";
import { useMemo, useState } from "react";
import Brewery from "./Brewery";
import Pagination from "../common/pagination/Pagination";

let PageSize = 10;
const BreweriesList = ({
  breweries,
  errorOcurred,
}: {
  breweries: () => BreweryItem[];
  errorOcurred: boolean;
}) => {
  const [showItemId, setShowItemId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return breweries().slice(firstPageIndex, lastPageIndex);
  }, [currentPage, breweries]);

  return (
    <>
      <ul className="breweries-list">
        {currentTableData.map((item) => {
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
        {breweries().length === 0 && !errorOcurred ? "No Breweries yet" : ""}
      </ul>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={breweries().length}
        pageSize={PageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </>
  );
};

export default BreweriesList;
