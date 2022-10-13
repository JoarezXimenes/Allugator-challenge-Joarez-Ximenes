import { Model, FLOAT, STRING } from 'sequelize';
import db from '.';

class Products extends Model {
  id: string;
  username: string;
  role: string;
  email: string;
  password: string;
}

Products.init({
  id: {
    type: STRING,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  productName: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: FLOAT,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'products',
  underscored: true,
  timestamps: false,
});

export { Products };