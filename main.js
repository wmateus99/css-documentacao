// Quando a página carregar
window.addEventListener("scroll", function() {
    let botaoVoltar = document.querySelector(".voltar-topo");
    
    // Verifica a posição de rolagem
    if (window.scrollY > 300) { // Ajuste 200 conforme o comportamento desejado
        botaoVoltar.style.display = "block"; // Exibe o botão
    } else {
        botaoVoltar.style.display = "none"; // Esconde o botão
    }
});

// Quando o botão for clicado, volta para o topo
document.querySelector(".botao").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});
