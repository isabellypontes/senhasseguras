const numeroSenha = document. querySelector('parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha. textContent = tamanhoSenha;
const letraMaiuscula = 'ABCEFGHIJKLMNOPQRTUVWXY';
const letraMinucula = 'abcdefghijklmnopqrstuvwxy';
const numeros = '0123456789';
const simbolo = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document. querySelectorAll('#campo-senha');
const checkbox = document. querySelectorAll('.checkbox');
const forcaSenha = document. querySelectorAll('forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha>1){
    }
    
}