// let nome = "Diogo";
// let idade = 30;

// //CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

// //INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3;
// let sub = "5" - 3;

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

//CONVERTENDO VALORES
// let numero = "53" //string

// let convertido = Number(numero) //converte o valor para number

// console.log(typeof convertido);


// OPERADORES RELACIONAIS

// valida igualdade de valor (somente valor)
// "10" == 10 -> true

// valida igualdade de valor e tipo de dado 
// "10" === 10 -> false


// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hehedehe
//         break;
//         case 2:
// }


// ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// FUNÇÕES NATIVAS JS

// FUNÇÃO MAP()
// percorre uma lista e cria uma nova lista com base em uma condição

let numeros = [1, 2, 3, 4]

let numerosDobrados = numeros.map(function(num) {
    return num * 2
})

// numerosDobrados = [2, 4, 6, 8]
console.log(numerosDobrados);

// ou assim:
// Arrow function com retorno implícito

let numerosDobradosArrow = numeros.map(num => num * 2);
