import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../../../config/db/connection';

// Define the Survey attributes interface
interface SurveyParticipantAttributes {
  id?: number;
  surveyId?: string;
  participantUrl: string;
  ipAddress: string;
  deviceId: string;
  createdAt?: Date;
}

// Optional fields for creating a new survey
type SurveyParticipantCreationAttributes = Optional<SurveyParticipantAttributes, 'id'>;

// Survey model class
class SurveyParticipant extends Model<SurveyParticipantAttributes, SurveyParticipantCreationAttributes> implements SurveyParticipantAttributes {
  public id!: number;
  public surveyId!: string;
  public participantUrl!: string;
  public ipAddress!: string;
  public deviceId!: string;
  public readonly createdAt!: Date;
}

// Initialize the Survey model
SurveyParticipant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    surveyId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ipAddress: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    participantUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    deviceId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SurveyParticipant',
    tableName: 'surveyParticipants',
    timestamps: true,
    freezeTableName: true,
    indexes: [
        {
            fields: ['surveyId'],
            name: 'idx_survey_id',
          },
        {
            fields: ['ipAddress'],
            name: 'idx_ip',
          },
        {
            fields: ['deviceId'],
            name: 'idx_device_id',
          },
    ],
  }
);

export const created = () =>{
  SurveyParticipant.sync({force: true});
}
export default SurveyParticipant;
