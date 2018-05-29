/*===========================================================
=            bringing stuff in and setting it up            =
===========================================================*/
//mongo stuff
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId; 

const url = `mongodb://localhost:27017/`;

const nameOfDb = `AAA`;
const userTable = `users`


/*=====  End of bringing stuff in and setting it up  ======*/
/*=================================
=            functions            =
=================================*/

test = (req, res)=>{
	res.send("gui test")
}

login = (req, res)=>{

	console.log("thing");
	console.log(req.body);
	console.log("thing")

	//are they a user
	let isUser = false;
	let query = req.body;

	console.log("query");
	console.log(query);

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db(nameOfDb);
		dbo.collection(userTable).findOne(query, function(err, result) {
			if (err) throw err;
			// console.log("result");
			// console.log(result);
			if(result != null){
				isUser = true;
			}
			db.close();
			res.send(isUser);
		});
	});


}

createAccount = (req, res)=>{
	// console.log("createAccount");
	
	console.log(req.body);
	
	res.send("ayyy we are up boys");
}

/*=====  End of functions  ======*/


/*----------  exports  ----------*/
module.exports = {
	test,
	login,
	createAccount
}