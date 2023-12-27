import mongoose from "mongoose";
import { Post } from "./blog";

const Schema= mongoose.Schema;

const likeSchema=new Schema({
    post:{
        type:Schema.Types.ObjectId,
        ref:'Post',
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
    }
})


const Like=mongoose.model("Like",likeSchema);

export {Like};