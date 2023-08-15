const express = require('express');
const multer = require('multer');
const router = express.Router();
const signature = require('../models')
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const productController = require('../controllers/productController')


router.post('/product/create', productController.createProduct);
router.get('/products/all', productController.displayProduct);
router.delete('/product/delete/:id', productController.deleteProduct);
router.put('/product/update/:id', productController.updateProduct);
router.get('/product/categories', productController.productCategory);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post('/product/create', upload.single('image'), productController.createProduct);


module.exports = router;


