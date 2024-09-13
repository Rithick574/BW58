const express = require("express");
const app = express();

const checkMiddleware=(req,res,next)=>{
    if(req.method == "POST"){
        return res.status(403).json("forbidden:post requested are blocked")
    }
    next();
};

module.exports = checkMiddleware;