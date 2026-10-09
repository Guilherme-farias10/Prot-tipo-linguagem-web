// Inicializa o contador
let carrinhoCont = 0;

// Seleciona o elemento do contador (badge)
const carrinhoBadge = document.querySelector(".badge");

// Função que aumenta a quantidade
function addCarrinho() {
    console.log("clicou");
    carrinhoCont++;
    carrinhoBadge.textContent = carrinhoCont;
    alert("Produto adicionado ao carrinho!");
}

// Seleciona TODOS os botões corretamente
const botoes = document.querySelectorAll(".btn-primary");

// Adiciona evento de clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', addCarrinho); 
});

