exports.validateName = (req, res, next) => {
  let { name1, name2, name3, name4 } = req.body
  if (!name1 || !name2 || !name3 || !name4) {
    res.json({
      message: "Nhập đủ thông tin"
    })
  }
  else {
    next()
  }
}
