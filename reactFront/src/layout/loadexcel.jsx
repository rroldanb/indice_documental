
// import * as fs from 'fs';
import { useState } from 'react';
import * as XLSX from 'xlsx';
// XLSX.set_fs(fs);

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const btnUpload = document.getElementById('btnUpload');
    const btnImport = document.getElementById('btnImport');
  
    btnUpload.addEventListener('click', () => {
      fileInput.click();
    });
  
    fileInput.addEventListener('change', () => {
      console.log (fileInput.files.length)
      if (fileInput.files.length > 0) {
        btnImport.disabled = false;
      } else {
        btnImport.disabled = true;
      }
    });
  
    btnImport.addEventListener('click', () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    
          // Aquí puedes realizar la lógica para procesar los datos del archivo Excel

          console.log('Datos del archivo Excel:', excelData);
          // Puedes agregar la lógica de importación aquí
          alert('Se importará el archivo a la base de datos.');
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert('Por favor selecciona un archivo Excel.');
      }
      })
  });
  

  // import mysql  from 'mysql';

// Configura la conexión a tu base de datos MySQL
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'usuario',
//   password: 'contraseña',
//   database: 'nombre_base_de_datos'
// });

// Conecta a la base de datos
// connection.connect(err => {
//   if (err) {
//     console.error('Error de conexión a la base de datos:', err);
//     return;
//   }
//   console.log('Conectado a la base de datos MySQL');
// });

// Lee el archivo Excel
// const workbook = XLSX.readFile('archivo_excel.xlsx');
// const sheetName = workbook.SheetNames[0];
// const worksheet = workbook.Sheets[sheetName];
// const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// Procesa los datos y genera las consultas SQL

// excelData.forEach(row => {
//   const [foja, repertorio, año, bimestre, nombre1, nombre2, materia, fechaEscritura, nBoleta, monto, matri, observaciones] = row;

  // Crea la consulta SQL para insertar o actualizar los registros en tu tabla
  // const sql = `
  //   INSERT INTO Indice2023_ori (Foja, Repertorio, Año, Bimestre, Nombre_1, Nombre_2, Materia, Fecha_Escritura, N_Boleta, Monto, MATRI, Observaciones)
  //   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  //   ON DUPLICATE KEY UPDATE
  //   Repertorio = VALUES(Repertorio),
  //   Bimestre = VALUES(Bimestre),
  //   Nombre_1 = VALUES(Nombre_1),
  //   Nombre_2 = VALUES(Nombre_2),
  //   Materia = VALUES(Materia),
  //   Fecha_Escritura = VALUES(Fecha_Escritura),
  //   N_Boleta = VALUES(N_Boleta),
  //   Monto = VALUES(Monto),
  //   MATRI = VALUES(MATRI),
  //   Observaciones = VALUES(Observaciones);
  // `;

  // console.log(sql)

  // Ejecuta la consulta SQL
//   connection.query(sql, [foja, repertorio, año, bimestre, nombre1, nombre2, materia, fechaEscritura, nBoleta, monto, matri, observaciones], (err, results) => {
//     if (err) {
//       console.error('Error al insertar o actualizar el registro:', err);
//     } else {
//       console.log('Registro insertado o actualizado correctamente');
//     }
//   });

//  });

// Cierra la conexión a la base de datos al finalizar
// connection.end();
