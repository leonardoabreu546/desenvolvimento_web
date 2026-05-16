module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "User",
        {
            user_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            tableName: "Users",
            timestamps: false,
        }
    );
}
