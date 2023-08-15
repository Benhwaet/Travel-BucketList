// const Product = require("../models/product");
// const cloudinary = require('../utils/cloudinary');



// const productController = {
//     createProduct: async (req, res, next) => {
//         const { name, description, price, } = req.body;
//         const image = req.file;
    
//         try {
//             const result = await cloudinary.uploader.upload(image.path, {
//                 folder: 'products',
//             });
    
//             const product = await Product.create({
//                 name,
//                 description,
//                 price,
//                 image: {
//                     public_id: result.public_id,
//                     url: result.secure_url,
//                 },
               
//             });
    
//             res.status(201).json({
//                 success: true,
//                 product,
//             });
//         } catch (error) {
//             console.log(error);
//             next(error);
//         }
//     },
    

//     displayProduct: async (req, res, next) => {
//         const pageSize = 3;
//         const page = Number(req.query.pageNumber) || 1;
        
//         try {
//             const count = await Product.countDocuments({});
//             let query = req.query.cat || '';

//             const products = await Product.find({ category: query })
//                 .populate('category', 'name')
//                 .skip(pageSize * (page - 1))
//                 .limit(pageSize);

//             res.status(200).json({
//                 success: true,
//                 products,
//                 page,
//                 pages: Math.ceil(count / pageSize),
//                 count
//             });
//         } catch (error) {
//             console.log(error);
//             next(error);
//         }
//     },

//     updateProduct: async (req, res, next) => {
//         try {

//             const currentProduct = await Product.findById(req.params.id);
    

//             const data = {
//                 name: req.body.name,
//                 description: req.body.description,
//                 price: req.body.price,
//                 category: req.body.category
//             }
    

//             if (req.body.image !== '') {
//                 const ImgId = currentProduct.image.public_id;
//                 if (ImgId) {
//                     await cloudinary.uploader.destroy(ImgId);
//                 }
    
//                 const newImage = await cloudinary.uploader.upload(req.body.image, {
//                     folder: "products",
//                     width: 1000,
//                     crop: "scale"
//                 });
    
//                 data.image = {
//                     public_id: newImage.public_id,
//                     url: newImage.secure_url
//                 }
//             }
    
//             const productUpdate = await Product.findOneAndUpdate(req.params.id, data, { new: true })
    
//             res.status(200).json({
//                 success: true,
//                 productUpdate
//             })
    
    
//         } catch (error) {
//             console.log(error);
//             next(error);
//         }
    
//     },

//     deleteProduct: async (req, res, next) => {
//         try {
//             const product = await Product.findById(req.params.id);
//             //retrieve current image ID
//             const imgId = product.image.public_id;
//             if (imgId) {
//                 await cloudinary.uploader.destroy(imgId);
//             }
    
//             const rmProduct = await Product.findByIdAndDelete(req.params.id);
    
//             res.status(201).json({
//                 success: true,
//                 message: " Product deleted",
    
//             })
    
//         } catch (error) {
//             console.log(error);
//             next(error);
    
//         }
    
//     }
    
// };
    

// module.exports = productController;