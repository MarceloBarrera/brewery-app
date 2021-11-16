import { useState, useMemo, useCallback } from "react";
import Pagination from "../../components/common/pagination/Pagination";
import data from "./data/mock-data-big.json";
import DropdownTypeRating from "./dropdown/DropdownTypeRating";
import "./SponsorsList.scss";

let PageSize = 10;

export default function SponsorsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [companySearch, setCompanySearch] = useState("");
  const [townSearch, setTownSearch] = useState("");
  const [countySearch, setCountySearch] = useState("");
  const [typeRating, setTypeRating] = useState("All");
  const [totalNumber, setTotalNumber] = useState(data.length);

  const filterByCompany = useCallback(
    (sponsors) => {
      return sponsors.filter(
        (a) =>
          a.Organisation_Name.toLowerCase().includes(
            companySearch.toLowerCase()
          ) || companySearch === ""
      );
    },
    [companySearch]
  );

  const filterByTownCity = useCallback(
    (sponsors) => {
      return sponsors.filter(
        (a) =>
          a.Town_City.toLowerCase().includes(townSearch.toLowerCase()) ||
          townSearch === ""
      );
    },
    [townSearch]
  );

  const filterByCounty = useCallback(
    (sponsors) => {
      return sponsors.filter(
        (a) =>
          a.County.toLowerCase().includes(countySearch.toLowerCase()) ||
          countySearch === ""
      );
    },
    [countySearch]
  );

  const filterByTypeRating = useCallback(
    (sponsors) => {
      return sponsors.filter(
        (a) => a.Type_Rating.includes(typeRating) || typeRating === "All"
      );
    },
    [typeRating]
  );

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const filterCompanies = filterByCompany(data);
    const filterTypeRating = filterByTypeRating(filterCompanies);
    const filterCounty = filterByCounty(filterTypeRating);
    const finalFilter = filterByTownCity(filterCounty);

    setTotalNumber(finalFilter.length);
    return finalFilter.slice(firstPageIndex, lastPageIndex);
  }, [
    currentPage,
    filterByCompany,
    filterByTypeRating,
    filterByTownCity,
    filterByCounty,
  ]);

  const handleCompanySearch = (event) => {
    setCompanySearch(event.target.value);
  };

  const handleTownSearch = (event) => {
    setTownSearch(event.target.value);
  };

  const handleCountySearch = (event) => {
    setCountySearch(event.target.value);
  };

  const handleChangeTypeRating = (value) => {
    setTypeRating(value);
  };

  return (
    <>
      <br />
      <div className="list-filters">
        <div>
          <label htmlFor="companySearch">Company:</label>
          <input
            type="text"
            id="companySearch"
            value={companySearch}
            onChange={handleCompanySearch}
          ></input>
        </div>
        <div>
          <label htmlFor="townSearch">Town :</label>
          <input
            type="text"
            id="townSearch"
            value={townSearch}
            onChange={handleTownSearch}
          ></input>
        </div>
        <div>
          <label htmlFor="countySearch">County :</label>
          <input
            type="text"
            id="countySearch"
            value={countySearch}
            onChange={handleCountySearch}
          ></input>
        </div>
        <div>
          <DropdownTypeRating
            onChangeDropdown={handleChangeTypeRating}
          ></DropdownTypeRating>
        </div>
      </div>
      <br />

      <div>Total Results: {totalNumber}</div>
      <br />

      <table>
        <thead>
          <tr>
            <th>COMPANY</th>
            <th>TOWN</th>
            <th>COUNTY</th>
            <th>TYPE & RATING</th>
            <th>ROUTE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Organisation_Name}</td>
                <td>{item.Town_City}</td>
                <td>{item.County}</td>
                <td>{item.Type_Rating}</td>
                <td>{item.Route}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={totalNumber}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
