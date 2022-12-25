const express = require("express");
const route = require('../src/route');
const mongoose = require("mongoose");
 const app = express();
 app.use(express.json());

mongoose.set('strictQuery', true);
 mongoose
  .connect(
    "mongodb+srv://jagriti:Jaggu123@cluster0.nf3nfa7.mongodb.net/jaggu",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message))

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("listening at " + (process.env.PORT || 3000))})