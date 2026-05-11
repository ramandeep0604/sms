import Flat from "../model/flat.model.js";

// CREATE FLAT
export const createFlat = async (req, res) => {
  try {
    const { flatNumber, block, floor } = req.body;

    // check existing flat
    const existingFlat = await Flat.findOne({
      flatNumber,
      block,
    });

    if (existingFlat) {
      return res.status(400).json({
        message: "Flat already exists",
      });
    }

    // create flat
    const flat = await Flat.create({
      flatNumber,
      block,
      floor,
    });

    res.status(201).json({
      message: "Flat created successfully",
      data: flat,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET ALL FLATS
export const getFlats = async (req, res) => {
  try {
    const flats = await Flat.find();

    res.status(200).json({
      message: "success",
      data: flats,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// UPDATE FLAT
export const updateFlat = async (req, res) => {
  try {
    const { id } = req.params;

    const flat = await Flat.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!flat) {
      return res.status(404).json({
        message: "Flat not found",
      });
    }

    res.status(200).json({
      message: "Flat updated successfully",
      data: flat,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// DELETE FLAT
export const deleteFlat = async (req, res) => {
  try {
    const { id } = req.params;

    const flat = await Flat.findByIdAndDelete(id);

    if (!flat) {
      return res.status(404).json({
        message: "Flat not found",
      });
    }

    res.status(200).json({
      message: "Flat deleted successfully",
      data: flat,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET AVAILABLE FLATS
export const getAvailableFlat = async (req, res) => {
  try {
    const flats = await Flat.find({
      isOccupied: false,
    });

    res.status(200).json({
      message: "success",
      data: flats,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};