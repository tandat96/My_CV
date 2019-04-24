const { connectWithExperience } = require('../../models/database')
const GetAllExperience = async (req,res,next)=>{
    try{
        const Experiences = await connectWithExperience.find()
        return res.json(Experiences)
    }catch(err){
        console.log(err)
    }
}

const AddNewExperience = async (req,res,next)=>{
    const {date,title,company,content} = req.body
    try {
        const newExperience = new connectWithExperience({date,title,company,content})
        await newExperience.save()
        return res.json(newExperience)
    }catch(err){
        console.log(err)
    }
}
const DeleteExperience = async (req, res, next) => {
    try {
        const experience = await connectWithExperience.findById(req.params.expID)
        await experience.remove()
        return res.json({ expID: req.params.expID })
    } catch (err) {
        console.log(err)
    }
}
module.exports={GetAllExperience,AddNewExperience,DeleteExperience}