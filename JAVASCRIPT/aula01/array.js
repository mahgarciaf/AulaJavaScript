// declarando array no js
    // o typeof de um array é object
const idades = [];  // array vazio
const nomes = ['Marielle', 'Kauan'];

const carro = {} //objeto vazio
const pessoa = {
    nome: 'Marielle',
    idade: 23
};
console.log(pessoa.nome);

const valores = ['kauan', 21, pessoa, ['gol', 'palio', 'uno']];

console.log(typeof nomes);
console.log(typeof pessoa);

console.log(valores[2].nome); // objeto dentro de array
console.log(valores[3][0]); // array dentro de array

console.log(valores.length); // tamanho do array
valores.push(10); // adiciona o elemento do parênteses no final do array
//valores.pop() // remove o último elementto do array
console.log(valores) // tamanho do array