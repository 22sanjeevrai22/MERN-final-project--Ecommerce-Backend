//2nd level of validation
const { errorResponse } = require('../utils/response.utils');
const {z} = require('zod');
const logger = require('pino')()

const ProductValidationSchema = z.object({name : z.string({
    required_error : 'Name is required haha'}).min(3), 
price : z.string({ 
    required_error : 'Price is required'
}), 
qty : z.string({
    required_error : 'Quantity is required'
}),
category : z.string({
    required_error : 'Category is required'
}), 
image : z.string({}).optional(),
});

const productValidator = {
    validateCreateProduct : (req, res, next)=>{
        let validationData;

        if(req.file){
             const image = req.file.originalname;
             
             validationData = {...req.body, image};
        
        }else{
            validationData = req.body;
        }
       

    const parsedSchema = ProductValidationSchema.safeParse(validationData);
        
    if(!parsedSchema.success){
        logger.error(parsedSchema);

        return errorResponse(res, 'Validation Error', parsedSchema.error, 409);
    }
    req.body = validationData;
    next();

    }

        
};

module.exports = productValidator;


