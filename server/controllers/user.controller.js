import User from "../model/user.model.js";
import { generateHash } from "../lib/hashPassword.js";

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { password } = req.body;

    const hashed = await generateHash(password);

    const user = await User.create({
      ...req.body,
      password: hashed,
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate("role")
      .populate("flat");

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE USER
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("role")
      .populate("flat");

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};