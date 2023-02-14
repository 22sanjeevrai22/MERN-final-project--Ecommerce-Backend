const categoryService = require(".");
const { successResponse, errorResponse } = require("../utils/response.utils");

const CategoryController = {
    createCategory : async (req, res) => {
        const {name} = req.body;
        // Logics
        try{
            const createdCategory = await categoryService.createCategory({name});
            return successResponse(res, 'Category created successfully', {createdCategory})
        }catch(err){
            return errorResponse(res, err.message?? 'There was some error', {err});
        }
    },

    getAllCategories: async (req,res)=>{
        try{
            const categories = await categoryService.getAllCategories();
            return successResponse(res, 'Category fetched successfully', {categories});

        }catch(err){
            return errorResponse(res, err.message?? 'There was some error', {err});
        }
    }
};

module.exports = CategoryController;