const { User } = require("../models");
const bcrypt = require("bcryptjs");
const signUp = async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const isAuth = bcrypt.compareSync(password, user.password);
      if (isAuth) {
        res.status(201).send(`SignIn successfully !`);
      } else {
        res.status(201).send(`Wrong password !`);
      }
    } else {
      res.status(404).send(`Not found email ${email}`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { signUp, signIn };
