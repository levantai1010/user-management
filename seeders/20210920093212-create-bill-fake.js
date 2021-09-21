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
    let arrBillFake = [];
    for (let index = 0; index < 10; index++) {
      if (index % 2 == 0) {
        arrBillFake.push({
          id: index + 1,
          agent: "Linh",
          purchaseDate: "2021-05-20",
          userID: 1,
          createdAt: "2021-05-20",
          updatedAt: "2021-05-20",
        });
      } else {
        arrBillFake.push({
          id: index + 1,
          agent: "Linh",
          purchaseDate: "2021-05-20",
          userID: 2,
          createdAt: "2021-05-20",
          updatedAt: "2021-05-20",
        });
      }
    }

    await queryInterface.bulkInsert("Bills", arrBillFake, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Bills", null, {});
  },
};
