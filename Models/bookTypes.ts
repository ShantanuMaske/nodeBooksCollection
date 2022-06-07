import mongoose from 'mongoose';

const bookTypesSchema = new mongoose.Schema({
    typeName:{
        type: String,
        required: true
    },
    childTypeName:[String],
    isActive:{
        type: Boolean,
        default: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
}, {timestamps: true})

const bookTypes = mongoose.model('bookTypes', bookTypesSchema)

export default bookTypes