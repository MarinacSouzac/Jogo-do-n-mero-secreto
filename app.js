let listaDeNumerosSorteados=[];
let numeroLimite=10;
let numeroSecreto=gerarNumeroAleatorio();
let tentativas=1;

function exibirTextoNaTela(tag,texto){
let campo= document.querySelector(tag);
campo.innerHTML=texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial()
{
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroLimite}`);

}
exibirMensagemInicial();


function verificarChute()
{
    let chute=parseInt(document.querySelector('input').value);
    if(chute===numeroSecreto)
    {
        exibirTextoNaTela('h1','Você acertou!');
        let palavraTentativa= tentativas>1?'tentativas':'tentativa';
        let mensagemTentativas=`Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        
        {
        if(chute>numeroSecreto){
            
            exibirTextoNaTela('p','Tente novamente, o número secreto é menor');
        }else{
          
            exibirTextoNaTela('p','Tente novamente, o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    }
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido= parseInt(Math.random()*numeroLimite+1);
    let quantidadeElementoNaLista=listaDeNumerosSorteados.length;
    if(quantidadeElementoNaLista==numeroLimite)
    {
        listaDeNumerosSorteados=[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;


    }
}

function limparCampo()
{
    chute=document.querySelector('input');
    chute.value='';
}

function reiniciarJogo()
{
    numeroSecreto=gerarNumeroAleatorio();
    tentativas=1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}