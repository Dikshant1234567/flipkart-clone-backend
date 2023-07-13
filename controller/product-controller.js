import Product from "../model/ProductSchema.js";

export const getProducts = async (req, resp) => {
  try {
    const product = await Product.find({});
    return resp.status(200).json({ data: product });
  } catch (err) {
    return resp.status(500).json({ data: `no data found and error is ${err}` });
  }
};

export const getProductId = async (req, resp) => {
  try {
    const id = req.params.id;
    const data = await Product.findOne({ id: id });
    return resp.status(200).json(data);
  } catch (error) {
    return resp.status(500).json({ message: error });
  }
};
