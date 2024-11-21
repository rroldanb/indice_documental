import { Sequelize } from 'sequelize'
import config  from '../config/dotenv.js'


const db = new Sequelize(
    config.db_database,
    config.db_user,
    config.db_password,
    {
        host: config.db_host,
        dialect: config.db_dialect,
        logging: false
    })


export default db
