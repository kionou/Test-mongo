const User = require("../models/User");

const Userdata = class{

    static InsertionUser=  (into)=>{
        const {nom,prenom,email,numero,password} = into
        return new Promise(async (next)=>{
            User.create({nom,prenom,email,numero,password})
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }
}


module.exports = Userdata

   
      
          
    
      
    