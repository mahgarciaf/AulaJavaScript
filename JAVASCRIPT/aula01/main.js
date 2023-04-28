// criação de variáveis
    // o var pode ser redeclarado, o que pode gerar conflitos
var nome = 'Marielle';
    // let -> blockscope (variável de bloco) -> não pode ser redeclarado
let idade = 22; // string entre ''
    // o mais sugeridosd
const cidade = 'Caraguatatuba'; //constante
var valor = 2;

nome = 'Marielle Garcia';
idade = 23;


if(valor == 1){
    const cidade = 'Santos';
    if(idade > 18){
        // uma constante pode ser redeclarada dentro do bloco
        const cidade = 'São Paulo';
        console.log(nome + ' tem ' + idade + ' anos e mora em ' + cidade);
    }
}

if(valor === '2'){    // === -> estritamente igual (valor e tipo de variável)
    console.log('Valor é igual a 2')
} else {
    console.log('Valor é diferente de 2')
}


// typeof -> mostra qual o tipo da variável

// output
//console.log('Console do arquivo main.js');

// concatenando
//console.log(nome + ' tem ' + idade + ' anos e mora em ' + cidade);

//concatenando com crase
    // se idade string -> concatena ${idade + 1}
    // se idade int -> soma ${idade + 1}
console.log(`${nome} vai fazer ${idade} anos e mora em ${cidade}.`);

// funciona no broswer
// alert('Teste!');