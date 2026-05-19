const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa a ligação que criaste no passo anterior

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;