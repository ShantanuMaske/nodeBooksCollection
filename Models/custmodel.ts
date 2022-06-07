import mongoose, { Schema } from 'mongoose';

const customerSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        phone:{
            type:Number
        },
        lineOne:{
            type: String
        },
        lineTwo:{
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country:{
            type: String
        }
    },
    orderId:{ type: Schema.Types.ObjectId, ref: 'Event' }
}, {timestamps: true})

const Customer = mongoose.model('customers', customerSchema)

export default Customer