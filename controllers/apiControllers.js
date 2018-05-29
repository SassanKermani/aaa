/*===========================================================
=            bringing stuff in and setting it up            =
===========================================================*/



/*=====  End of bringing stuff in and setting it up  ======*/
/*=================================
=            functions            =
=================================*/

test = (req, res)=>{
	res.send("api test");
	console.log(`test`);
}

/*=====  End of functions  ======*/


/*----------  exports  ----------*/
module.exports = {
	test
}