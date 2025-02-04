'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wallets', [
      {
        userId : 1,
        cryptoId : 1,
        balance : 0.00001,
      },
      {
        userId : 1,
        cryptoId : 6,
        balance : 10000,
      },
      {
        userId : 2,
        cryptoId : 2,
        balance : 0.00035,
      },
      {
        userId : 2,
        cryptoId : 3,
        balance : 3.65,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wallets', null, {});
  }
};
