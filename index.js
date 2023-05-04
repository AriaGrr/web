const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public'));

app.set('view engine', 'ejs')
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app);

app.post('/cadastrar', (req, res) => {
  const nome = req.body.nome;
  const senha = req.body.senha;
  res.render('cadastro', { nome, senha });
});

app.get('/login', (req, res) => {
  const nome = req.query.nome;
  const senha = req.query.senha;
  res.render('login', { nome, senha });
});

server.listen(80, () => {
  console.log('Running at http://localhost:80');
});
