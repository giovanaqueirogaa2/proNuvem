const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Bem vindo ao meu site")
})

app.get("/sobre/:dis", function(req,res){
    res.send("Meu site sobre o trabalho de: "+req.params.dis)
})
app.get("/quem",function(req,res){
    res.send("Eu sou a Giovana")
})

app.listen(4000, function(erro){
    if(erro){
        console.log("erro ao iniciar")
    }else{
        console.log("Servidor iniciado")
    }
})