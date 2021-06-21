module.exports = {
  selector: ".modal-main",
  commands: {
    closeModal() {
      return this.waitForElementVisible("@closeButton").click("@closeButton");
    },
  },
  elements: {
    closeButton: ".button",
  },
};
