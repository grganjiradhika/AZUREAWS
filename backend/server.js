const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//Routes
const productRoutes = require('./routes/ProductRoutes');
app.use('/api/products', productRoutes);
app.use('/api/products', productRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Server Working');
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('✅ Connected to database'))
    .catch((err) => console.log('❌ Database error:', err.message));

// Start Server
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
});

// Error handling
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});