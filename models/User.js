const  mongoose  = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    nom:{
        type:String,
        require:[ true]

    },
    prenom:{
        type:String,
        require: true

    },
    email:{
        type:String,
        require: true,
        unique: [true,'Email existe déjà'],
        validate:[(val)=>{} ,'svp renplisser ce champ']

    },
    numero:{
        type:Number,
        require: true,
        minLength:10

    },
    password:{
        type:String,
        require: true,
        minLength:6

    },


})



userSchema.pre('save', function( next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('user',userSchema)
module.exports = User