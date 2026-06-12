const mongoose = require("mongoose");

async function connectDb(url) {
  try {
    console.log("trying to connect");
    await mongoose.connect(url);
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDb;
