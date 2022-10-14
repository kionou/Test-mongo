const { request,response } = require("express");

const dataUser = class{

    static GetUser = (req =request,res =response)=>{
        res.json('req.body')

    }

    static PostUser = (req =request,res =response)=>{
        res.json(req.body)
        console.log(req.body);

    }

}


module.exports = dataUser