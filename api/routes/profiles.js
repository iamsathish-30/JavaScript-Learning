import experss from 'express';

const router = experss.Router();

//All routes are start with /profiles
router.get('/',(req,res)=>{
    res.send("profiles");
});

export default router;