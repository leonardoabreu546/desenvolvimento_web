const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`)
})

app.get("/", (req, res) => {
    log(req, res);
    var body = "Hello World!";
    rmSync.WriteHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/plain"
    });
    res.end(body);
});

app.get("/html", (req, res) => {
    var body = "<html><h1>Hello World!</h1></html>";
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
});

app.get("/file", (req, res) => {
    var body = fs.readFileSync("index.html", "utf-8");
    body = body.replace("{{DATA}}", new Date().toLocaleString("pt-PT"));
    res.writeHead(200, {
        "Content-Length": Buffer.byteLength(body),
        "Content-Type": "text/html"
    });
    res.end(body);
});


app