import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Ola copa-mundo");
});

// Buscar todas as seleções 
app.get('/selecoes', (req, res) => {
    const sql = "SELECT * FROM selecoes";

    conexao.query(sql, (erro, result) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }
        res.json(result);
    });
});

// Buscar por ID 
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id = ?";

    conexao.query(sql, [id], (erro, result) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ mensagem: "Seleção não encontrada" });
        }
        res.json(result[0]);
    });
});

// Deletando registro 
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM selecoes WHERE id = ?";

    conexao.query(sql, [id], (erro, result) => {
        if (erro) {
            return res.status(500).json({ erro: erro.message });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Seleção não encontrada" });
        }

        res.json({ mensagem: "Registro deletado com sucesso" });
    });
});

export default app;
