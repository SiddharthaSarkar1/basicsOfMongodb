import express from "express";
import connectDB from "./db/connectDB.js";
import {
  createDoc,
  insertManyDoc,
  getAllDoc,
  getSingleDoc,
  docWithField,
  updateById,
  updateMany,
  deleteDocByID,
  deleteByName
} from "./models/Movies.js";

const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/sidd_movies";

connectDB(DATABASE_URL);

// createDoc();
// insertManyDoc();
// getAllDoc();
// getSingleDoc();
// docWithField();
// updateById("66a67bad4ed80d6c1b7e076b");
// updateMany();
deleteDocByID("66a67bad4ed80d6c1b7e076d");
// deleteByName();

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
