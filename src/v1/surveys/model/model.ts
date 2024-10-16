import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../../../config/db/connection';

// Define the Survey attributes interface
interface SurveyAttributes {
  id?: number;
  surveyId?: string;
  surveyName: string | null;
  surveyDescription: string| null;
  surveyStatus: string;
  compeleteRequired?: number;
  isActive: boolean;
  logo?: string;
  totalPage: number;
  createdBy: string;
  updatedBy?: string;
  createdAt?: Date; // Will be set automatically
  updatedAt?: Date; // Will be set automatically
}

// Optional fields for creating a new survey
type SurveyCreationAttributes = Optional<SurveyAttributes, 'id' | 'surveyDescription' | 'logo' | 'updatedBy'>;

// Survey model class
class Survey extends Model<SurveyAttributes, SurveyCreationAttributes> implements SurveyAttributes {
  public id!: number;
  public surveyId!: string;
  public surveyName!: string| null;
  public surveyDescription!: string | null;
  public surveyStatus!: string;
  public compeleteRequired?: number;
  public isActive!: boolean;
  public logo?: string;
  public totalPage!: number;
  public createdBy!: string;
  public updatedBy?: string;

  // Automatically managed by Sequelize
  public readonly createdAt!: Date; 
  public readonly updatedAt!: Date; 
}

// Initialize the Survey model
Survey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    surveyId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    surveyName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    surveyDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    surveyStatus: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    compeleteRequired: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    totalPage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Survey',
    tableName: 'surveys',
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        unique: true,
        fields: ['surveyId'],
      },
    ],
  }
);

export default Survey;
