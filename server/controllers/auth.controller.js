// 
import User from "../model/user.model.js";
import Role from "../model/role.model.js";
import Flat from "../model/flat.model.js";
import { generateHash } from "../lib/hashPassword.js";
import { generatePassword } from "../lib/generatePassword.js";
import transporter from "../lib/sendMail.js";

export const register = async (req, res) => {
  try {
    const { name, email, phone, roleId, flatId } = req.body;

    // ✅ Check existing user
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: `User already exists with email: ${email}`
      });
    }

    // ✅ Check role
    const role = await Role.findById(roleId);
    if (!role) {
      return res.status(404).json({
        message: "Role not found"
      });
    }

    // ✅ If resident → flatId required
    if (role.role === "resident") {
      if (!flatId) {
        return res.status(400).json({
          message: `flatId is required for ${role.role}`
        });
      }

      // ✅ Check if flat exists
      const flat = await Flat.findById(flatId);
      if (!flat) {
        return res.status(404).json({
          message: "Flat not found"
        });
      }
    }

    // ✅ Generate password
    const password = generatePassword(8);
    const hashPass = await generateHash(password);

    // ✅ Create user
    const newUser = await User.create({
      name,
      email,
      phone,
      password: hashPass,
      role: roleId,
      flat: role.role === "resident" ? flatId : undefined
    });

    // ✅ FINAL RESPONSE (important!)
    return res.status(201).json({
      message: "User registered successfully",
      generatedPassword: password, // for testing
      user: newUser
    });
    transporter.sendMail({
      
    })

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};
export const login = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}