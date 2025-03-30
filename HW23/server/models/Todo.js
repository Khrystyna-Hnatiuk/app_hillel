const {Schema, model}=  require('mongoose')
const toDoSchema  = new Schema({
  
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:false
    },
    dueDate :{
        type:String,
        required:true 
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=model("Todo",toDoSchema)