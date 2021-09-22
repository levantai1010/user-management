const express = require("express");
const { authRouter } = require("./auth.router");
const { billRouter } = require("./bill.router");
const { userRouter } = require("./user.router");
const rootRouter = express.Router();
rootRouter.use("/user", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/bill", billRouter);
module.exports = { rootRouter };
