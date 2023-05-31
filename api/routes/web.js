import express from 'express'
const router = express.Router()
import collegeController from '../controllers/collegeController.js';

router.get('/',collegeController.getAllDoc)
router.post('/',collegeController.createDoc)
router.get('/:id',collegeController.getSingleDocById)
router.put('/:id',collegeController.updateDocById)
router.delete('/:id',collegeController.deleteDocById)


export default router