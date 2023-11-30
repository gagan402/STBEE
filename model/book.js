

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    name:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    }
    ,
    genre:{
        type:String,
        required:true
    }
    ,
    publicationYear:{
        type:Number,
        required:true
    }
    ,
    ISBN:{
        type:String,
        required:true
    }
    
});
module.exports=mongoose.model("Book",bookSchema);