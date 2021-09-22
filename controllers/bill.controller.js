const { Bill, User } = require("../models");
const getBillList = async (req, res) => {
  try {
    const billList = await Bill.findAll({
      include: [{ model: User }],
    });
    // const cinemaList = await Bill.findAll({
    //   include: [
    //     {
    //       model: User,
    //     },
    //   ],
    // });
    res.status(200).send(billList);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getBillList };
