const { Sequelize, DataTypes } = require('sequelize')

const BooksModel = require('./models/book')
const UsersModel = require('./models/user')
const LoansModel = require('./models/loan')

const sequelize = new Sequelize('ficha10', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Book = BooksModel(sequelize, DataTypes)
const User = UsersModel(sequelize, DataTypes)
const Loan = LoansModel(sequelize, DataTypes)

User.hasMany(Loan, { foreignKey: 'user_id' })
Book.hasMany(Loan, { foreignKey: 'book_id' })
Loan.belongsTo(Book, { foreignKey: 'book_id' })
Loan.belongsTo(User, { foreignKey: 'user_id' })

async function main() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')

        await sequelize.sync()
        console.log('Tables synchronized successfully.')
    } catch (error) {
        console.log(error)
    }
}

main()

module.exports = {
    Book,
    User,
    Loan
};