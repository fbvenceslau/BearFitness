'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('minimum_stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      minimum_quantity: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      alert_active: {
        defaultValue: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('minimum_stocks')
  }
};
