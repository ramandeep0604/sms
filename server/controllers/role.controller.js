import Role from "../model/role.model.js";

// CREATE ROLE
export const createRole = async (req, res) => {
  try {
    const { role, roleDescription } = req.body;

    const exists = await Role.findOne({ role });
    if (exists) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const newRole = await Role.create({ role, roleDescription });

    res.status(201).json({
      message: "Role created",
      data: newRole,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL ROLES
export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE ROLE
export const updateRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE ROLE
export const deleteRole = async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};