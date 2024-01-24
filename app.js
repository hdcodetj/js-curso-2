// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo Secreto!';

// let paragrafo = document.querySelector('.texto__paragrafo')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'
let numeroSecreto = gerarNumero()

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo Secreto');
exibirTextoNaTela('.texto__paragrafo', 'Escolha um texto de 1 a 100');

function verificarChute() {
    let chute = document.querySelector('.container__input').value
    console.log(numeroSecreto)
    console.log(chute == numeroSecreto);
}

function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}
