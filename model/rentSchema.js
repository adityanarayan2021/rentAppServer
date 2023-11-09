import { Schema, model } from 'mongoose';

const rentSchema = new Schema({
    rentAmount: {
        type: Number,
        required: true,
    },
    platformFee: {
        type: Number,
        required: true,
    },
    userPays: {
        type: Number,
        required: true,
    },
    ownerReceives: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

  
  const Rent = model('Rent', rentSchema);
  export default Rent;