import mongoose from "mongoose";
import Role from "../model/role.model.js"
import bcrypt from "bcrypt";



const roles = [{ role: 'admin', roleDescription: "Manage user , Assign flat to resident, generate bills, manage complaints", password: await bcrypt.hash('raman18113114', 10)

 },
{ role: 'resident', roleDescription: 'Raise complaints,accept visitor entry' },
{ role: 'security_guard', roleDescription: 'visitor log,accept visitor entry' }]


const seedRoles= async()=>{
    try {
         const connection = await mongoose.connect('mongodb://localhost:27017/sms');
         console.log('connection is up')
     const newRole= await Role.insertMany(roles)
     console.log(newRole);
    } 
   
    catch (error) {
        console.log(error)
    }
}

seedRoles()