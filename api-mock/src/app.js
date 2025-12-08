import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

app.get("/", (req,res) => {
    res.send("Ola copa-mundo")
});

//Buscar todas as seleções 

app.get('/selecoes',(req,res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro,result) => {
        res.json(result);
    });
});

// buscando pór ID 
app._router.get('/selecoes/:id', (req,res) => {
    const id =req.params.id;
    const sql = "SELECT *FROM  selecoes where id=?";

});

export default app;


