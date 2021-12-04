const Model = require("../models/userModel");

const router = require("express").Router();

router.post("/add", (req, res) => {
  console.log("add request in userRouter");
  console.log(req.body);

  new Model(req.body)
    .save()
    .then(() => {
      console.log("user data added");
      res.status(200).json({ message: "successfull" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});



router.post("/backendlogin", (req, res) => {
 
  console.log(req.body);
  let formdata = req.body;
  // promise method
   Model.findOne( { email : formdata.email})
    
    .then((data) => {

      if(data){

        if(data.password == formdata.password){
          console.log("login successfull");
          res.status(200).json(data);

        }else{
          console.log("password incorrect");
          res.status(300).json({ message: "password incorrect" });

        }

      }else{
        console.log("email not found");
        res.status(300).json({ message: "email not found" });

      }

      
      
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
