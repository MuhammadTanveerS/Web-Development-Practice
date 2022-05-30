const  mongoose = require("mongoose");
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log("CONNECTION STARTED")
}).catch(err =>{
    console.log("OOPS ERROR!!")
    console.log(err)
})

// const newProduct = new Product({
//     name:"Low Fat Milk",
//     price:"1.99",
//     category:"dairy"
// });

// newProduct.save().then(r => console.log(r))

const seed = [{
        name:"Banana",
        price:"0.99",
        category:"fruit"
    },
    {
        name:"Organic Butter",
        price:"3.99",
        category:"dairy"
    },
    {
        name:"Red Carrots",
        price:"1.49",
        category:"vegetable"
    },
    {
        name:"Apple",
        price:"0.49",
        category:"fruit"
    }]
Product.insertMany(seed).then(p => console.log(p)).catch(err=>{console.log(err);});