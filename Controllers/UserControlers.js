const { request,response } = require("express");
const jsonwt = require("../middleware/jsonwebtoken");
const Userdata = require("../others/requeteUser");
const bcrypt = require('bcrypt')


const dataUser = class{

    static GetUser = (req =request,res =response)=>{
        res.render('index')

    }

    static PostUser = async (req =request,res =response)=>{
        console.log(req.body);

        const user = await Userdata.InsertionUser(req.body)
        if (user.success) {
          const token=  jsonwt.CreerToken(user.success._id)
        //   res.cookie('jwt',token,{httpOnly:true , maxAge:3* 24 * 60 * 60 * 1000})
            res.status(201).redirect('/users/login')
        } else {
            res.status(400).json({"Une erreur est surveni":user.erreur})
        }
       

    }
    static LogintUser = (req =request,res =response)=>{
        res.render('login')

    }
    static LogintUserPost = async (req =request,res =response)=>{
      const login =await Userdata.UserLogin(req.body)
       if (login.success) {
        const auth = await bcrypt.compare(req.body.password,login.success.password)
        if (auth) {
            console.log('cest bon ',auth);
            const token=  jsonwt.CreerToken(login.success._id)
            res.cookie('jwt',token,{httpOnly:true , maxAge:3* 24 * 60 * 60 * 1000})
            // res.status(201).json({"Utilisateur Enregistrer avec success":user})
            res.status(201).redirect('/users/acceuil')
            
        } else {
            console.log("Mot de pase incorrect");
            
        }
        
       } else if(login.alert) {
        console.log("login.alert",login.alert);
        
       }else{
        console.log("error 404");
       }

    }

    static Accueil = async (req =request,res =response)=>{
        const user =await Userdata.UserAll()
        console.log("fgsd<",user.success);
        res.render('Acceuil',{"user":user.success})

    }
    static logout = (req =request,res =response)=>{
        res.cookie('jwt', '' ,{maxAge:1})
        res.redirect('/users/login')

    }
    static EditerGet =async (req =request,res =response)=>{
       const user = await Userdata.UserbyId(req.params.id)
       res.render('editer',{"user":user.success})
    
    }
    static EditerPost = async (req =request,res =response)=>{
        const user = await Userdata.UserUpdate(req.body)
        if (user.success) {
        res.status(201).redirect('/users/acceuil')
            
        } else {
            console.log('error404');
        }

 
     }

    static DeleteGet =async (req =request,res =response)=>{
        console.log(req.params.id);
        const user = await Userdata.UserDelete(req.params.id)
        if (user.success) {
            res.cookie('jwt', '' ,{maxAge:1})
            res.redirect('/users/login')
        } else {
           console.log("error 404"); 
        }
     
     }

}


module.exports = dataUser