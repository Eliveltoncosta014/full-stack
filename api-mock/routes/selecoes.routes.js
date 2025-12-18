import express from "express";
import conexao from "../infra/conexao.js";

const router = express.Router();



// busrcar por todas as seleçãoes 

// Buscar todas as seleções 
router.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result);
    });
});

// Criando POST para cadastrar 
app.post('/selecoes', (req, res) => {
    const selecao = req.body;
    const sql = "INSERT INTO selecoes SET?;";

    conexao.query(sql, selecao, () => {
        res.json({ mensagem: "Cadastrado com sucesso!"});
    })
});



    export default router ;