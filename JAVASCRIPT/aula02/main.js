
 /* ---------- DESTRUCTURING ---------- */

const cars = ['gol', 'fusca', 'tesla']

console.log(cars)

// const fisrtCar = cars[0]
// const secondCar = cars[1]
// const thirdCar = cars[2]

const [fisrtCar, secondCar, thirdCar] = cars

console.log(fisrtCar)

const pessoa = {
    nome: 'Marielle',
    idade: 22,
    cidade: 'Caragua',
}

console.log(pessoa)

const {nome, idade, cidade: city} = pessoa // Destructing
// cidade: city -> tira a propriedade cidade de dentro do objeto e renomeia para city

const end = {
    rua: 'Pernambuco',
    numero: 0,
    bairro: 'centro'
}

const user = {
    email: 'user@gmail.com',
    nameUser: 'Mari',
    // sprad: colocou todos os elementos de end dentro do user
    ...end
}

const {nameUser, rua} = user

// Destructing

// dentro do console.log, para concatenar uma string com variáveis usa-se crase
console.log(`Olá ${nameUser}, sua rua é ${rua}`)

const filme = [ 'Lord of the Rings', 2000, 'Tolkien', 'Peter Jackson']

//const [title, ano, , diretor] = filme
// ao colocar ",," você pula a variável que ocuparia essa posição

//console.log(`O filme ${title} foi exibido no ano ${ano} e foi produzido por ${diretor}`)

const [ , , autor] = filme
console.log(`O autor do filme é ${autor}`)



 /* ---------- FUNÇÕES ---------- */

 function soma(valor1, valor2) {
     return valor1 + valor2
 }

 console.log(soma(10, 5))

 // Arrow Function
const soma2 = (valor1, valor2) => valor1 + valor2


 const calculadora = {
     // Função Anônima
    sum: function (valor1, valor2){
        return valor1 + valor2
    },
    sub: function (valor1, valor2){
        return valor1 - valor2
    },
    mult: function (valor1, valor2){
        return valor1 * valor2
    },
    div: function (valor1, valor2){
        return valor1 / valor2
    },
 }

 // atribui a mostraDiv a estrutura da função
const mostraDiv = calculadora.div

console.log(calculadora.sum(10,5))
console.log(calculadora.sub(10,5))
console.log(calculadora.mult(10,5))

// executa a função
console.log(calculadora.div(10,5))
// mostra a estrutura
console.log(calculadora.div)
console.log(mostraDiv)

const total = (v1, v2, v3) => {
    const soma = v1 + v2
    return soma * v3
}

console.log(total(2, 3, 10))

// EX: criar a função multiplicaTudo com 4 valores de entrada

const multiplicaTudo = (v1, v2, v3, v4) => v1 * v2 * v3 * v4

const multiplicaTudo2 = (v1, v2, v3, v4) => {
    let mult = v1 * v2
    mult = mult * v3
    mult = mult * v4
    return mult
}

console.log(multiplicaTudo(2,3,2,5))
console.log(multiplicaTudo2(2,3,2,5))


/* ------------- CLASSES ------------ */

class Car {
    constructor(name, year) {
        this.name = name,
        this.year = year
    }
    showCar(){
        console.log(`O nome é ${this.name} ano ${this.year}`)
    }
    getName(){
        return this.name
    }
}

const car1 = new Car('Gol', 2003)
console.log(car1.name)
car1.showCar() 

console.log(car1.getName())


// criar uma classe Calculadora dom as 4 operações e dois valores

class Calculadora {
    constructor(valor1, valor2){
        this.valor1 = valor1,
        this.valor2 = valor2
    }
    sum(){
        return this.valor1 + this.valor2
    }
    sub(){
        return this.valor1 - this.valor2
    }
    mult(){
        return this.valor1 * this.valor2
    }
    div(){
        return this.valor1 / this.valor2
    }  
    div2(){
        console.log(this.valor1 / this.valor2)
    } 
}

const calc1 = new Calculadora(10,5)
console.log(calc1.sum())
console.log(calc1.sub())
console.log(calc1.mult())
console.log(calc1.div())
calc1.div2()
