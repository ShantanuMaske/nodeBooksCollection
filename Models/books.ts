import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true
    },
    booksAuthor:{
        type: String,
        required: true
    },
    bookImg:{
        type: String,
        required: true
    },
    booksPublisher:{
        type: String,
        required: true
    },
    bookType:{
        type: String,
        required: true
    },
    bookPrice:{
        type: String,
        required: true
    },
    bookDescription:{
        type: String,
        required: true
    },
    bookQuantity:{
        type: Number,
        required: true
    },
    booksRating:{
        type: Number,
        required: true
    },
    isReleased:{
        type: Boolean,
        default: true
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

const booksDetail = mongoose.model('books', booksSchema)

export default booksDetail