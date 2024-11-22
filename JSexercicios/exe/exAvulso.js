<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script> 

let prompt = require("prompt-sync")()

let nome = prompt ("Digite seu nome;");
let horario = prompt ("É manhã(digite 1), tarde(digite 2) ou noite(digite 3)?")

if (horario == "1") 
    {console.log("Bom dia " + nome + "!")} 
else if (horario == "2") 
    {console.log("Boa tarde " + nome + "!")}
else if (horario == "3")
    {console.log("Boa noite " + nome + "!")}
else 
    {console.log("OPÇÃO INVÁLIDA!!")}

//VERIFICAR COM OPERADOR "OU" SE A ENTRADA É VÁLIDA NATES DE ENTRAR NO PROGRAMA


let nome2 = prompt ("Digite seu nome;");
let horario2 = prompt ("É manhã(digite 1), tarde(digite 2) ou noite(digite 3)?")

if (horario2 == "1" || horario2 == "2" || horario2 == "3") 
    {
        if (horario2 == "1") {console.log(`Bom dia, ${nome2}`)}
        if (horario2 == "2") {console.log(`Boa tarde, ${nome2}`)}
        if (horario2 == "3") {console.log(`Boa noite, ${nome2}`)}
    }
else 
(console.log("OPCÃO INVÁLIDA"))

    </script> 
    
</body>
</html>