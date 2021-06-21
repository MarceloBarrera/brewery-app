module.exports = {
  before(client) {
    this.breweries = client.page.Breweries();
    this.breweryModal = this.breweries.section.breweryModal;
  },
  "start app": function () {
    this.breweries.navigate();
  },
  "open brewery details": function () {
    const breweryId = 9180;
    this.breweries.waitForElementVisible("@breweriesList");
    this.breweries.openBreweryDetails(breweryId);
  },
  "brewery modal details should be display": function () {
    this.breweries.expectBreweryModalVisible();
  },
  "close modal": function () {
    this.breweryModal.closeModal();
  },
  "brewery modal details should not be present": function () {
    this.breweries.expectBreweryModalNotPresent();
  },
  after(client) {
    client.end();
  },
};
