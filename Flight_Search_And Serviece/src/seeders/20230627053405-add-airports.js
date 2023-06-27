'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Indira Gandhi International Airport',
        address: 'Airport Road',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Safdarjung Airport',
        address: 'Airport Road',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Netaji Subhas Chandra Bose International Airport',
        address: 'Airport Road',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '	Behala Airport',
        address: 'Airport Road',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Anna International Terminal',
        address: 'Airport Road',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: ' Kamaraj Domestic Terminal',
        address: 'Airport Road',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sardar Vallabhbhai Patel International Airport',
        address: 'Airport Road',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dholera International Airport',
        address: 'Airport Road',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sri Guru Ram Das Jee International Airport',
        address: 'Airport Road',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lokpriya Gopinath Bordoloi International Airport',
        address: 'Airport Road',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dabolim Airport',
        address: 'Airport Road',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Manohar International Airport',
        address: 'Airport Road',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sheikh ul-Alam International Airport',
        address: 'Airport Road',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jaipur International Airport',
        address: 'Airport Road',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kozhikode International Airport',
        address: 'Airport Road',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Thiruvananthapuram International Airport',
        address: 'Airport Road',
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Veer Savarkar International Airport',
        address: 'Airport Road',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        address: 'Airport Road',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Navi Mumbai International Airport ',
        address: 'Airport Road',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rajiv Gandhi International Airport',
        address: 'Airport Road',
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Begumpet Airport',
        address: 'Airport Road',
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kempegowda International Airport',
        address: 'Airport Road',
        cityId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cochin International Airport',
        address: 'Airport Road',
        cityId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Babasaheb Ambedkar International Airport',
        address: 'Airport Road',
        cityId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
