const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log("CONNECTION STARTED")
}).catch(err =>{
    console.log("OOPS ERROR!!")
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})

const Movie =  mongoose.model('Movie',movieSchema);

Movie.insertMany([
    {title:'The Northman',year:2022,score:'8.7',rating:'R'},
    {title:'Requiem for a Dream',year:2000,score:'8.5',rating:'R'},
    {title:'Everything Everywhere All at Once',year:2022,score:'8.7',rating:'PG-13'},
    {title:'Solaris',year:1972,score:'9.3',rating:'R'},
    {title:'Love Exposure',year:2008,score:'8.8',rating:'R'}
]).then(data=>{
    console.log("IT WORKED");
    console.log(data);
}).catch(err=>{
    console.log("OOPPSS!!!");
    console.log(err);
})