const { User } = require("../models");
const checkExist = async (req, res, next) => {
  const { id } = req.params;
  try {
    const userExist = await User.findOne({
      where: {
        id,
      },
    });
    if (userExist) {
      next();
    } else {
      res.status(404).send(`UserId ${id} not found`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { checkExist };
