
let quantidadeProdutos = 0;
let prato = "";
let bebidas = "";
let sobremesa = "";


function escolherPrato(){
prato = "Frango"
}
function selecionarComidas(seletor){
    const removerClasse = document.querySelector('.comidas_selecionadas')
    
    if (removerClasse !== null){
        removerClasse.classList.remove("comidas_selecionadas")
        quantidadeProdutos --;
    }
    
    
    
    seletor.classList.add("comidas_selecionadas");
    quantidadeProdutos ++;
    
}

function selecionarBebidas(seletor){
    const removerClasse = document.querySelector('.bebidas_selecionadas')
    if (removerClasse !== null){
        removerClasse.classList.remove("bebidas_selecionadas")
        quantidadeProdutos --;
    }
    
    seletor.classList.add("bebidas_selecionadas");
    quantidadeProdutos ++;
}


function selecionarSobremesa(seletor){
    const removerClasse = document.querySelector('.sobremesas_selecionadas')
    if (removerClasse !== null){
        removerClasse.classList.remove("sobremesas_selecionadas")
        quantidadeProdutos --;
    }
    
    seletor.classList.add("sobremesas_selecionadas");
    quantidadeProdutos ++;
    if(quantidadeProdutos === 3){
        const botaoAtivado = document.querySelector('.Fazer_pedido');
        botaoAtivado.innerHTML = 'Fechar Pedido';
        botaoAtivado.classList.add("botao_ativado");
    }
}