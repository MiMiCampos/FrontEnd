console.log("BOA NOITE, HOJE É SEXTA-FEIRA!")

// CONSOLE
console.error("Este é um Erro!");
console.warn("Este é um Aviso!");

//VARIÁVEIS
var x = 10;

//VARIÁVEIS MODERNAS
let y = 15;
const z = 20;

console.log(x);
console.log(y);
console.log(z);

//TIPOS DE DADOS
// 1º Texto (String):
const name = "Mimi Campos";
console.log(name);
console.log(typeof name); // typeof é um operador que retorna o tipo de dado da variável

// 2º Número (Number):
const shirtQty = 4;
console.log(shirtQty);
console.log(typeof shirtQty);

// 3º Número Decimal (Float):
const decimal = 20.1
console.log(decimal);
console.log(typeof decimal);

// 4º Booleano (Boolean):
const isAproved = false;
console.log(isAproved);
console.log(typeof isAproved);

// 5º Nulo (Null):
let surname = null;
console.log(surname);
console.log(typeof surname); // typeof null retorna "object", isso é um bug do JavaScript, mas é assim que funciona

// 6º Array (Lista):
let languages = ["JavaScript", "PHP", "Python"];
console.log(languages);
console.log(typeof languages); // typeof array retorna "object", porque arrays são objetos em JavaScript

// 7º Objeto (Object):
const user = {email: "mimi@exemplo.com", password: "123456", age: 26};
console.log(user);
console.log(typeof user); // typeof objeto retorna "object"

//MÉTODO DE STRING
const fullName = "Mimi Campos";
console.log(fullName.length);
console.log(typeof fullName.length); // typeof length retorna "number", porque length é um número que representa a quantidade de caracteres da s= tring

const array = fullName.split(" "); // split é um método de string que divide a string em um array, usando o espaço como separador
console.log(array);

const stringToArray = fullName.split(""); // split com string vazia como separador divide a string em um array de caracteres
console.log(stringToArray);
console.log(fullName.toLowerCase()); // toLowerCase é um método de string que converte a string para letras minúsculas