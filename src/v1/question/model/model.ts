import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../../../config/db/connection';
import Survey from '../../surveys/model/model';

// Define the attributes interface for SurveyQuestion
interface SurveyQuestionAttributes {
  questionId?: number;
  surveyId: string;
  questionName: string | null;
  questionTypeId?: number; // Make optional if it can be null
  isActive: number;
  pageNo: number;
  createdBy: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields for creating a new SurveyQuestion
type SurveyQuestionCreationAttributes = Optional<SurveyQuestionAttributes, 'questionId' | 'updatedBy'>;

// SurveyQuestion model class
class SurveyQuestion extends Model<SurveyQuestionAttributes, SurveyQuestionCreationAttributes> implements SurveyQuestionAttributes {
  public questionId!: number;
  public surveyId!: string;
  public questionName!: string | null;
  public questionTypeId?: number; // Ensure this is marked optional
  public isActive!: number;
  public pageNo!: number;
  public createdBy!: string;
  public updatedBy?: string;

  // Automatically managed by Sequelize
  public readonly createdAt!: Date; 
  public readonly updatedAt!: Date; 
}

// Initialize the SurveyQuestion model
SurveyQuestion.init(
  {
    questionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    surveyId: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: Survey,
        key: 'surveyId',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    questionName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    questionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
    pageNo: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
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
    modelName: 'SurveyQuestion',
    tableName: 'surveyQuestions',
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        fields: ['surveyId', 'isActive'],
        name: 'idx_survey_active',
      },
      {
        fields: ['surveyId'],
        name: 'idx_survey_id',
      },
    ],
  }
);

Survey.hasMany(SurveyQuestion, {
  foreignKey: 'surveyId',
  sourceKey: 'surveyId',
  as: 'surveyQuestions',
});

SurveyQuestion.belongsTo(Survey, {
  foreignKey: 'surveyId',
  targetKey: 'surveyId',
  as: 'survey',
});

export default SurveyQuestion;
