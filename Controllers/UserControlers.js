const { request,response } = require("express");
const jsonwt = require("../middleware/jsonwebtoken");
const Userdata = require("../others/requeteUser");


const dataUser = class{

    static GetUser = (req =request,res =response)=>{
        res.render('index')

    }

    static PostUser = async (req =request,res =response)=>{
        console.log(req.body);

        const user = await Userdata.InsertionUser(req.body)
        if (user.success) {
          const token=  jsonwt.CreerToken(user.success._id)
          res.cookie('jwt',token,{httpOnly:true , maxAge:3* 24 * 60 * 60 * 1000})
            res.status(201).json({"Utilisateur Enregistrer avec success":user})
        } else {
            res.status(400).json({"Une erreur est surveni":user.erreur})
        }
       

    }
    static LogintUser = (req =request,res =response)=>{
        res.render('login')

    }

}


module.exports = dataUser