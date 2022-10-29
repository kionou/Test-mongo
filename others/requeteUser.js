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

    static UserLogin= async(into) =>{
        const {email} = into  
        return new Promise(async (next)=>{  
        await User.findOne({email})
            .then(resultat=>{
                console.log('ss',resultat);
                if (resultat != null) {
                    next({success:resultat})
                    
                } else {
                    next({alert:"'Email ou le mot de passe est incoorect !"})
                }
                
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static UserAll=  ()=>{
        return new Promise(async (next)=>{
            User.find({})
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }
    static UserbyId=  (into)=>{
        return new Promise(async (next)=>{
            User.findById({_id:into})
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static UserUpdate=  (into)=>{
        const {id,nom,prenom,email,numero,password} = into
        return new Promise(async (next)=>{
            User.findByIdAndUpdate(id,{nom,prenom,email,numero,password})
            .then(resultat=>{
                console.log('ss',resultat);
                next({success:resultat})
            }).catch(err=>{
                console.log("eee",err);
                next ({ erreur:err})
           })
        })

    }

    static UserDelete=  (into)=>{
       
        return new Promise(async (next)=>{
            User.findOneAndDelete({_id:into})
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

   
      
          
    
      
    