import booksDetail from "../Models/books";

export const getBookDetails = async (req: any, res: any) => {
    try {
        const type = req.params.type
        const getBookDetails = await booksDetail.find({
            isReleased: type,
            isActive: true,
            isDeleted: false
        })
        return getBookDetails;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const addBookDetails = async (req: any, res: any) => {
    try {
        const { bookName,
            booksAuthor,
            bookImg,
            booksPublisher,
            bookType,
            bookPrice,
            bookDescription,
            bookQuantity,
            booksRating } = req.body

        const addBookDetails = await booksDetail.create({
            bookName,
            booksAuthor,
            bookImg,
            booksPublisher,
            bookType,
            bookPrice,
            bookDescription,
            bookQuantity,
            booksRating
        })
        return addBookDetails;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const deleteBookDetails = async function (req: any, res: any) {
    try {
        const updateBookDetails = await booksDetail.findByIdAndUpdate(req.params.id, 
            { $set: { isDeleted: true, isActive: false } }, { new: true })
        return updateBookDetails;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}