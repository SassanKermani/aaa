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

router.get(`/test`, controller.test);

/*=====  End of Routes  ======*/

/*----------  exports  ----------*/
module.exports = router;