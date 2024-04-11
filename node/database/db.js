import { Sequelize } from 'sequelize'

const db = new Sequelize(
    "notariaHLR",
    'ConsultaNotaria',
    'pepito123',
    {
        host: '192.168.0.180',
        dialect: 'mysql'
    })

export default db