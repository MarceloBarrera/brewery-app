const BreweryModal = require("../sections/BreweryModal");

module.exports = {
  url: "http://localhost:3000/",
  elements: {
    breweriesList: {
      selector: ".breweries-list",
    },
    listButtons: {
      selector: ".list-buttons",
    },
  },
  commands: {
    openBreweryDetails(id) {
      const selector = `${getBreweryRow(id)} .button-link`;
      return this.waitForElementVisible(selector).click(selector);
    },
    expectBreweryModalVisible() {
      return this.expect.section("@breweryModal").to.be.visible;
    },
    expectBreweryModalNotPresent() {
      return this.expect.section("@breweryModal").not.to.be.present;
    },
  },
  sections: {
    breweryModal: BreweryModal,
  },
};

const getBreweryRow = (id) => {
  if (typeof id === "undefined") {
    return "li:nth-child(1)";
  }

  return `li[data-test-id="${id}"]`;
};
