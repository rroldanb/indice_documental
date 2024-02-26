import express from "express"
import cors from "cors"
//conexion a la DB
import db from "./database/db.js"
//enrutador
import router from "./routes/routes.js"

const blogRoutes = router
const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes) 

// try{
//     await db.authenticate()
//     console.log('conectado a la DB')
// } catch {
//     console.log(`el error es ${error}`)
// }

try {
    await db.authenticate();
    console.log('Conectado a la base de datos');
} catch (error) { // Añade el parámetro error aquí
    console.error('Ocurrió un error al conectar a la base de datos:', error.message);
}



app.listen(8000, ()=>{
    console.log('Server UP and runnig in http://localhost:8000/')
})