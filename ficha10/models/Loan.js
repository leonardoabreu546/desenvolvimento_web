module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Loan",
        {
            loan_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            book_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            loan_date: {
                type: DataTypes.DATEONLY,
                allowNull: false,            },
            return_date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
        },
        {
            tableName: "Loans",
            timestamps: false,
        }
    );
}