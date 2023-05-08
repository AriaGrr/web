const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({
  extended: false
}));

const server = http.createServer(app);

logins = [];
products = [];

// Rota GET para a página inicial
app.get("/", (req, res) => {
  res.redirect("projects.html");
});

// Rota POST para lidar com solicitações de cadastro
app.post("/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const senha = req.body.senha;
  let mensagem = "Cadastro relizado com sucesso";

  // Verifica se o limite máximo de usuários foi atingido
  if (logins.length >= 10) {
    mensagem = "Limite máximo de usuários atingido";
    res.render("resposta", {
      nome: "",
      senha: "",
      mensagem,
    });
    return;
  }

  // Verifica se o login já existe no array
  const loginExistente = logins.find((l) => l.nome === nome);
  if (loginExistente) {
    mensagem = "Login já cadastrado";
    res.render("resposta", {
      nome: "",
      senha: "",
      mensagem,
    });
    return;
  }

  // Adiciona o novo login ao array
  logins.push({
    nome,
    senha
  });

  res.render("resposta", {
    nome: "Nome: " + nome,
    senha: "Senha: " + senha,
    mensagem,
  });
});

// Rota POST para lidar com solicitações de login
app.post("/login", (req, res) => {
  const nome = req.body.nome;
  const senha = req.body.senha;
  let mensagem = "Login realizado com sucesso";

  // Busca o usuário no array de logins
  const usuario = logins.find((l) => l.nome === nome && l.senha === senha);
  if (usuario) {
    // Informações de login corretas
    res.render("resposta", {
      nome: "Nome: " + nome,
      senha: "Senha: " + senha,
      mensagem,
    });
  } else {
    // Informações de login incorretas
    mensagem = "Nome de usuário ou senha incorretos";
    res.render("resposta", {
      nome: "",
      senha: "",
      mensagem,
    });
    return;
  }
});

// Produtos
app.post("/products", (req, res) => {
  const produto = req.body.produto;
  const valor = req.body.valor;
  let mensagem = "Produto cadastrado com sucesso";

  //   // Verifica se o limite máximo de usuários foi atingido
  if (products.length >= 10) {
    mensagem = "Limite máximo de produtos atingido";
    res.render("products", {
      produto: "",
      valor: "",
      mensagem,
    });
    return;
  }

  // Verifica se o login já existe no array
  const existingProduct = products.find((l) => l.produto === produto);
  if (existingProduct) {
    mensagem = "Produto já cadastrado";
    res.render("products", {
      produto: "",
      valor: "",
      mensagem,
    });
    return;
  }
  // Adiciona o novo login ao array
  products.push({
    produto,
    valor
  });
console.log(products);
  res.render("products", {
    produto: "Produto: " + produto,
    valor: "Preço: " + valor,
    mensagem,
  });
});

server.listen(80, () => {
  console.log("Running at http://localhost:80");
 
});