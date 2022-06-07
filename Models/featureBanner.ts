import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    imgName:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true,
        unique: true
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

const featureBanner = mongoose.model('featureImages', adminSchema)

export default featureBanner