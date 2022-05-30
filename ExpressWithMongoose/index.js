const { log } = require("console");
const express = require("express");
const methodOverride = require("method-override");
const  mongoose = require("mongoose");
const path = require('path')
const app = express();


const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log("CONNECTION STARTED")
}).catch(err =>{
    console.log("OOPS ERROR!!")
    console.log(err)
})


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get('/all', async (req,res)=>{

    const products = await Product.find({});
    res.render('all',{products})
})

app.get('/all/new',(req,res)=>{
    res.render('new');
})

app.get('/all/:id', async (req,res)=>{
    const{id} = req.params;
    const product = await Product.findById(id);
    res.render('info',{product})
})

app.post('/all', async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/all/${newProduct.id}`);
})

app.get('/all/:id/edit', async (req,res)=>{
    const {id} = req.params;
    const p = await Product.findById(id);
    res.render('edit',{p})

})

app.put('/all/:id', async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body, {runValidators:true, new:true});
    res.redirect(`/all/${product._id}`);
})

//DELETE
app.post('/all/:id', async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect(`/all`);
})


app.listen('100',()=>{
    console.log('LISTENING ON PORT 100');
})

