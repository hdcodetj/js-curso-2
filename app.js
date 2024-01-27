// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo Secreto!';

// let paragrafo = document.querySelector('.texto__paragrafo')
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'
let listaDeNumerosVazios = [];
let limiteMaximo = 10
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirTextoInicial() {
exibirTextoNaTela('h1', 'Jogo Secreto');
exibirTextoNaTela('.texto__paragrafo', 'Escolha um texto de 1 a 10');
}
exibirTextoInicial()

function verificarChute() {
    let chute = document.querySelector('.container__input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', '🥳 Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto, que é ${numeroSecreto}. Com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é menor`);
    } else {
        exibirTextoNaTela('p', `O número secreto é maior`);
    tentativas++
    }
    limparChute()
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * limiteMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosVazios.length;
    if (quantidadeDeElementosNaLista == limiteMaximo) {
        listaDeNumerosVazios = []
    }
    if (listaDeNumerosVazios.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosVazios.push(numeroEscolhido)
        console.log(listaDeNumerosVazios)
        return numeroEscolhido;
    }
}

function limparChute() {
    chute = document.querySelector('.container__input');
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparChute();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}