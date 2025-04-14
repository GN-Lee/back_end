const { InventoryManager } = require("./inventory.js");
const { PromptManager } = require("./prompt.js");
const { DataManager } = require("./data.js");

const managers = {
  inventory: new InventoryManager(),
  prompt: new PromptManager(),
  data: new DataManager(),
};

module.exports = { managers };
