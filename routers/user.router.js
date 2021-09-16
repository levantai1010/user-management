const express = require("express");
const {
  getUserList,
  createUser,
  removeUser,
  updateUser,
} = require("../controllers/user.controller");
const { checkExist } = require("../middleware/check-exist.middleware");
const userRouter = express.Router();
userRouter.get("/", getUserList);
userRouter.post("/create-user", createUser);
userRouter.delete("/remove-user/:id", checkExist, removeUser);
userRouter.put("/update-user/:id", checkExist, updateUser);
module.exports = {
  userRouter,
};
