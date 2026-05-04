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
import { comparePassword, generateHash } from "../lib/hashPassword.js";
import { generatePassword } from "../lib/generatePassword.js";
import transporter from "../lib/sendMail.js";
import { newUserRegistrationTemplate } from "../templates/NewUserResgistration.js";
import { generateToken } from "../lib/generateToken.js";

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
// export const login = async (req, res) => {
//   try {
//     const{email, password}=req.body;
//     const user = await User.findOne({email}).populate('role')
// console.log(user)
//     if(!user){
//       return res.status(400).json({  message : "user is not registered, please try again"})
//     }
//     const isPasswordMatch = await comparePassword(password, user.password) 
//     if(!isPasswordMatch){
//        return res.status(401).json({
//         message:"password is incorrect"
//       })
//     }
//     const payload = {id: user._id ,name:user.name, email : user.email , role: user.role.role}
//      const token = generateToken(payload)
//      console.log(token)
//     res.cookie("token", token, {
//   httpOnly: true,
//   secure: false,   // 👈 FIX THIS
//   sameSite: "lax",
//   maxAge: 90000
// });
//      res.status(200).json({
//       message:"login successfully"
//      })
//   } catch (error) {
//     return res.status(500).json({
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };
// export const verify = async (req, res) => {
//   try {
//     return res.status(200).json({
//       message: "Token verified successfully",
//       user: req.user, // ✅ Now available
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Find user and populate role
    const user = await User.findOne({ email }).populate("role");
    console.log("USER:", user);

    if (!user) {
      return res.status(400).json({
        message: "User is not registered, please try again",
      });
    }

    // ✅ Check password
    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Password is incorrect",
      });
    }

    // ✅ FIX: ensure role exists
    if (!user.role || !user.role.role) {
      return res.status(500).json({
        message: "User role not properly assigned",
      });
    }

    // ✅ PAYLOAD (THIS WAS YOUR QUESTION AREA)
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role.role, // ✅ MUST be string (admin/resident/etc)
    };

    // ✅ Generate token
    const token = generateToken(payload);
    console.log("TOKEN:", token);

    // ✅ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // 🔴 change to true in production (HTTPS)
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // ✅ 1 day (your 90000 was too small)
    });

    // ✅ Response (include token for Postman testing)
    return res.status(200).json({
      message: "Login successfully",
      token,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// ================= VERIFY =================

export const verify = async (req, res) => {
  try {
    return res.status(200).json({
      message: "Token verified successfully",
      user: req.user, // ✅ comes from verifyToken middleware
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};