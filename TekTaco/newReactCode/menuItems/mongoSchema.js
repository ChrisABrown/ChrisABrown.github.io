const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MenuItem = new Schema({
  _class: String,
  description: String,
  image: String,
  inStock: Number,
  name: String,
  price: Number,
  productType: String,
  sku: String,
  dateAdded: { type: Date, default: Date.now },
  reviews: [{ body: String, date: Date }],
});

MenuItem.path("menuItem");
