import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../../../config/db/connection';
import Survey from './model';
import SurveyQuestion from '../../question/model/question.model';
import SurveyParticipant from './surveyParticipants.model';

// Define the Survey attributes interface
interface SurveyParticipantReplyAttributes {
  id?: number;
  rId?: number;
  surveyId: string;
  questionId: number;
  optionId: number | null;
  optionText: string| null;
  createdAt?: Date;
}

// Optional fields for creating a new survey
type SurveyParticipantCreationAttributes = Optional<SurveyParticipantReplyAttributes, 'id'>;

// Survey model class
class SurveyParticipantReply extends Model<SurveyParticipantReplyAttributes, SurveyParticipantCreationAttributes> implements SurveyParticipantReplyAttributes {
  public id!: number;
  public rId!: number;
  public surveyId!: string;
  public questionId!: number;
  public optionId!: number | null;
  public optionText!: string | null;
  public readonly createdAt!: Date;
}

SurveyParticipantReply.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    surveyId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Survey,
        key: 'surveyId',
      },
    },
    rId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SurveyParticipant,
        key: 'id',
      },
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SurveyQuestion,
        key: 'questionId',
      },
    },
    optionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    optionText: {
      type: DataTypes.STRING(350),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'SurveyParticipantReply',
    tableName: 'surveyParticipantReplies',
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        fields: ['surveyId'],
        name: 'idx_survey_id',
      },
      {
        fields: ['questionId'],
        name: 'idx_question_id',
      },
      {
        fields: ['rId'],
        name: 'idx_rId_id',
      },
    ],
  }
);

export const create = () =>{
  SurveyParticipantReply.sync({force: true});
}
export default SurveyParticipantReply;
