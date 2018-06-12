var express    			  	= require("express"),
    bodyParser 			  	= require("body-parser");

    var app=express();
    app.set("view engine","ejs");
    //Get request

    app.get("/",function(req,res) {
    	res.render("auth");
    })

app.listen(3000,function() {
	console.log("Running server @ port:3000")
});
