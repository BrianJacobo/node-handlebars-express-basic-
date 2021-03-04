require('dotenv').config()
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

//servir contenido estatico
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Brian Jacobo",
    titulo: "backend developer",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Brian Jacobo",
    titulo: "backend developer",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Brian Jacobo",
    titulo: "backend developer",
  });

});

app.get("*", function (req, res) {
  res.send(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/* const http = require('http')

http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'application/json'})
    res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(200,{'Content-Type':'application/csv'})

    res.write('hola mundo')
    res.end()
}).listen(8080)

console.log('Escuchando en el puerto',8080)*/
