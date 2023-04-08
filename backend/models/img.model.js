const mongoose = require("mongoose");

const Images = mongoose.model(
  "Images",
  new mongoose.Schema({
    title: String,
    addr: String,
    price: String,
    
  })
);

module.exports = Images;