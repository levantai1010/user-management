"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let arrProductFake = [];
    for (let index = 0; index < 10; index++) {
      if (index % 2 == 0) {
        arrProductFake.push({
          id: index + 1,
          name: "Hung",
          amount: 7,
          price: 150,
          billID: 2,
          createdAt: "2021-05-22",
          updatedAt: "2021-05-22",
        });
      } else {
        arrProductFake.push({
          id: index + 1,
          name: "Hoa",
          amount: 7,
          price: 150,
          billID: 3,
          createdAt: "2021-05-22",
          updatedAt: "2021-05-22",
        });
      }
    }
    await queryInterface.bulkInsert("Products", arrProductFake, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
