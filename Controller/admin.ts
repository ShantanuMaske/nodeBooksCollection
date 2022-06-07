import { Router } from 'express';
const AdminRouter = Router();
import * as adminService from '../Service/adminService'

AdminRouter.post('/log-in', async (req, res) => {
    try {
        const isadmin = await adminService.getAdmin(req, res)
        if (isadmin) {
            res.status(200).json({
                status: isadmin,
                msg: 'LogIn Successfull'
            });
        } else {
            res.status(200).json({
                status: isadmin,
                msg: 'Invalid Credential'
            });
        }
    } catch (e) {
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

export default AdminRouter