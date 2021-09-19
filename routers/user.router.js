const express = require("express");
const {
  getUserList,
  createUser,
  removeUser,
  updateUser,
  uploadAvatar,
} = require("../controllers/user.controller");
const { authenticate, authorize } = require("../middleware/auth.middleware");
const { checkExist } = require("../middleware/check-exist.middleware");
const { uploadImageSingle } = require("../middleware/upload-image.middleware");
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
userRouter.post(
  "/upload-avatar",
  authenticate,
  uploadImageSingle(),
  uploadAvatar
);
//uploadImageSingle() Phải gọi hàm
module.exports = {
  userRouter,
};
