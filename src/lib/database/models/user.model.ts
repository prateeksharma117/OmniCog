import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema({
  clerkId:{type:String},
  email: {type:String},
  username: {type:String},
  photo: {type:String},
  firstName: {type:String},
  lastName: {type:String},
  planId: {type:Number,default:1},
  planType: {type:String,default:"Free"},
  creditBalance:{type:Number,default:5},
});

const User = models?.User || model("User", ImageSchema);
export default User;
