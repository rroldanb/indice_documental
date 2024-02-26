// imoprtar modelo

import BlogModel from "../models/BlogModel.js";

// metodos CRUD

// mostrar todos
export const getAllBlogs = async (req,res) =>{
    try {
        // const blogs = await BlogModel.findAll()
        const blogs = await BlogModel.findAll({
            //limit: 10000 ,// Limitar la consulta a los primeros 100 registros
            order: [['id', 'DESC']] // También puedes agregar otras opciones como order, where, etc., según sea necesario
        });
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

// mostrar uno
export const getBlog = async (req,res) =>{
    try {
        const blog = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

// crear uno
export const createBlog = async (req,res) =>{
    try {
        await BlogModel.create(req.body)
        res.json({
            "message":"Registro creado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// actualizar uno
export const updateBlog = async (req,res) =>{
    try {
        await BlogModel.update(req.body, {
            where: {id:req.params.id}
        } )
        res.json({
            "message":"Registro actualizado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// eliminar uno

export const deleteBlog = async (req,res) =>{
    try {
        await BlogModel.destroy( {
            where: {id:req.params.id}
        } )
        res.json({
            "message":"Registro eliminado con éxito"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}