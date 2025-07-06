const Product=require('../models/product.model');

const getproducts=async(req,res)=>{
    try{
        const product=await Product.find({});
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const getproduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}


const createproduct=async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}


const updateproduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            res.status(404).json({message:"not found"});
        }
        const updatedproduct=await Product.findById(id);
        res.status(200).json(updatedproduct);
        // res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};



const deleteproduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).json({message:"not found"});
        }
        else{
        res.status(200).json({message:"Success"});}

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};


module.exports={
    getproducts,
    getproduct,
    createproduct,
    updateproduct,
    deleteproduct
};