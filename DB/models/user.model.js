import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
        enum:['Male,Female'],
    },
    confermEmail:{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true,
});

const userModel = mongoose.model('User',userSchema);
export default userModel;