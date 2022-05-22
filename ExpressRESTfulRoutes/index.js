const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

let comments =[
    {
        id:uuid(),
        username:'tanveer',
        comment: 'How are you?'
    },
    {
        id:uuid(),
        username:'asif',
        comment: 'generic comment'
    },
    {
        id:uuid(),
        username:'ali',
        comment: 'its a nice day'
    },
    {
        id:uuid(),
        username:'adam',
        comment: 'good Morning'
    }
]

app.get('/comments',(req,res)=>{
    res.render('index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('new')
})

app.post('/comments',(req,res)=>{
    const{username,comment} = req.body;
    comments.push({username,comment, id:uuid()})
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id === id)
    res.render('details',{comment})
})

app.get('/comments/:id/edit',(req,res)=>{
    const {id} = req.params;
    const find = comments.find(c=>c.id === id)
    res.render('edit',{find})
})

app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newComment = req.body.comment;
    const comment = comments.find(c=>c.id === id)
    comment.comment = newComment;
    res.redirect('/comments')
})

app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.post('/order',(req,res)=>{
    console.log(req.body);
    res.send('HI')
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})