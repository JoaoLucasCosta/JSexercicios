//Programe em JS, pedindo para o proessor
//Nome do aluno | nota 1 | nota 2 | nota 3 |
//Porcentagem de faltas
//Média >= 7 | porcentagem de faltas <25% | Aprovado
//Média < 7 ou >=5 | porcentagem de faltas >25% | Recuperação
//Média <5 | porcentagem de faltas >=25% | Reprovado
//Otimize a sua logica e faça um codigo elegante e limpo

let prompt = require("prompt-sync")();
let nome = prompt ("Nome do aluno:")
let nota1 = prompt("Digite a primeira nota do aluno:")
let nota2 = prompt("Digite a segunda nota do aluno:")
let nota3 = prompt("Digite a terceira nota do aluno:")
let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
let falta = prompt("Digite a porcentagem de faltas do aluno (apenas o número):")

if(media >= 7 && falta < 25)
        {console.log("Aluno aprovado!")} 
else if (media <7 && media >= 5 && falta <25)
        {console.log("Recuperação")} 
else if (media < 5 || falta >= 25)
        {console.log("Aluno reprovado!")}
