const express = require('express')
const app = express()

//servir contenido estatico
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Home page')
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hello World in respective rute')
  })
 
app.listen(3000)


/* const http = require('http')

http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'application/json'})
    res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(200,{'Content-Type':'application/csv'})

    res.write('hola mundo')
    res.end()
}).listen(8080)

console.log('Escuchando en el puerto',8080); */