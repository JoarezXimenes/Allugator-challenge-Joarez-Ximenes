import { Model, STRING } from 'sequelize';
import db from '.';

class Users extends Model {
  id: string;
  userName: string;
  email: string;
  password: string;
}

Users.init({
  id: {
    type: STRING,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  userName: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

export {Users};