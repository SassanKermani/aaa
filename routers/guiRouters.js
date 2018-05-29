/*===========================================================
=            Bringing stuff in and setting it up            =
===========================================================*/

const express = require(`express`);
const router = express.Router();

const controller = require(`../controllers/guiControllers.js`);

/*=====  End of Bringing stuff in and setting it up  ======*/

/*==============================
=            Routes            =
==============================*/

// test
router.get(`/test`, controller.test);

// main page one
router.get(`/home`, (req, res)=>{
	res.render(`../vews/mainPageOne.ejs`)
})

//creating new acount
router.get('/createAccount', (req, res)=>{
	res.render('../vews/createAccount.ejs');
})

//verifying user
router.post(`/login`, controller.login);

//adding user to db
router.post('/createAccount', controller.createAccount);


/*=====  End of Routes  ======*/

/*----------  exports  ----------*/
module.exports = router;