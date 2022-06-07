import bookTypes from "../Models/bookTypes";

export const getBookTypeDetails = async (req: any, res: any) => {
    try {
        const getBookDetails = await bookTypes.find({
            isActive: true,
            isDeleted: false
        })
        return getBookDetails;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const addBookTypeDetails = async (req: any, res: any) => {
    try {
        const { typeName, childTypeName } = req.body
        const addBookDetails = await bookTypes.create({
            typeName, childTypeName
        })
        return addBookDetails;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const deleteBookTypeDetails = async function (req: any, res: any) {
    try {
        const updateBookType = await bookTypes.findByIdAndUpdate(req.params.id, 
            { $set: { isDeleted: true, isActive: false } }, { new: true })
        return updateBookType;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}