import {Sequelize} from 'sequelize'

//conexion a la DB
// const db = new Sequelize('database_app', 'root', '', {
const db = new Sequelize("notariaHLR", 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

export default db