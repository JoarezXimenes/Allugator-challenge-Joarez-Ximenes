import { Model, STRING, BOOLEAN } from 'sequelize';
import db from '.';
import { Users } from './Users';
import { Products } from './Products'

class Signatures extends Model {
  id: string;
  username: string;
  role: string;
  email: string;
  password: string;
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
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

Users.hasMany(Signatures, { foreignKey: 'userId', as: 'UserId' });
Products.belongsTo(Signatures, { foreignKey: 'productId', as: 'productId' })

export { Signatures };