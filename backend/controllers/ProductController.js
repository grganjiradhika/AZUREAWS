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