'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('movements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      product_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      flow_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'flows', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      quantity: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },
      current: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER 
      },
      note: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('movements')
  }
};
