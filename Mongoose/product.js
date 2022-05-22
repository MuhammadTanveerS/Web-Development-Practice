const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=>{
    console.log("CONNECTION STARTED")
}).catch(err =>{
    console.log("OOPS ERROR!!")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Product = mongoose.model('Product',productSchema);

const watch = new Product({name:"Watch",price:500})
watch.save()
    .then(data=>{
        console.log("WORKED");
        console.log(data);
    }).catch(err =>{
        console.log("OH NO ERROR!!");
        console.log(err);
    })