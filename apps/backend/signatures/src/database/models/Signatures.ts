import { Model, STRING, BOOLEAN } from 'sequelize';
import db from '.';
import { Users } from './Users';
import { Products } from './Products'

class Signatures extends Model {
  id: string;
  userId: string;
  productId: string;
  active: boolean;
}

Signatures.init({
  id: {
    type: STRING,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  userId: {
    type: STRING,
    allowNull: false,
  },
  productId: {
    type: STRING,
    allowNull: false,
  },
  active: {
    type: BOOLEAN,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'signatures',
  underscored: true,
  timestamps: false,
});

Products.belongsToMany(Users, {
  as: 'users',
  through: Signatures,
  foreignKey: 'productId',
  otherKey: 'userId'
});

Users.belongsToMany(Products, {
  as: 'products',
  through: Signatures,
  foreignKey: 'userId',
  otherKey: 'productId'
})


export { Signatures };