import mongoose  from 'mongoose'


const roleSchema= new mongoose.Schema({
 role:{
        type:String,
        enum:['admin','resident','security_guard'],
        unique: true,
        trim: true
    },
roleDescription:{
        type : String
    }
    })
    const Role = mongoose.model('Role',roleSchema)
    export default Role;