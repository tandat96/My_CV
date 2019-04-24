const mongoose = require('mongoose')

const avatar = new mongoose.Schema({ image: { type: String, required: true }, name: { type: String, required: true } }, { collection: 'avatar' });
const connectWithAvatar = mongoose.model('avatar', avatar)

const infomation = new mongoose.Schema({ image: { type: String, required: true }, date: { type: Date, required: true }, title: { type: String, required: true }, content: { type: String, required: true } }, { collection: 'infomation' });
const connectWithInfomation = mongoose.model('infomation', infomation)

const education = new mongoose.Schema({ date: { type: Date, required: true }, title: { type: String, required: true }, local: { type: String, required: true }, content: { type: String, required: true } }, { collection: 'education' })
const connectWithEducation = mongoose.model('education', education)

const experience = new mongoose.Schema({ date: { type: Date, required: true }, title: { type: String, required: true }, company: { type: String, required: true }, content: { type: String, required: true } }, { collection: 'experience' })
const connectWithExperience = mongoose.model('experience', experience)

const coding = new mongoose.Schema({ skill: { type: String, required: true }, ratingCode: { type: Number, required: true } }, { collection: 'coding' })
const connectWithCoding = mongoose.model('coding', coding)

const design = new mongoose.Schema({ skill: { type: String, required: true }, ratingDesign: { type: Number, required: true } }, { collection: 'design' })
const connectWithDesign = mongoose.model('design', design)

const contact = new mongoose.Schema({ nameInfo: { type: String, required: true }, value: { type: String, required: true } }, { collection: 'contact' })
const connectWithContact = mongoose.model('contact', contact)

module.exports = {
    connectWithAvatar,
    connectWithInfomation,
    connectWithEducation,
    connectWithExperience,
    connectWithCoding,
    connectWithDesign,
    connectWithContact
}
// db.createCollection("avatar")
// db.createCollection("infomation") 
// db.createCollection("education") 
// db.createCollection("experience") 
// db.createCollection("coding") 
// db.createCollection("design") 
// db.createCollection("contact") 
