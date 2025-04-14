// class는 속성[변수]과 행동[함수]
class Employee {
  #name;
  #age;
  #gender;
  #position;
  // 초기값 설정
  constructor(name, age, gender, position) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
    this.#position = position;
  }
  introduce() {
    console.log(`안녕하세요. ${this.#position}${this.#name}입니다.`);
  }
}
class President extends Employee {
  meeting() {}
  observing() {}
}

class Mento extends Employee {
  #student;
  constructor(name, age, gender, postion) {
    // super는 부모에게 있는 함수를 쓸 때 사용
    super(name, age, gender, postion);
    this.#student = [];
  }
  counsel() {}
  enroll() {}
  manage() {}
}

const lee = new Mento("이지헌", 31, "남", "대리");
const kim = new Mento("김민규", 28, "남", "부장");
lee.enroll("수임");
lee.enroll("미소");
lee.manage();
