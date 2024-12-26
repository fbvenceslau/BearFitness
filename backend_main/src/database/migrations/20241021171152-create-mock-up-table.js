'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('mock_ups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      model: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      suppliers_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'suppliers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      note: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
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
    await queryInterface.dropTable('mock_ups')
  }
};
