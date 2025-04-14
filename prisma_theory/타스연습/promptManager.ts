import * as readline from "readline";

class PromptManager {
  #r1;
  constructor() {
    this.#r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async askQuestion(question: string) {
    return new Promise((resolve) => {
      this.#r1.question(question, resolve);
    });
  }
}

export { PromptManager };
