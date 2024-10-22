import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../config/db/connection';
class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
 
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
 
 
export const create =  () => {
   User.sync();
};
 
export default User;