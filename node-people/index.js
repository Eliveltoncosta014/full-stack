const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para permitir receber JSON (necessário para POST)
app.use(express.json());

// Mock
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "70" },
];

const times = [
  { id: 1, nome: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nome: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nome: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nome: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nome: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nome: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nome: "Cruzeiro", estado: "MG", titulos: 4 },
];

// ---------------- Funções auxiliares ---------------- //

// Retorna os objetos que possuem o ID
function buscarNomePorId(id) {
  id = Number(id);
  return nomes.filter((nome) => nome && nome.id === id);
}

// Retorna o índice do elemento
function buscarIdNomes(id) {
  id = Number(id);
  return nomes.findIndex((nome) => nome && nome.id === id);
}

// ---------------- Rotas ---------------- //

// Rota principal
app.get("/", (req, res) => {
  res.send("Rota principal");
});

// Rota de teste
app.get("/teste", (req, res) => {
  res.send("API nodePeople está funcionando!");
});

// Listar todos os nomes
app.get("/listaNomes", (req, res) => {
  res.json(nomes);
});

// Buscar nome por ID
app.get("/listaNomes/:id", (req, res) => {
  const id = Number(req.params.id);
  const resultado = buscarNomePorId(id);

  if (resultado.length === 0) {
    return res.status(404).json({ erro: "ID não encontrado" });
  }

  res.json(resultado);
});

// Cadastrar novo nome
app.post("/listaNomes", (req, res) => {
  const novo = req.body;

  // validação básica
  if (!novo.id || !novo.nome || !novo.idade) {
    return res.status(400).json({ erro: "Campos incompletos" });
  }

  nomes.push(novo);
  res.status(201).send("Nome cadastrado com sucesso!");
});

// Excluir por ID
app.delete("/listaNomes/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = buscarIdNomes(id);

  if (index === -1) {
    return res.status(404).json({ erro: "ID não encontrado" });
  }

  nomes.splice(index, 1);
  res.send(`Nome com id ${id} excluído com sucesso!`);
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
