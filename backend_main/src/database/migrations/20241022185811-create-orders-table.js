'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      order: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER
      },
      product_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      quantity: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER
      },
      status: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'situations', key: 'id' },
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
    await queryInterface.dropTable('orders')
  }
};
