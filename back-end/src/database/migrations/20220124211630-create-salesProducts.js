'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'sale_id'
      },
      productId: {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id',
        },
        type: Sequelize.INTEGER,
        field: 'product_id',
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};