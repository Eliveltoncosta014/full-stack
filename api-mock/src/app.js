import express from "express";
const app = express();

app.get("/", (req,res) => {
    res.send("Ola node .js")
});

export default app;



const cadastros = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},
{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},
{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];

import expresss from "express"
const app = expresss();

app.get ("/", (req, res) => {

    res.send("ola node .js");
})

export default app;


//------------CONST DE CADASTROS-----------------


const cadastro = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},
{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},
{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];


//------------FUNÇÕES DE CADASTRO-----------------

function buscarTodosCadastros() {
    return cadastros;
}

function buscarCadastroPorId(id) {
    return cadastros.findIndex(cadastro => cadastro.id === id);
}


//------------ROTAS DE CADASTRO-----------------


//rota principal
app.get("/", (req, res) => {
  res.send("Rota principal");
});


//rota para buscar todos os cadastros
app.get("/cadastros", (req, res) => {
    res.json(cadastros);
})

//rota para buscar cadastro por id
app.get("/cadastros/:id", (req, res) => {
  res.json(buscarCadastroPorId(req.params.id));
});


// EDITAR cadastro por ID

app.put("/cadastros/:id", (req, res) => {
  let index = buscarIdCadastros(req.params.id);

  if (index === -1) {
    return res.status(404).send(`Cadastro não encontrado!`);
  }

  cadastros[index].nome = req.body.nome;
  cadastros[index].telefone = req.body.telefone;
  cadastros[index].cpf = req.body.cpf;
  cadastros[index].email = req.body.email;
  cadastros[index].idade = req.body.idade;
  cadastros[index].endereco = req.body.endereco;

  res.json(cadastros[index]);
});


//rota para deletar cadastro por id
app.delete("/cadastros/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const indice = buscarCadastroPorId(id);
})

app.post("/cadastros", (req, res) => {
  cadastros.push(req.body);
  res.status(201).send("Cadastro realizado com sucesso!");
});