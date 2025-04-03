const { env } = require("../env.js");
const fs = require("fs");

class DataManager {
  makeObj(data) {
    return {
      name: data.getName(),
      stock: data.getStock(),
      price: data.getPrice(),
    };
  }

  format(key, value) {
    return { [key]: value };
  }

  hasData() {
    return fs.existsSync(env.dataStore);
  }

  existData() {
    return fs.existsSync(env.dataStore);
  }

  saveData(keyName, data) {
    const formatted = this.format(
      keyName,
      data.map((v) => this.makeObj(v))
    );
    fs.writeFileSync(env.dataStore, JSON.stringify(formatted), "utf-8");
  }

  getData() {
    return JSON.parse(fs.readFileSync(env.dataStore, "utf-8"));
  }
}

module.exports = { DataManager };
