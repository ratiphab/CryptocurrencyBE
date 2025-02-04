'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cryptocurrencies', [
      {
        symbol : "BTC",
        name : "Bitcoin",
        type : "crypto"
      },
      {
        symbol : "ETH",
        name : "Ethereum",
        type : "crypto"
      },
      {
        symbol : "DOGE",
        name : "Dogecoin",
        type : "crypto"
      },
      {
        symbol : "XRP",
        name : "XRP",
        type : "crypto"
      },
      {
        symbol : "BNB",
        name : "BNB",
        type : "crypto"
      },
      {
        symbol : "THB",
        name : "Thai Baht",
        type : "fiat"
      },
      {
        symbol : "USD",
        name : "United States Dollar",
        type : "fiat"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cryptocurrencies', null, {});
  }
};
