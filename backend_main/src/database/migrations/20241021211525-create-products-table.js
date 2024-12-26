'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      thumbnail_url: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      mock_up_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'mock_ups', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      cost_price: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      sale_price: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      size_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'sizes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      minimum_stock_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'minimum_stocks', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      link: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      featured: {
        defaultValue: false,
        type: Sequelize.DataTypes.BOOLEAN
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
    await queryInterface.dropTable('products')
  }
};
