const express = require('express');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/web'));
app.use((req, res, next)=> {
    console.log("inside middleware");
    var now = new Date().toString();
    console.log("time is", now);
    console.log("method is", req.method);
    console.log("path is", req.path);
    next();
});
app.get('/', (req, res) => {
    //res.send("hello");
    res.send({
        name:"Marwan"
    })
});

app.listen(port, () => {
    console.log("server is up at", port)
});