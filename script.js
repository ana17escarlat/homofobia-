// Função para ajustar o layout com base na largura da janela e no tipo de dispositivo
function ajustarLayout() {
    var larguraJanela = window.innerWidth;
    var dispositivo = '';

    // Detectar o tipo de dispositivo com base na largura da janela
    if (larguraJanela < 768) {
        dispositivo = 'mobile';
    } else if (larguraJanela >= 768 && larguraJanela < 1024) {
        dispositivo = 'tablet';
    } else {
        dispositivo = 'desktop';
    }

    // Executar ações com base no tipo de dispositivo
    switch (dispositivo) {
        case 'mobile':
            // Código para layout em dispositivos móveis
            break;
        case 'tablet':
            // Código para layout em tablets
            break;
        case 'desktop':
            // Código para layout em desktops
            break;
    }
}

// Função para adicionar evento de clique ao botão de menu em dispositivos móveis
function adicionarEventoMenu() {
    var botaoMenu = document.getElementById('botao-menu');
    botaoMenu.addEventListener('click', function() {
        // Código para exibir/ocultar o menu em dispositivos móveis
    });
}

// Chamar as funções ao carregar a página e ao redimensionar a janela
window.onload = function() {
    ajustarLayout();
    adicionarEventoMenu();
};

window.onresize = ajustarLayout;