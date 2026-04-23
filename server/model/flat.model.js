import mongoose,{mongoose} from "mongoose"
const FlatSchema= new mongoose.Schema({
    flatNumber:{
        type:Number,
    },
    block:{
        type:String
    },
    floor:{
        type:Number
    }
    
})
const Flat=mongoose.model('Flat',flatSchema)
export default Flat;