export default function initUserModel(sequelize, DataTypes) {
    return sequelize.define(
        "users",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            email: {
                allowNull: false,
                unique: true,
                type: DataTypes.TEXT,
            },
            password: {
                allowNull: false,
                unique: true,
                type: DataTypes.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            underscored: true,
        }
    );
}
