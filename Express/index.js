const express = require("express");
const app = express();

// app.use((req,res)=>{
//     console.log("LISTENING ......")
//     // res.send("HELLO VISITOR");
//     // res.send({name:"BOB",age:"13"});
//     res.send("<h1>This is an h1 element</h1>");
// })

app.get("/", (req, res) => {
    res.send("HOME")
})

app.get("/r/:subredit", (req, res) => {
    const { subredit } = req.params;
    res.send(`<h2>Browsing the ${subredit} subredit</h2>`)
})

app.get("/r/:subredit/:id", (req, res) => {
    const { subredit, id } = req.params;
    res.send(`<h2>Viewing ${subredit} having id ${id}</h2>`)
})

app.get("/cats", (req, res) => {
    res.send("MEOW!")
})

app.get("/dogs", (req, res) => {
    res.send("WOOF!")
})


app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing's Found if nothing's Searched")
    } else {
        res.send(`Results for: ${q}`)
    }
})


app.get("*", (req, res) => {
    res.send("NOT FOUND")
})

app.listen(4000, () => {
    console.log("Listening to port 4000")
})