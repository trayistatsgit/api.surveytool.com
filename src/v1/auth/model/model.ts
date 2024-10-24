import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../../config/db/connection';

interface IUserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: number; // optional, in case it's not set
}
interface UserCreationAttributes extends Optional<IUserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
class User extends Model<IUserAttributes,UserCreationAttributes> implements IUserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public isActive!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Corrected User.init structure
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    freezeTableName: true,
  }
);

export const create = () => {
  User.sync();
};

export default User;
export { IUserAttributes };
