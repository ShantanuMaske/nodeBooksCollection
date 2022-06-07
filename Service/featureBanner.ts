import featureBanner from "../Models/featureBanner";

export const getFeatureImageDetails = async (req: any, res: any) => {
    try {
        const getBookDetails = await featureBanner.find({
            isActive: true,
            isDeleted: false
        })
        return getBookDetails;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const addFeatureImageDetails = async (req: any, res: any) => {
    try {
        const { imgName, imgUrl } = req.body
        const addBookDetails = await featureBanner.create({
            imgName, imgUrl
        })
        return addBookDetails;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const deleteFeatureImageDetails = async function (req: any, res: any) {
    try {
        const updateFeatureImage = await featureBanner.findByIdAndUpdate(req.params.id, 
            { $set: { isDeleted: true, isActive: false } }, { new: true })
        return updateFeatureImage;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}