const { carService } = require("../services/carService.js");

const existor = (req, res, next) => {
  const { id } = req.params;
  const car = carService.getById(id);
  if (!car) {
    res.status(404).json({ success: false, message: "차량이 없습니다." });
  }
  next();
};

module.exports = { existor };
