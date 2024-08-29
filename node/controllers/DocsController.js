// imoprtar modelo

import DocModel from "../models/DocModel.js";

// metodos CRUD

// mostrar todos
export const getAllDocs = async (req,res) =>{
console.log ('Origin:', req.headers.origin)
    try {
        const docs = await DocModel.findAll({
            //limit: 100 ,// Limitar la consulta a los primeros 100 registros
            order: [['id', 'DESC']] 
        });

        res.json(docs)
    } catch (error) {
        res.json({message: error.message})
    }
}

// mostrar uno
export const getDoc = async (req,res) =>{
    try {
        const doc = await DocModel.findAll({
            where:{id:req.params.id}
        })
        console.log("buscando datos")
        res.json(doc[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

// crear uno
// export const createDoc = async (req,res) =>{
//     try {
//         await DocModel.create(req.body)
//         res.json({
//             "message":"Registro creado con éxito"
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// actualizar uno
// export const updateDoc = async (req,res) =>{
//     try {
//         await DocModel.update(req.body, {
//             where: {id:req.params.id}
//         } )
//         res.json({
//             "message":"Registro actualizado con éxito"
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// eliminar uno

// export const deleteDoc = async (req,res) =>{
//     try {
//         await DocModel.destroy( {
//             where: {id:req.params.id}
//         } )
//         res.json({
//             "message":"Registro eliminado con éxito"
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }