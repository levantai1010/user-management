"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      // define association here
      // this.belongsTo(User, {
      //   foreignKey: "userID",
      // });
      this.hasMany(Product, {
        foreignKey: "billID",
      });
    }
  }
  Bill.init(
    {
      agent: DataTypes.STRING,
      purchaseDate: DataTypes.DATE,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bill",
    }
  );
  return Bill;
};
