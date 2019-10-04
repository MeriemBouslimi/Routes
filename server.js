const express = require('express')

const app = express()
let open = false


// app.use(date = (req, res, next) => {
//     var requestAt = new Date().getHours();
//     (requestAt >= 8 && requestAt <= 17) ? open = true : open = false
//     next()
// })

// app.get('/home' , (req,res)=>{  
//     res.sendfile(__dirname + '/home.html')
// })
var requestAt = new Date().getHours();
(requestAt >= 8 && requestAt <= 17) ? open = true : open = false

if (open)
    app.use(express.static(__dirname + '/public'))
else
    app.get('/*', (req, res) => {
        res.sendfile(__dirname + '/hs.html')
    })

app.get('/home', (req, res) => {

    res.sendFile(__dirname + '/public/home.html')
})

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/ourservices.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

app.listen(3000, (err) => {
    if (err) console.log("server is not running")
    else console.log("server is running on port 3000")
}) 