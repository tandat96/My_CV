const { connectWithEducation } = require('../../models/database')

const GetAllEducation = async (req, res, next) => {
    try {
        const Educations = await connectWithEducation.find()
        return res.json(Educations)
    } catch (err) {
        console.log(err)
    }
}

const AddNewEducation = async (req, res, next) => {
    const { date, title, local, content } = req.body
    try {
        const newEducation = new connectWithEducation({date,title,local,content})
        await newEducation.save()
        return res.json(newEducation)
    } catch (err) {
        console.log(err)
    }
}
const DeleteEducation = async (req, res, next) => {
    try {
        const education = await connectWithEducation.findById(req.params.eduID)
        await education.remove()
        return res.json({ eduID: req.params.eduID })
    } catch (err) {
        console.log(err)
    }
}
module.exports = { GetAllEducation, AddNewEducation, DeleteEducation }