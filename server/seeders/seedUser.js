import mongoose from "mongoose";
import Role from "../model/role.model.js"
import User from "../model/user.model.js";
import bcrypt from "bcrypt";



const seedUser = async () => {
  try {
    const connection = await mongoose.connect('mongodb://localhost:27017/sms');

    const hashedPassword = await bcrypt.hash('raman18113114', 15);

    const UserData = {
      name: "Raman",
      email: "ramandeepkaur4619@gmail.com",
      password: hashedPassword,
      role: "69eb0f0a70c025e1eacb3600",
    };

    const newUser = await User.create(UserData);

    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

seedUser()