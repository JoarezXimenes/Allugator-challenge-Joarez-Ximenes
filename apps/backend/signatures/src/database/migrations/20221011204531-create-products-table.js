'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(2000),
        allowNull: false
      }
    },{
      timestamps: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};