const { errorResponse, successResponse } = require('../utils/response.utils');
const Product = require('.')

const ProductController = {
    createProduct : async (req, res) => {
        const data = req.body;
        try{
            const product = await Product.createProduct(data);
            successResponse(res, 'Product Created Successfully', product, 200);
        }catch(err){
            errorResponse(res, err.message, err, 400);
        }

    },
    getAllproducts: async (req, res) => {
        try{
            const products = await Product.getAllProducts({});
            successResponse(res, 'Products Fetched Successfully', products, 200);
        }catch(err){

        }
    }
}

module.exports = ProductController;