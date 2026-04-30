// // 
// import User from "../model/user.model.js";
// import Role from "../model/role.model.js";
// import Flat from "../model/flat.model.js";
// import { generateHash } from "../lib/hashPassword.js";
// import { generatePassword } from "../lib/generatePassword.js";
// import transporter from "../lib/sendMail.js";
// import { newUserRegistrationTemplate } from "../templates/NewUserResgistration.js";

// export const register = async (req, res) => {
//   try {
//     const { name, email, phone, roleId, flatId } = req.body;

//     // ✅ Check existing user
//     const user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({
//         message: `User already exists with email: ${email}`
//       });
//     }

//     // ✅ Check role
//     const role = await Role.findById(roleId);
//     if (!role) {
//       return res.status(404).json({
//         message: "Role not found"
//       });
//     }

//     // ✅ If resident → flatId required
//     if (role.role === "resident") {
//       if (!flatId) {
//         return res.status(400).json({
//           message: `flatId is required for ${role.role}`
//         });
//       }

//       // ✅ Check if flat exists
//       const flat = await Flat.findById(flatId);
//       if (!flat) {
//         return res.status(404).json({
//           message: "Flat not found"
//         });
//       }
//     }

//     // ✅ Generate password
//     const password = generatePassword(8);
//     const hashPass = await generateHash(password);

//     // ✅ Create user
//     const newUser = await User.create({
//       name,
//       email,
//       phone,
//       password: hashPass,
//       role: roleId,
//       flat: role.role === "resident" ? flatId : undefined
//     });
//  const alluserData = await User.findById(newUser._id)
//   .populate('role')
//   .populate('flat');

//     // ✅ Send Email
//     try {
//       await transporter.sendMail({
//         from: `"SMS TEAM" <${process.env.SMTP_USER}>`,
//         to: newUser.email,
//         subject: "Welcome to SMS - Account Registration",
//         html: newUserRegistrationTemplate(password, newUser.name)
//       });
//       console.log('mail send')
//     } catch (emailError) {
//       console.error("Failed to send registration email:", emailError);
//     }

//     // ✅ FINAL RESPONSE (important!)
//     return res.status(201).json({
//       message: "User registered successfully",
//       generatedPassword: password, // for testing
//       user: newUser
//     });

//   } catch (error) {
//     return res.status(500).json({
//       message: "Server error",
//       error: error.message
//     });
//   }
// };
// export const login = async (req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// }

import Role from "../model/role.model.js";
import User from "../model/user.model.js";
import Flat from "../model/flat.model.js";
import { generateHash } from "../lib/hashPassword.js";
import { generatePassword } from "../lib/generatePassword.js";
import transporter from "../lib/sendMail.js";
import { newUserRegistrationTemplate } from "../templates/NewUserResgistration.js";

// ================= REGISTER =================
export const register = async (req, res) => {
  try {
    const { name, email, phone, roleId, flatId } = req.body;

    // ✅ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: `User already exists with email: ${email}`,
      });
    }

    // ✅ Check role
    const role = await Role.findById(roleId);
    if (!role) {
      return res.status(404).json({
        message: "Role not found",
      });
    }

    // ✅ If resident → flatId required
    let flatData = null;
    if (role.role === "resident") {
      if (!flatId) {
        return res.status(400).json({
          message: `FlatId is required for ${role.role}`,
        });
      }

      // ✅ Check flat exists
      flatData = await Flat.findById(flatId);
      if (!flatData) {
        return res.status(404).json({
          message: "Flat not found",
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
      flat: role.role === "resident" ? flatId : undefined,
    });

    // ✅ Populate user data
    const allUserData = await User.findById(newUser._id)
      .populate("role")
      .populate("flat");

    // ✅ Send Email (non-blocking safe)
    try {
      await transporter.sendMail({
        from: `"SMS TEAM" <${process.env.SMTP_USER}>`,
        to: newUser.email,
        subject: "Welcome to SMS - Account Registration",
        html: newUserRegistrationTemplate(password, newUser.name),
      });
      console.log("Mail sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
    }

    // ✅ Final response
    return res.status(201).json({
      message: "User registered successfully",
      data: allUserData,
      generatedPassword: password, // ⚠️ remove in production
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    // (You can implement login logic here)
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};