const { Router } = require("express");
const {
  getBillList,
  getBillListWithProduct,
} = require("../controllers/bill.controller");
const billRouter = Router();
billRouter.get("/", getBillList);
billRouter.get("/getBillListWithProduct", getBillListWithProduct);
module.exports = { billRouter };
