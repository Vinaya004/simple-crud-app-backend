const express=require('express')
const router=express.Router();
const {getproducts,getproduct,createproduct,updateproduct,deleteproduct} =require('../controllers/product.controller');


router.get('/',getproducts);
router.get('/:id',getproduct);
router.post('/',createproduct);
router.put('/:id',updateproduct);
router.delete('/:id',deleteproduct);

module.exports=router;