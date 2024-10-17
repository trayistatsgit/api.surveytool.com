import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../../../config/db/connection';
import Survey from '../../surveys/model/model';
import SurveyQuestion from './question.model';

// Define the attributes interface for SurveyOption
interface SurveyOptionAttributes {
    optionId: number;
    questionId: number;
    surveyId: string;
    optionText: string | null;
    isActive: number;
    createdBy: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Optional fields for creating a new SurveyOption
type SurveyOptionCreationAttributes = Optional<SurveyOptionAttributes, 'optionId' | 'updatedBy'>;

// SurveyOption model class
class SurveyOption extends Model<SurveyOptionAttributes, SurveyOptionCreationAttributes> implements SurveyOptionAttributes {
    public optionId!: number;
    public questionId!: number;
    public surveyId!: string;
    public optionText!: string | null;
    public isActive!: number;
    public createdBy!: string;
    public updatedBy?: string;

    // Automatically managed by Sequelize
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initialize the SurveyOption model
SurveyOption.init(
    {
        optionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        surveyId: {
            type: DataTypes.CHAR(36),
            allowNull: false,
        },
        optionText: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        isActive: {
            type: DataTypes.TINYINT,
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
        modelName: 'SurveyOption',
        tableName: 'surveyOptions',
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
            {
                fields: ['questionId'],
                name: 'idx_question_id',
            },
        ],
    }
);

SurveyQuestion.hasMany(SurveyOption, {
    foreignKey: 'questionId',
    as: 'options',
  });
  SurveyOption.belongsTo(SurveyQuestion, {
    foreignKey: 'questionId',
  });
  


export default SurveyOption;
