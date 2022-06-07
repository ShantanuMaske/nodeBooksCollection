import admin from "../Models/admin";

export const createAdmin = async function (req: any, res: any) {
    try {
        const { name, email, address, age, password } = req.body
        const createAdmin = await admin.create({
            name: name,
            email: email,
            address: {
                phone: address.phone,
                street: address.street
            },
            age: age,
            password: password
        })
        return createAdmin;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const getAdmin = async function (req: any, res: any) {
    try {
        const { email, password } = req.body
        const adminDetail = await admin.findOne({
            email,
            password
        })
        if (adminDetail) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const deleteAdminDetails = async function (req: any, res: any) {
    try {
        const updateAdmin = await admin.findByIdAndUpdate(req.params.id, 
            { $set: { isDeleted: true, isActive: false } }, { new: true })
        return updateAdmin;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}