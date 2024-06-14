const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product=require('./model/product.model');
const productRoute = require('./route/product.route.js');


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));




// routes
app.use('/api/products',productRoute);



const url="mongodb+srv://rakeshchauhan17dpr:9XDGdFtgSoZ4stzk@cul1.lolrppw.mongodb.net/?retryWrites=true&w=majority&appName=cul1";




  
app.get('/',(req,res)=>{
    res.send("Hello from Node API Updates");
});

// // for showing all product


// app.get('/api/products',async(req,res)=>{
//   try{
//     const products=await Product.find({});
//   res.status(200).json(products);
//   } catch(error){
//     res.status(500).json({message:error.message})
//   }
// })

// // for showing all product by Id
// app.get('/api/products/:id',async(req,res)=>{
//   try{
//     const {id}=req.params;
//     const products=await Product.findById(id);
//   res.status(200).json(products);
//   } catch(error){
//     res.status(500).json({message:error.message})
//   }
// })

// //Update a Product
// app.put('/api/products/:id',async(req,res)=>{
//   try{
//     const {id}=req.params;
//     const product= await Product.findByIdAndUpdate(id,req.body);

//     if(!product){
//       return res.status(404).json({message:"product not found"})
//     }

//     const updatedProduct=await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   }
//   catch(error){
//     res.status(500).json({message:error.message});
//   }
// })


// // for Insret a product
// app.post('/api/products',async(req,res)=>{
 
//     try{
//       const product = await Product.create(req.body);
//       res.status(200).json(product);

//     }catch(error){
//       res.status(500).json({message:error.message})
//     }
// });

// // for delete a product by id
// app.delete('/api/products/:id',async(req,res)=>{
//   try{
//     const {id}=req.params;
//     const product= await Product.findByIdAndDelete(id);

//     if(!product){
//       return res.status(404).json({message:"product not found"})
//     }

//     const updatedProduct=await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   }
//   catch(error){
//     res.status(500).json({message:error.message});
//   }
// })








mongoose.connect(url)
  .then(() => {
    console.log("connected to database")
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    })
  })
  .catch((error)=>{
    console.log(error.message)
  })

  