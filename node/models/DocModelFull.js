import db from "../database/db.js";
import { DataTypes } from "sequelize";

const mytabla = "MasterIndex19982023";

const DocModelFull = db.define(mytabla, {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  Fojas: { type: DataTypes.INTEGER, allowNull: true },
  Repertorio: { type: DataTypes.INTEGER, allowNull: true },
  Bimestre: { type: DataTypes.INTEGER, allowNull: true },
  Year: { type: DataTypes.INTEGER, allowNull: true },
  Nombre1: { type: DataTypes.STRING(220), allowNull: true },
  Nombre2: { type: DataTypes.STRING(220), allowNull: true },
  CONT: { type: DataTypes.STRING(150), allowNull: true },
  Materia: { type: DataTypes.STRING(150), allowNull: true },
  FESC: { type: DataTypes.STRING(25), allowNull: true },
  FechaEscritura: { type: DataTypes.STRING(25), allowNull: true },
  N_BOLETA: { type: DataTypes.STRING(50), allowNull: true },
  Arancel: { type: DataTypes.STRING(50), allowNull: true },
  MATRI: { type: DataTypes.STRING(50), allowNull: true },
  Matricero: { type: DataTypes.STRING(50), allowNull: true },
  Dif_Corr: { type: DataTypes.STRING(10), allowNull: true },
  Observacion: { type: DataTypes.STRING(150), allowNull: true },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,

  },

'Year-Rep': {type:DataTypes.STRING(10), allowNull:true}

}, {
  tableName: mytabla,
  freezeTableName: true,
});

export default DocModelFull;
