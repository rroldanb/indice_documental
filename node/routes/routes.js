import express from 'express'
import { createDoc,
    //  deleteDoc, 
     getAllDocs, 
     getDoc
    //  , updateDoc 
    } from '../controllers/DocsController.js'

const router = express.Router()

router.get('/', getAllDocs)
router.get('/:id', getDoc)
router.post('/', createDoc)
// router.put('/:id', updateDoc)
// router.delete('/:id', deleteDoc)

export default router
