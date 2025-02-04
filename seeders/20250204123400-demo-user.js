'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username : 'JohnDoe',
        name: 'John Doe',
        email: 'john@example.com',
        password : '$2y$10$chAuVfkNQKisLirNjTDJwebotA9fM4QX7x8S1GJKMIPtkpT0Y6LOu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username : 'JaneSmith',
        name: 'Jane Smith',
        email: 'jane@example.com',
        password : '$2y$10$e9yFYr/DOgIAwkIjowARiuI9Lb1y39WfetvzeVrM.9tm2Oc7QSoqC',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
