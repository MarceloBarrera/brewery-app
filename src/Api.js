const rootApiUrl = "https://api.openbrewerydb.org";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  // order: asc / desc
  // sort: field name to sort
  async getBreweries(sort = "id", order = "asc") {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${rootApiUrl}/breweries?per_page=50&page=1`,
        requestOptions
      );
      const response2 = await fetch(
        `${rootApiUrl}/breweries?per_page=50&page=2`,
        requestOptions
      );

      const resposeJson = await response.json();
      const resposeJson2 = await response2.json();

      return [...resposeJson, ...resposeJson2];
    } catch (error) {
      console.log("error", error);
    }
  },
};
