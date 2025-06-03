import mongoose from "mongoose";

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  amount:{
    type:Number,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  description:{
    type:String,
    trim:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const Expense = mongoose.model('Expense',expenseSchema);

export default Expense