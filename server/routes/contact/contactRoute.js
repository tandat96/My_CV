const {connectWithContact} = require('../../models/database')

const GetAllContact = async (req,res,next)=>{
    try{
        const contacts = await connectWithContact.find()
        return res.json(contacts)
    }catch(err){
        console.log(err)
    }
}

const AddNewContact = async (req,res,next)=>{
    const {nameInfo,value} = req.body
    try {
        const newContact = new connectWithContact({nameInfo,value})
        await newContact.save()
        return res.json(newContact)
    }catch(err){
        console.log(err)
    }
}
const DeleteContact = async (req, res, next) => {
    try {
        const contact = await connectWithContact.findById(req.params.contactId)
        await contact.remove()
        return res.json({ contactId: req.params.contactId })
    } catch (err) {
        console.log(err)
    }
}
module.exports={GetAllContact,AddNewContact,DeleteContact}