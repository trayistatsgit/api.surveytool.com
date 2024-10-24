import { DataTypes, Model, UUIDV4 } from 'sequelize';
import sequelize from '../../../../config/db/connection';

class User extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public userId!: string;
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
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
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
        indexes:[
            {
                fields: ['userId'],
                name:'idx_userid'
              },
        ]
    }
);
export const creates = () => {
    User.sync();
};

export default User;
