import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

app.get("/", (req,res) => {
    res.send("Ola node .js")
});

export default app;


