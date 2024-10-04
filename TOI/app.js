const app = require('express')();

app.use(logger);

function logger(req,res,next){
    console.log("here in server")
};


app.all("/",middlware);

function middlware(req,res,next){

}