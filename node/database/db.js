import { Sequelize } from 'sequelize'

const db = new Sequelize(
    "notariaHLR",
    'ConsultaNotaria',
    'pepito123!?"',
    {
        host: 'localhost',
        dialect: 'mysql'
    })

export default db
