import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema({
    createdAt: { type: Date, default: Date.now() },
    stripeId: { type: String, required: true, unique: true },
    amount: { type: String, required: true },
    plan: { type: String, required: true },
    credits: { type: Number },
    buyer: {type: Schema.Types.ObjectId,ref: "User",},
});

const Transaction = models?.Transaction || model("Transaction", ImageSchema);
export default Transaction;
