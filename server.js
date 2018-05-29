/*==============================================================
=            Bringing things in and setting them up            =
==============================================================*/

const express = require(`express`);
const app = express();
const port = 4000;
const bodyParser = require(`body-parser`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

/*=====  End of Bringing things in and setting them up  ======*/

const apiRouter = require("./routers/apiRouters.js");
const guiRouter = require("./routers/guiRouters.js");

app.use('/api', apiRouter);
app.use('/gui', guiRouter);

app.get("/*", (req, res)=>{
	res.send("that dose not seem to be a page")
})

/*----------  listen  ----------*/
app.listen(port, ()=>{
	console.log(`up at ${port}`);
});