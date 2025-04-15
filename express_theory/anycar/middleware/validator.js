const validateCarData = (req, res, next) => {
  if (!req.body)
    res.status(400).json({ success: false, message: "데이터를 입력해주세요." });

  const { id, name } = req.body;
  if (!id || !name)
    res
      .status(400)
      .json({ success: false, message: "id와 name을 입력해주세요." });

  if (!id.trim())
    res
      .status(400)
      .json({ success: false, message: "id와 name은 빈 값일 수 없습니다." });

  const idRegex = /^[0-9a-zA-Z]{4}$/; // 숫자 4자리
  if (!idRegex.test(id))
    res
      .status(400)
      .json({ success: false, message: "id는 숫자 4자리만 입력해주세요." });

  next();
};

module.exports = { validateCarData };
