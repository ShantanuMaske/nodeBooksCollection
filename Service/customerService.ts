import Customer from '../Models/custmodel'

export const createCustomer = async function (req: any, res:any) {
    try {
        const {firstName, orderId, lastName, email, address } = req.body
        const createCustomer = await Customer.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            orderId: orderId,
            address:{
            phone: address.phone,
            lineOne: address.lineOne,
            lineTwo: address.lineTwo,
            city: address.city,
            state: address.state,
            country: address.country
        }
        })
        return createCustomer;
    } catch (e) {
        // Log Errors
        console.log(e)
        throw Error('Error while Paginating Users')
    }
}

export const getCustomer = async function (req: any, res:any) {
    try {
        const getCustomer = await Customer.find({})
        return getCustomer;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}
export const getOneCustomer = async function (req: any, res:any) {
    try {
        const id = req.params.id;
        const getCustomer = await Customer.findById(id)
        return getCustomer;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const updateCustomer = async function (req: any, res:any) {
    try {
        const updateCustomer = await Customer.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        return updateCustomer;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

export const deleteCustomer = async function (req: any, res:any) {
    try {
        const updateCustomer = await Customer.findByIdAndDelete(req.params.id)
        return updateCustomer;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}