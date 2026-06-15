const Product = require("../models/Product");

exports.insertProduct = async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        const createdproduct = await Product.create(req.body);
        console.log("Product created:", createdproduct);
        res.status(201).json(createdproduct);
    }
    catch (err) {
        console.error("Error creating product:", err);
        res.status(500).json({ error: err.message });
    }
}
exports.getProducts = async (req, res) => {
    try {
        const getProducts = await Product.find({});
        console.log("Products retrieved:", getProducts);
        res.status(200).json(getProducts);
    }
    catch (err) {
        console.error("Error retrieving products:", err);
        res.status(500).json({ error: err.message });
    }

}
exports.getProductsById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "product not found" });
        }
        res.status(200).json(product);
    }
    catch (err) {
        console.error("Error retrieving product:", err);
        res.status(500).json({ error: err.message });
    }

}