// src/v1/model/questionType.ts

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../config/db/connection';

class questionType extends Model {
  public id!: number;
  public name!: string;
  public isActive!: boolean;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

questionType.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'questionTypes',
    freezeTableName: true,
  }
);

export const createDAta = () =>{
  questionType.sync({force:false})
}
export default questionType;
