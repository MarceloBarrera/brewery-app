module.exports = {
  before(client) {
    this.breweries = client.page.Breweries();
  },
  "start app": function () {
    this.breweries.navigate();
  },
  "open brewery details": function () {
    const breweryId = 9180;
    this.breweries.waitForElementVisible("@breweriesList");
    this.breweries.openBreweryDetails(breweryId);
  },
  "brewery details should be display": function () {
    this.breweries.expectBreweryModalVisible();
  },
  after(client) {
    client.end();
  },
};
