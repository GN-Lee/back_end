const { Coffee } = require("./coffee.js");
const { managers } = require("../manager/base.js");

const cafeMenu = () => {
  const { data } = managers;

  if (data.existData()) {
    const getData = data.getData();
    const { coffeeList } = getData;
    const newData = coffeeList.map((v) => new Coffee(v.name, v.stock, v.price));
    return newData;
  } else {
    const initData = {
      coffeeList: [
        { name: "아메리카노", stock: 0, price: 3000 },
        { name: "고구마라떼", stock: 0, price: 3500 },
        { name: "피스타치오라떼", stock: 0, price: 4000 },
      ],
    };
    data.saveData("coffeeList", initData);
    return data.getData();
  }
};
module.exports = { cafeMenu };
