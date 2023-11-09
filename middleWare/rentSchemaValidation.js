import Joi from "joi";

//validation for rent input fields
const rentDetailSchema = Joi.object().keys({
 ownerReceives: Joi.number().required(),
 userPays: Joi.number().required(),
 platformFee: Joi.number().required(),
 rentAmount: Joi.number().required(),
});

const validate = (req, res, next) => {
    const { error } = rentDetailSchema.validate(req.body);
  
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
};

export default validate;
