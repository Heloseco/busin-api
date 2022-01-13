'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TourName: {
        type: Sequelize.STRING
      },
      Day: {
        type: Sequelize.STRING
      },
      Month: {
        type: Sequelize.STRING
      },
      Year: {
        type: Sequelize.STRING
      },
      TravelTo: {
        type: Sequelize.STRING
      },
      BackAt: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schedules');
  }
};