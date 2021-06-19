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
      const response = await fetch(`${rootApiUrl}/breweries`, requestOptions);
      return response.json();
    } catch (error) {
      console.log("error", error);
    }
  },
};
