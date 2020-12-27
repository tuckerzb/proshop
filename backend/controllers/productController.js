import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import { access } from 'fs';

// @desc     Fetch all products
// @route    GET /api/products
// @access   Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
})

// @desc     Fetch single product by ID
// @route    GET /api/products/:id
// @access   Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not fond');
    }
})

// @desc     Delete a product
// @route    DELETE /api/products/:id
// @access   Public/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        product.remove();
        res.json({message: 'Product remove'});
    } else {
        res.status(404);
        throw new Error('Product not fond');
    }
})

// @desc     Create a product
// @route    POST /api/products/
// @access   Public/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample Name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample Brand',
        category: 'Sample Category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample Description'
    })

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
})

// @desc     Update a product
// @route    PPUT /api/products/:id
// @access   Public/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const {name, price, description, image, brand, category, countInStock} = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {

        product.name = name;
        product.price = price;
        product.description = description;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;

        const updatedProduct = await product.save();
        res.status(201).json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found!');
    }
})

// @desc     Create new review
// @route    PPUT /api/products/:id/reviews
// @access   Public
const createProductReview = asyncHandler(async (req, res) => {
    const {rating, comment} = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
        const alreadyReviewed = product.reviews.find(r => r.user.toString() == req.user._id.toString());
        if (alreadyReviewed) {
            res.status(400);
            throw new Error('User has already reviewed this product!');
        }
        const review = {name: req.user.name, rating: Number(rating), comment, use: req.user._id};
        products.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating = product.reviews.reduce((arr, item) => item.rating + acc, 0) / product.reviews.length;
        await product.save();
        res.status(201).json({message: 'Review added!'});
        
    } else {
        res.status(404);
        throw new Error('Product not found!');
    }
})

export {getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview};
