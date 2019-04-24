

const { connectWithAvatar,
    connectWithInfomation,
    connectWithEducation,
    connectWithExperience,
    connectWithCoding,
    connectWithDesign,
    connectWithContact } = require('../models/database')

function ShowDataOfAvatar(req, res, next) {
    let logined =req.isAuthenticated()
    connectWithAvatar.find({}, function (err, avatars) {
        connectWithEducation.find({}, function (err, educations) {
            connectWithExperience.find({}, function (err, experiences) {
                connectWithCoding.find({}, function (err, codes) {
                    connectWithDesign.find({}, function (err, designs) {
                        connectWithContact.find({}, function (err, contacts) {
                            connectWithInfomation.find({}, function (err, infomations) {
                                // res.render('index', {
                                res.send({
                                    title: 'CV',
                                    logined,
                                    avatar: avatars,
                                    education: educations,
                                    experience: experiences,
                                    coding: codes,
                                    design: designs,
                                    infomation: infomations,
                                    contact: contacts
                                })
                            })
                        })
                    })
                })
            })
        })
    })







}



module.exports = { ShowDataOfAvatar }