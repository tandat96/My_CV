var express = require('express');
var router = express.Router();

const data = require('./dataRoute')
const info = require('./infomation/infomationRoute')
const edu = require('./education/educationRoute')
const exp = require('./experience/experienceRoute')
const coding = require('./coding/codingRoute')
const design = require('./design/designRoute')
const contact = require('./contact/contactRoute')


/* GET home page. */
router.get('/', data.ShowDataOfAvatar)

//infomation route
router.get('/blog',info.GetAllInfomation)
router.post('/blog',info.AddNewInfomation)
router.post('/blog/:blogID',info.DeleteInfomation)

//education route
router.get('/education', edu.GetAllEducation)
router.post('/education', edu.AddNewEducation)
router.post('/education/:eduID',edu.DeleteEducation)


//experience route
router.get('/experience', exp.GetAllExperience)
router.post('/experience', exp.AddNewExperience)
router.post('/experience/:expID',exp.DeleteExperience)

//design route
router.get('/design', design.GetAllDesign)
router.post('/design', design.AddNewDesign)
router.post('/design/:designID',design.DeleteDesign)

//coding route
router.get('/coding', coding.GetAllCoding)
router.post('/coding', coding.AddNewCoding)
router.post('/coding/:codeID', coding.DeleteCoding)

//contact route
router.get('/contact', contact.GetAllContact)
router.post('/contact',contact.AddNewContact)
router.post('/contact/:contactId',contact.DeleteContact)


module.exports = router;
