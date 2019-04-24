const { connectWithCoding } = require('../../models/database')

const GetAllCoding = async (req,res,next)=>{
    try{
        const coding = await connectWithCoding.find()
        return res.json(coding)
    }catch(err){
        console.log(err)
    }
}

const AddNewCoding = async (req,res,next)=>{
    const {skill,ratingCode} = req.body
    try {
        const newCoding = new connectWithCoding({skill,ratingCode})
        await newCoding.save()
        return res.json(newCoding)
    }catch(err){
        console.log(err)
    }
}
const DeleteCoding = async (req, res, next) => {
    try {
        const coding = await connectWithCoding.findById(req.params.codeID)
        await coding.remove()
        return res.json({ codeID: req.params.codeID })
    } catch (err) {
        console.log(err)
    }
}
module.exports={GetAllCoding, AddNewCoding, DeleteCoding}