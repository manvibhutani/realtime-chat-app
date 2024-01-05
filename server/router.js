const express=require('express');
const cors = require('cors');

const app = express();

const router=express.Router();
router.get('/',(req,res)=>
{
    res.send('Server is up and running');
});
module.exports=router;
