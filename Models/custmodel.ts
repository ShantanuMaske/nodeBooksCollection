import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        phone:{
            type:Number
        },
        street:{
            type: String
        }
    },
    age:{
        type: Number,
    },
    password:{
        type: String
    }
})

const Customer = mongoose.model('customers', customerSchema)

export default Customer