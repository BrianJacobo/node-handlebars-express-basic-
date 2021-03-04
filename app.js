const express = require('express')
const app = express()
const port = 3000


// TODO: require('hbs')
app.set('view engine','hbs')

//servir contenido estatico
app.use(express.static('public'))

app.get('/', function(req,res){
  res.send('hola mundo')
})


app.get('/generic', function (req, res) {
    res.sendFile(__dirname+'/public/generic.html')
  })

  app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/public/elements.html')
  })

  app.get('*', function (req, res) {
    res.send(__dirname+'/public/404.html')
  })
 
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`);
})


/* const http = require('http')

http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'application/json'})
    res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(200,{'Content-Type':'application/csv'})

    res.write('hola mundo')
    res.end()
}).listen(8080)

console.log('Escuchando en el puerto',8080); */