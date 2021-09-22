const { Router } = require("express");
const { getBillList } = require("../controllers/bill.controller");
const billRouter = Router();
billRouter.get("/", getBillList);
module.exports = { billRouter };
