// ipmortar conexion a la db

import db from "../database/db.js";

//importar sequelize
import {  DataTypes } from "sequelize";

// const BlogModel = db.define('blogs', {
//     title: {type: DataTypes.STRING},
//     content: {type:DataTypes.STRING},
// })
//Fojas	Repertorio	Year	Bimestre	Nombre1	Nombre2	CONT	Materia	FESC	FechaEscritura	N_BOLETA	Arancel	MATRI	Matricero	Dif_Corr	Observacion	createdAt	updatedAt	composite_id
const mytabla = "MasterIndex19982023"

const BlogModel = db.define(mytabla, {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    Fojas: {type:DataTypes.INTEGER},
    Repertorio: {type:DataTypes.INTEGER},
    Year: {type:DataTypes.INTEGER},
    Nombre1: {type: DataTypes.STRING},
    Nombre2: {type:DataTypes.STRING},
    Materia: {type:DataTypes.STRING},
    FechaEscritura: {type:DataTypes.STRING}
}, {
    tableName: mytabla,
    freezeTableName: true, 
});

export default BlogModel