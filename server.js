const express = require('express');
const jsonServer = require('json-server');

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/receitas',jsonServer.router('db.json'))
app.use(express.static(__dirname + '/dist/receitas-app'));

app.get('/*',(req,res)=> {
  res.sendFile(__dirname + '/dist/receitas-app/index.html');
});

app.listen(PORT,() => {
  console.log('Servidor iniciado na porta '+PORT);
})
