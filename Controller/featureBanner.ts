import { Router } from 'express';
const FeatureBannerRouter = Router();

FeatureBannerRouter.post('/log-in', async (req, res)  =>   {
    try{
        res.status(200).json('Success!!');
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

export default FeatureBannerRouter