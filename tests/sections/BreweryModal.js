module.exports = {
  selector: ".modal-main",
  commands: {
    closeModal() {
      return this.waitForElementVisible("@closeButton").click("@closeButton");
    },
  },
  elements: {
    closeButton: "[data-test-close]",
  },
};
