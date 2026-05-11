import User from "../model/user.model.js";
import { generateHash } from "../lib/hashPassword.js";

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      phone,
      profilePhoto,
      flat,
    } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await generateHash(password);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      phone,
      profilePhoto,
      flat,
    });

    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate("role")
      .populate("flat");

    res.status(200).json({
      message: "success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET SINGLE USER
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id)
      .populate("role")
      .populate("flat");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = { ...req.body };

    // hash password if updated
    if (updatedData.password) {
      updatedData.password = await generateHash(updatedData.password);
    }

    const user = await User.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    )
      .populate("role")
      .populate("flat");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// DEACTIVATE USER
export const deActivateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deactivated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};