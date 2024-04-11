import express from "express"
import cors from "cors"
import db from "./database/db.js"
import router from "./routes/routes.js"

const docRoutes = router
const app = express()

app.use(cors())
app.use(express.json())
app.use('/docs', docRoutes) 


// const express = require('express');
// const app = express();

// const mysql = require('mysql');


// Middleware para obtener la IP del cliente
app.use((req, res, next) => {
  req.clientIP = req.ip || req.remoteAddress;
//   console.log("IP cliente")
//   console.log(req.clientIP)
  next();
});




try {
    await db.authenticate();
    console.log('Conectado a la base de datos');
} catch (error) { 
    console.error('Ocurrió un error al conectar a la base de datos:', error.message);
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
        const timestamp = new Date().toLocaleString();
    // const mensajeLog = `${timestamp} - IP: ${req.clientIP} - Consulta ejecutada: ${consultaSQL}`;
    console.log(timestamp);
})
