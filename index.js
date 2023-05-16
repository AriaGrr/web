const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

app.use(express.static("./public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

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
  let mensagem = "Cadastro realizado com sucesso";

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
    senha,
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

// Rota POST para lidar com solicitações de produtos
app.post("/products", (req, res) => {
  const produto = req.body.produto;
  const valor = req.body.valor;
  let mensagem = "Produto cadastrado com sucesso";

  // Verifica se o limite máximo de produtos foi atingido
  if (products.length >= 10) {
    mensagem = "Limite máximo de produtos atingido";
    res.render("products", {
      produto: "",
      valor: "",
      mensagem,
    });
    return;
  }
  // Adiciona o novo produto ao array
  products.push({
    produto,
    valor,
  });

  res.render("products", {
    produto: "Produto: " + produto,
    valor: "Preço: " + valor,
    mensagem,
  });
});

app.get("/listUsers", (req, res) => {
  res.render("listUsers", {
    logins,
  });
});

app.get("/listProducts", (req, res) => {
  res.render("listProducts", {
    products,
  });
});

// Definindo o esquema para os posts
const postSchema = new mongoose.Schema({
  titulo: String,
  resumo: String,
  conteudo: String,
});

// Criando um modelo para os posts com base no esquema
const Post = mongoose.model("Post", postSchema);

// Rota POST para lidar com solicitações de blog
app.post("/blog", (req, res) => {
  const titulo = req.body.titulo;
  const resumo = req.body.resumo;
  const conteudo = req.body.conteudo;

  // Criando uma nova instância do modelo Post
  const novoPost = new Post({
    titulo,
    resumo,
    conteudo,
  });

  // Salvando o novo post no banco de dados
  // Tratar o erro de salvamento, se necessário
  try {
    novoPost.save();
  } catch (err) {
    console.log(err);
    res.render("error", { mensagem: "Erro ao salvar o post" });
  }
  res.render("success", { mensagem: "Post salvo com sucesso" });
});

// Rota GET para a página do blog
app.get("/blog", (req, res) => {
  // Recupere os posts do banco de dados usando o modelo Post
  Post.find({}, (err, posts) => {
    if (err) {
      console.error(err);
      // Tratar o erro de recuperação dos posts, se necessário
      res.render("error", { mensagem: "Erro ao recuperar os posts do blog" });
    } else {
      res.render("blog.ejs", { posts });
    }
  });
});

app.listen(80, () => {
  console.log("Running at http://localhost:80");
});
