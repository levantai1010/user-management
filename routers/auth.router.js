const { Router } = require("express");
const { signUp, signIn } = require("../controllers/auth.controller");
const authRouter = Router();
authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
module.exports = { authRouter };
