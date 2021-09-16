const { User } = require("../models");
const bcrypt = require("bcryptjs");
const getUserList = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).send(userList);
    // res.status(200).send("userList");
  } catch (error) {
    res.status(500).send(error);
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
      phone,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(`Remove successfully userId ${id}`);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, role } = req.body;

  try {
    let userUpdate = await User.findOne({
      where: { id },
    });
    // if (userUpdate) {
    //   userUpdate.name = name;
    //   userUpdate.email = email;
    //   userUpdate.phone = phone;
    //   userUpdate.role = role;
    //   await userUpdate.save();
    //   res.status(201).send(userUpdate);
    // } else {
    //   res.status(404).send(`Not found`);
    // }
    userUpdate.name = name;
    userUpdate.email = email;
    userUpdate.phone = phone;
    userUpdate.role = role;
    await userUpdate.save();
    res.status(201).send(userUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getUserList,
  createUser,
  removeUser,
  updateUser,
};
