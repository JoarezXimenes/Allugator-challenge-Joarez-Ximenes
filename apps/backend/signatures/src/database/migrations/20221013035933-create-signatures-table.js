'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('signatures', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      product_id: {
        type: Sequelize.STRING,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    },{
      timestamps: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('signatures');
  }
};
