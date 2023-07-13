import { products } from "./constants/data.js";
import Product from "./model/ProductSchema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("data imported successfully");
  } catch (err) {
    console.log("error while inserting data", err);
  }
};

export default DefaultData;
