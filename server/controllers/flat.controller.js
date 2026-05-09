import Flat from "../model/flat.model.js";

// CREATE
export const createFlat = async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    res.status(201).json(flat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
export const getFlats = async (req, res) => {
  try {
    const flats = await Flat.find();
    res.status(200).json(flats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateFlat = async (req, res) => {
  try {
    const flat = await Flat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(flat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteFlat = async (req, res) => {
  try {
    await Flat.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Flat deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get available flat
export const getAvailableFlat= async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}