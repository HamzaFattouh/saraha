import joi from "joi";

export const generalFields = {
    email:joi.string().email().min(6).required(),
    password:joi.string().min(8).required(),
}

const dataMethods = ['body','query','params'];
const validation = (Schema) => {
    const validationArray = [];
    return (req,res,next)=>{
        dataMethods.forEach(key=>{
            if(Schema[key]){
                const validationResult = Schema[key].validate(req[key],{abortEarly:false});
                if(validationResult.error){
                    validationArray.push(validationResult);
                }
            }
        });
        if(validationArray.length > 0){
            return res.json({message:'validation error',validation:validationArray});
        }else{
            next();
        }
    }
}

export default validation;