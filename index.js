const express=require('express');
const mongoose=require('mongoose');
const Product=require('./models/product.model');
const app=express();
const productroutes=require('./routes/product.route');
require('dotenv').config();

app.use(express.json());

app.use('/api/products',productroutes);


app.get('/',(req,res)=>{
    res.send("hello from node api1");
});

// app.get('/api/products',async(req,res)=>{
//     try{
//         const product=await Product.find({});
//         res.status(200).json(product);
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });


// app.get('/api/product/:id',async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const product=await Product.findById(id);
//         res.status(200).json(product);
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// app.put('/api/product/:id',async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const product=await Product.findByIdAndUpdate(id,req.body);

//         if(!product){
//             res.status(404).json({message:"not found"});
//         }
//         const updatedproduct=await Product.findById(id);
//         res.status(200).json(updatedproduct);
//         // res.status(200).json(product);
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// app.post('/api/products',async(req,res)=>{
//     try{
//         const product=await Product.create(req.body);
//         res.status(200).json(product)
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// app.delete('/api/product/:id',async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const product=await Product.findByIdAndDelete(id);

//         if(!product){
//             res.status(404).json({message:"not found"});
//         }
//         else{
//         res.status(200).json({message:"Success"});}

//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// // app.listen(3000,()=>{
// //     console.log("hello");
// // });


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("DB connected");
    app.listen(3000,()=>{
        console.log("Hello");
    })
})
.catch(()=>{
    console.log("There is a problem in db connection");
})
