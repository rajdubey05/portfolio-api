const Model = require("../models/portfolioModel");

const router = require("express").Router();

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then(() => {
      console.log("portfolio data added");
      res.status(200).json({ message: "successfull" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
