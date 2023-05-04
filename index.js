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
  const processo = "Cadastro"
  res.render('resposta', { nome, senha, processo });
});

app.get('/login', (req, res) => {
  const nome = req.query.nome;
  const senha = req.query.senha;
  const processo = "Login"
  res.render('resposta', { nome, senha, processo });
});

server.listen(80, () => {
  console.log('Running at http://localhost:80');
});
