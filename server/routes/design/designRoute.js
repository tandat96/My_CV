const { connectWithDesign } = require('../../models/database')
const GetAllDesign = async (req,res,next)=>{
    try{
        const designs = await connectWithDesign.find()
        return res.json(designs)
    }catch(err){
        console.log(err)
    }
}

const AddNewDesign = async (req,res,next)=>{
    const {skill,ratingDesign} = req.body
    try {
        const newDesign = new connectWithDesign({skill,ratingDesign})
        await newDesign.save()
        return res.json(newDesign)
    }catch(err){
        console.log(err)
    }
}
const DeleteDesign = async (req, res, next) => {
    try {
        const design = await connectWithDesign.findById(req.params.designID)
        await design.remove()
        return res.json({ designID: req.params.designID })
    } catch (err) {
        console.log(err)
    }
}
module.exports={GetAllDesign,AddNewDesign,DeleteDesign}