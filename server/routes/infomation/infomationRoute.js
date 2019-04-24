const { connectWithInfomation } = require('../../models/database')

const GetAllInfomation = async (req,res,next)=>{
    try{
        const infomations = await connectWithInfomation.find()
        return res.json(infomations)
    }catch(err){
        console.log(err)
    }
}

const AddNewInfomation = async (req,res,next)=>{
    const {image,date,title,content} = req.body
    try {
        const newInfomation = new connectWithInfomation({image,date,title,content})
        await newInfomation.save()
        return res.json(newInfomation)
    }catch(err){
        console.log(err)
    }
}
const DeleteInfomation = async (req, res, next) => {
    try {
        const Infomation = await connectWithInfomation.findById(req.params.blogID)
        await Infomation.remove()
        return res.json({ blogID: req.params.blogID })
    } catch (err) {
        console.log(err)
    }
}
module.exports={GetAllInfomation,AddNewInfomation,DeleteInfomation}