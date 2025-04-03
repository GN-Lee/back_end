const readline = require("readline");

class PromptManager {
  #x;
  constructor() {
    this.#x = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  askQuestion(query) {
    return new Promise((success) => this.#x.question(query, success));
  }

  async askNumberAndAmount() {
    const menu = await this.askQuestion("번호 입력:");
    const amount = await this.askQuestion("갯수 추가:");
    return [menu, amount];
  }
  makeConsole(contents) {
    console.log(contents);
  }
}
module.exports = { PromptManager };
