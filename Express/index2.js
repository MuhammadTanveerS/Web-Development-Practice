const express = require('express')
const path = require('path')
const app = express()
const data = require('./data.json')

app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/public')));  //for absolute path when runing in diff terminal

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/r/:subreddit',(req,res)=>{
    const{subreddit} = req.params;
    const info = data[subreddit]
    if(info){
        res.render('subreddit',{...info})
    }else{
        res.send('404 not found')
    }
    
})

app.get('/random',(req,res)=>{
    const num = Math.floor(Math.random() *10)+1
    res.render('random',{num})
})

app.get('/heroes',(req,res)=>{
    const heroes = ['Batman','Superman','Spider-Man','Moon Knight','Wonder Woman','Flash']
    res.render('heroes',{heroes})
})

app.listen(8080, () => {
    console.log("listening on port 8080")
})