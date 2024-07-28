import mongoose from "mongoose";

// Define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

//Creating Model
const MovieModel = mongoose.model("Movie", movieSchema);

//Insert one doc
const createDoc = async () => {
  try {
    //Creating new document
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 6000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [
        {
          value: "That was an amazing movie.",
        },
      ],
    });

    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Insert many Doc
const insertManyDoc = async () => {
  try {
    //Creating new document
    const m1 = new MovieModel({
      name: "The Extraction 2.1",
      ratings: 4,
      money: 6000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [
        {
          value: "That was an amazing movie.",
        },
      ],
    });

    const m2 = new MovieModel({
      name: "John Wick Chapter 4",
      ratings: 5,
      money: 23000,
      genre: ["action"],
      isActive: true,
      comments: [
        {
          value: "John is good.",
        },
      ],
    });

    const m3 = new MovieModel({
      name: "Movie 3",
      ratings: 4,
      money: 6000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [
        {
          value: "That was an amazing movie.",
        },
      ],
    });

    const m4 = new MovieModel({
      name: "Movie 4",
      ratings: 2,
      money: 4000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [
        {
          value: "That was an amazing movie.",
        },
      ],
    });

    const m5 = new MovieModel({
      name: "Movie 5",
      ratings: 4,
      money: 6000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [
        {
          value: "That was an amazing movie.",
        },
      ],
    });

    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//get all documents
const getAllDoc = async () => {
  try {
    // const result = await MovieModel.find();
    // const result = await MovieModel.find().limit(2);
    // const result = await MovieModel.find().skip(3);
    // const result = await MovieModel.find().countDocuments();

    // const result = await MovieModel.find().sort({ name: -1 });
    // console.clear();
    // const result = await MovieModel.find({ money: { $gt: 10000 } });

    //$ne ==> Not included 6000
    // const result = await MovieModel.find({ money: { $ne: 6000 } });

    //AND Operator
    // const result = await MovieModel.find({ $and: [ { money: 4000 }, {ratings: 2} ] });

    //OR Operator
    const result = await MovieModel.find({
      $or: [{ money: 4000 }, { ratings: 4 }],
    });

    console.log(result);
    // console.clear();

    // Iterating Over
    // result.forEach((movie) => {
    //   console.log(movie.name);
    // });
  } catch (error) {
    console.log(error);
  }
};

//Get a single document
const getSingleDoc = async () => {
  try {
    const result = await MovieModel.findById("66a67723d6a471c639bf7220");
    // if we pass name parameter the it will only dispay the name from that document,.
    //   const result = await MovieModel.findById("66a67723d6a471c639bf7220", "name");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const docWithField = async () => {
  try {
    const result = await MovieModel.find({ name: "Extraction 2" });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// UPDATE
// Update one by id
const updateById = async (id) => {
  try {
    //updateOne(filter, whatToChange?)
    const result = await MovieModel.updateOne(
      { _id: id },
      { name: "Updated Movie" }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//   Update Many
const updateMany = async () => {
  try {
    const result = await MovieModel.updateMany(
      { ratings: 3 },
      { name: "Updated Movie by using rating 3" }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// DELETE

const deleteDocByID = async (id) => {
  try {
    const result = await MovieModel.findByIdAndDelete(id);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteByName = async (id) => {
    try {
      const result = await MovieModel.deleteOne({ name: "Updated Movie" });
  
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

export {
  createDoc,
  insertManyDoc,
  getAllDoc,
  getSingleDoc,
  docWithField,
  updateById,
  updateMany,
  deleteDocByID,
  deleteByName
};
