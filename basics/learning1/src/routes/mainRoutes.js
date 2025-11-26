import express from 'express'

import {contact, home} from "../controller/mainController.js"

const router = express.Router();

router.get("/",home);
router.get("/contact",contact)


export default router;