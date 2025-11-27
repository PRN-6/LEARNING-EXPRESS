import express from 'express'
import { contact, home } from '../controllers/mainController.js'


const router = express.Router()

router.get('/', home)
router.get('/contect', contact)


export default router