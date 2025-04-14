const { Option } = require("./option.js");

class replacement extends Option {
  #inventoryManager;
  #promptManager;
  #dataManager;

  constructor(inventoryManager, promptManager, dataManager) {
    super();
    this.#inventoryManager = inventoryManager;
    this.#promptManager = promptManager;
    this.#dataManager = dataManager;
  }

  async excute(data) {
    this.#promptManager.makeConsole("재고 넣기 시작!");
    this.#inventoryManager.listProduct(data);
    const [menu, amount] = await this.#promptManager.askNumberAndAmount();
    this.#inventoryManager.replenishProduct(data[+menu], +amount);
    this.#dataManager.saveData("coffeeList", data);
    this.#promptManager.makeConsole("재고 업데이트 완료");
  }
}

module.exports = { replacement };
