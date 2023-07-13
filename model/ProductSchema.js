import mongoose from "mongoose";

const PrpductSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("product", PrpductSchema);

export default Product;
