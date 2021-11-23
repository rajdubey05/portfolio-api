const express = require("express");
const cors = require("cors");

const app = express();
const port = "5000";

const userRouter = require("./routers/userRouter");
const portfolioRouter = require("./routers/portfolioRouter");

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use("/user", userRouter);
app.use("/portfolio", portfolioRouter);

app.listen(port, () => {
  console.log(" server successfully started on port 5000");
});
