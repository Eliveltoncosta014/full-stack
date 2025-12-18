import express from "express";
import conexao from "../infra/conexao.js";
import router from "../routes/selecoes.routes.js";

const app = express();

// Indicar para express ler o body com json
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});


// Buscando por ID
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "select * from selecoes where id=?;";

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);
    
    
            // rota 404

app.use ((req,res) => {
    res.status (404).json({mensagem : "Rota não encontrada"});

});

    
    });
});

export default app;
