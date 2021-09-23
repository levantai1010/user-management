const { Bill, User, sequelize } = require("../models");

const getBillList = async (req, res) => {
  try {
    // const billList = await Bill.findAll({
    //   include: [{ model: User }],
    // });
    const billList = await Bill.findAll({
      // include: [
      //   {
      //     model: User,
      //   },
      // ],
    });
    res.status(200).send(billList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getBillListWithProduct = async (req, res) => {
  try {
    const [results] = await sequelize.query(
      `
        select * from bills
        inner join products
        on products.billID=bills.id
        where bills.id=2;
      `
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getBillList, getBillListWithProduct };
