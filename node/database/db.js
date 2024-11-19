import { Sequelize } from 'sequelize'
import config  from '../config/dotenv.js'

// const  db_database = config.db_database 
// const  db_user = config.db_user
// const  db_password = config.db_password
// const  db_host = config.db_host

const db = new Sequelize(
    config.db_database,
    config.db_user,
    config.db_password,
    {
        host: config.db_host,
        dialect: 'mysql',
        logging: false
    })

// const db = new Sequelize(
//     "notariaHLR",
//     'ConsultaNotaria',
//     'pepito123!?"',
//     {
//         host: 'localhost',
//         dialect: 'mysql'
//     })

    // console.log(db)
export default db
