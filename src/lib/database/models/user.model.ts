import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema({
  clerkId:{type:String, required:true,unique:true},
  email: {type:String, required:true,unique:true},
  userName: {type:String, required:true,unique:true},
  photo: {type:String},
  firstName: {type:String},
  lastName: {type:String},
  planId: {type:Number,default:1},
  planType: {type:String,default:"Free"},
  creditBalance:{type:Number,default:50},
});

const User = models?.User || model("User", ImageSchema);
export default User;
