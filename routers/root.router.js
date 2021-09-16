const express = require("express");
const { authRouter } = require("./auth.router");
const { userRouter } = require("./user.router");
const rootRouter = express.Router();
rootRouter.use("/user", userRouter);
rootRouter.use("/auth", authRouter);
module.exports = { rootRouter };
