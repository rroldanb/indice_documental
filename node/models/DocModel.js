import db from "../database/db.js";
import {  DataTypes } from "sequelize";

const mytabla = "MasterIndex19982023"

const DocModel = db.define(mytabla, {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    Fojas: {type:DataTypes.INTEGER},
    Repertorio: {type:DataTypes.INTEGER},
    Year: {type:DataTypes.INTEGER},
    Nombre1: {type: DataTypes.STRING},
    Nombre2: {type:DataTypes.STRING},
    Materia: {type:DataTypes.STRING},
    FechaEscritura: {type:DataTypes.STRING},
    'Year-Rep': {type:DataTypes.STRING}
}, {
    tableName: mytabla,
    freezeTableName: true, 
});

export default DocModel