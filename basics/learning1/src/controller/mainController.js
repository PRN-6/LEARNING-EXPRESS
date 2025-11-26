
import { contactDetails } from "../models/contentModel.js"


export const home = (req,res) => {
    res.send(200).json({message:"home controller"})
}

export const contact = (req, res) => {
    res.json(contactDetails)
}