import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
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
    },
    isActive:{
        type: Boolean,
        default: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
}, {timestamps: true})

const admin = mongoose.model('admin', adminSchema)

export default admin