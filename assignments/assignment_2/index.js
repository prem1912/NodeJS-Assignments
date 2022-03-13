const fs = require("fs");
const http = require("http");

const data = <h1>Hello World</h1>;

fs.writeFile("index.html",data, (err) => {
    console.log(err);
})
const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data)=>{
        res.end(data);
    })
})
server.listen(3000, () => {console.log("server is started...")});