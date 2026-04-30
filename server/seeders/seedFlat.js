import mongoose from "mongoose";
import Flat from "../model/flat.model.js";

const flats = [
  // Block A
  { flatNumber: 101, block: "A", floor: 1 },
  { flatNumber: 102, block: "A", floor: 1 },
  { flatNumber: 103, block: "A", floor: 1 },
  { flatNumber: 201, block: "A", floor: 2 },
  { flatNumber: 202, block: "A", floor: 2 },
  { flatNumber: 203, block: "A", floor: 2 },
  { flatNumber: 301, block: "A", floor: 3 },
  { flatNumber: 302, block: "A", floor: 3 },
  { flatNumber: 303, block: "A", floor: 3 },
  { flatNumber: 401, block: "A", floor: 4 },

  // Block B
  { flatNumber: 101, block: "B", floor: 1 },
  { flatNumber: 102, block: "B", floor: 1 },
  { flatNumber: 103, block: "B", floor: 1 },
  { flatNumber: 201, block: "B", floor: 2 },
  { flatNumber: 202, block: "B", floor: 2 },
  { flatNumber: 203, block: "B", floor: 2 },
  { flatNumber: 301, block: "B", floor: 3 },
  { flatNumber: 302, block: "B", floor: 3 },
  { flatNumber: 303, block: "B", floor: 3 },
  { flatNumber: 401, block: "B", floor: 4 },

  // Block C
  { flatNumber: 101, block: "C", floor: 1 },
  { flatNumber: 102, block: "C", floor: 1 },
  { flatNumber: 103, block: "C", floor: 1 },
  { flatNumber: 201, block: "C", floor: 2 },
  { flatNumber: 202, block: "C", floor: 2 },
  { flatNumber: 203, block: "C", floor: 2 },
  { flatNumber: 301, block: "C", floor: 3 },
  { flatNumber: 302, block: "C", floor: 3 },
  { flatNumber: 303, block: "C", floor: 3 },
  { flatNumber: 401, block: "C", floor: 4 },
];

const seedFlats = async () => {
  try {
    const connection = await mongoose.connect("mongodb://localhost:27017/sms");
    console.log("Database connected");

    const insertedFlats = await Flat.insertMany(flats);

    console.log("Flats inserted:");
    console.log(insertedFlats);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedFlats();