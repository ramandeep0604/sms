// import mongoose from "mongoose";
// import Flat from "../model/flat.model.js";

// const flats = [
//   // Block A
//   { flatNumber: 101, block: "A", floor: 1 },
//   { flatNumber: 102, block: "A", floor: 1 },
//   { flatNumber: 103, block: "A", floor: 1 },
//   { flatNumber: 201, block: "A", floor: 2 },
//   { flatNumber: 202, block: "A", floor: 2 },
//   { flatNumber: 203, block: "A", floor: 2 },
//   { flatNumber: 301, block: "A", floor: 3 },
//   { flatNumber: 302, block: "A", floor: 3 },
//   { flatNumber: 303, block: "A", floor: 3 },
//   { flatNumber: 401, block: "A", floor: 4 },

//   // Block B
//   { flatNumber: 101, block: "B", floor: 1 },
//   { flatNumber: 102, block: "B", floor: 1 },
//   { flatNumber: 103, block: "B", floor: 1 },
//   { flatNumber: 201, block: "B", floor: 2 },
//   { flatNumber: 202, block: "B", floor: 2 },
//   { flatNumber: 203, block: "B", floor: 2 },
//   { flatNumber: 301, block: "B", floor: 3 },
//   { flatNumber: 302, block: "B", floor: 3 },
//   { flatNumber: 303, block: "B", floor: 3 },
//   { flatNumber: 401, block: "B", floor: 4 },

//   // Block C
//   { flatNumber: 101, block: "C", floor: 1 },
//   { flatNumber: 102, block: "C", floor: 1 },
//   { flatNumber: 103, block: "C", floor: 1 },
//   { flatNumber: 201, block: "C", floor: 2 },
//   { flatNumber: 202, block: "C", floor: 2 },
//   { flatNumber: 203, block: "C", floor: 2 },
//   { flatNumber: 301, block: "C", floor: 3 },
//   { flatNumber: 302, block: "C", floor: 3 },
//   { flatNumber: 303, block: "C", floor: 3 },
//   { flatNumber: 401, block: "C", floor: 4 },
// ];

// const seedFlats = async () => {
//   try {
//     const connection = await mongoose.connect("mongodb://localhost:27017/sms");
//     console.log("Database connected");

//     const insertedFlats = await Flat.insertMany(flats);

//     console.log("Flats inserted:");
//     console.log(insertedFlats);

//     process.exit();
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// seedFlats();
// import mongoose from "mongoose";
// import Flat from "../model/flat.model.js";

// const flats = [
//   // Block A
//   { flatNumber: 101, block: "A", floor: 1, isOccupied: false },
//   { flatNumber: 102, block: "A", floor: 1, isOccupied: false },
//   { flatNumber: 103, block: "A", floor: 1, isOccupied: false },
//   { flatNumber: 201, block: "A", floor: 2, isOccupied: false },
//   { flatNumber: 202, block: "A", floor: 2, isOccupied: false },
//   { flatNumber: 203, block: "A", floor: 2, isOccupied: false },
//   { flatNumber: 301, block: "A", floor: 3, isOccupied: false },
//   { flatNumber: 302, block: "A", floor: 3, isOccupied: false },
//   { flatNumber: 303, block: "A", floor: 3, isOccupied: false },
//   { flatNumber: 401, block: "A", floor: 4, isOccupied: false },

//   // Block B
//   { flatNumber: 101, block: "B", floor: 1, isOccupied: false },
//   { flatNumber: 102, block: "B", floor: 1, isOccupied: false },
//   { flatNumber: 103, block: "B", floor: 1, isOccupied: false },
//   { flatNumber: 201, block: "B", floor: 2, isOccupied: false },
//   { flatNumber: 202, block: "B", floor: 2, isOccupied: false },
//   { flatNumber: 203, block: "B", floor: 2, isOccupied: false },
//   { flatNumber: 301, block: "B", floor: 3, isOccupied: false },
//   { flatNumber: 302, block: "B", floor: 3, isOccupied: false },
//   { flatNumber: 303, block: "B", floor: 3, isOccupied: false },
//   { flatNumber: 401, block: "B", floor: 4, isOccupied: false },

//   // Block C
//   { flatNumber: 101, block: "C", floor: 1, isOccupied: false },
//   { flatNumber: 102, block: "C", floor: 1, isOccupied: false },
//   { flatNumber: 103, block: "C", floor: 1, isOccupied: false },
//   { flatNumber: 201, block: "C", floor: 2, isOccupied: false },
//   { flatNumber: 202, block: "C", floor: 2, isOccupied: false },
//   { flatNumber: 203, block: "C", floor: 2, isOccupied: false },
//   { flatNumber: 301, block: "C", floor: 3, isOccupied: false },
//   { flatNumber: 302, block: "C", floor: 3, isOccupied: false },
//   { flatNumber: 303, block: "C", floor: 3, isOccupied: false },
//   { flatNumber: 401, block: "C", floor: 4, isOccupied: false },
// ];

// const seedFlats = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/sms");

//     console.log("Connection is up");

//     // delete existing flats
//     await Flat.deleteMany({});
//     console.log("Existing flats cleared");

//     // insert new flats
//     const newFlats = await Flat.insertMany(flats);

//     console.log(`Successfully seeded ${newFlats.length} flats.`);

//     process.exit(0);

//   } catch (error) {

//     console.error("Error seeding flats:", error);

//     process.exit(1);
//   }
// };

// seedFlats();
import mongoose from "mongoose";
import Flat from "../model/flat.model.js";

const flats = [];

const blocks = ["A", "B", "C"];

blocks.forEach((block) => {
  
  // floors 1 to 4
  for (let floor = 1; floor <= 4; floor++) {

    // flats per floor
    const flatsPerFloor = floor === 4 ? 1 : 3;

    for (let i = 1; i <= flatsPerFloor; i++) {

      const flatNumber = floor * 100 + i;

      flats.push({
        flatNumber,
        block,
        floor,

        // random true / false
        isOccupied: Math.random() > 0.5,
      });
    }
  }
});

const seedFlats = async () => {
  try {

    await mongoose.connect("mongodb://localhost:27017/sms");

    console.log("Connection is up");

    // clear old flats
    await Flat.deleteMany({});
    console.log("Existing flats cleared");

    // insert new flats
    const newFlats = await Flat.insertMany(flats);

    console.log(`Successfully seeded ${newFlats.length} flats.`);

    process.exit(0);

  } catch (error) {

    console.error("Error seeding flats:", error);

    process.exit(1);
  }
};

seedFlats();