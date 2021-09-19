const express = require("express");
const {
  getUserList,
  createUser,
  removeUser,
  updateUser,
} = require("../controllers/user.controller");
const { authenticate, authorize } = require("../middleware/auth.middleware");
const { checkExist } = require("../middleware/check-exist.middleware");
const userRouter = express.Router();
userRouter.get("/", getUserList);
userRouter.post("/create-user", createUser);
userRouter.delete(
  "/remove-user/:id",
  checkExist,
  authenticate,
  authorize(["ADMIN", "SUPPERADMIN"]),
  removeUser
);
userRouter.put(
  "/update-user/:id",
  checkExist,
  authenticate,
  authorize(["ADMIN", "SUPPERADMIN"]),
  updateUser
);
module.exports = {
  userRouter,
};
