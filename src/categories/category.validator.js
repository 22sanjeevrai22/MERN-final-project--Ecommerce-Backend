//2nd level of validation
const { errorResponse } = require('../utils/response.utils');
const {z} = require('zod');
const logger = require('pino')()

const CategoryValidationSchema = z.object({name : z.string({required_error : 'Name is required haha'}).min(3).max(15)})

const categoryValiadator = {
    validateCreateCategory : (req, res, next)=>{
        const parsedSchema = CategoryValidationSchema.safeParse(req.body);
    if(!parsedSchema.success){
        logger.error(parsedSchema)
        return errorResponse(res, 'Haha Validation Error', parsedSchema.error, 409);
    }
    next();

    }

        
};

module.exports = categoryValiadator;


// Manually Validation

// const categoryValiadator = {
//     createCategory : (data) =>{
//         const requiredFields = [
//             {
//                     fieldname : 'name',
//                     type : 'string',
//                     length : 3,
//                     maxLength : 10
//                 }
//              ]

//              const errors = []

//              requiredFields.forEach((field)=>{
//                 if(!data.hasOwnProperty(field.fieldname)){
//                     errors.push(`${field.fieldname} is required`)
//                 }
//              });

//              if(errors.length > 0){
//                 throw errors;
//              }

//         }

        
// };

// module.exports = categoryValiadator;