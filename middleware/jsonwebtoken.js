const jwt = require('jsonwebtoken');

const jsonwt = class{
    static CreerToken = (into)=>{
        let dataUser ={...into};
        const token = jwt.sign(dataUser, 'cHJvamV0IGRfZWR1Y2F0aW9u');
        console.log(token);
        return token;
      
    }

    static VerifierToken=(token)=>{
       

        try {
            const decodedToken = jwt.verify(token, 'cHJvamV0IGRfZWR1Y2F0aW9u');
            console.log(decodedToken) 
            return decodedToken
        } catch (error) {
            console.log('Token non valide');
        }
    }
}


module.exports=jsonwt;