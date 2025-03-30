let etapa = 0; // Controla a etapa da interação

// Variáveis para a posição inicial do botão "Sim"
const posicaoInicialX = 130;  // Posição X inicial do botão
const posicaoInicialY = 450;  // Posição Y inicial do botão

function Positivo() {
    if (etapa === 0) {
        // Se a pergunta for "Você ainda me ama?"
        window.location.href = "Final.html"; 
    }else 
    
    if (etapa === 1){
     // Se a pergunta for "Você não me ama?"
     document.getElementById("pergunta").innerText = "Então você me ama?"; // Nova pergunta
     document.getElementById("btn-nao").style.display = "none"; // Remove o botão "Não"
     // Volta o botão "Sim" para a posição inicial e fixa ele
     voltarPosicaoInicial()
        
     etapa = 3;
    }else  

    if (etapa === 2){
        moverBotaoSim()
    }else

    if (etapa === 3){

        window.location.href = "Final.html"; 

    }
}

function Negativo() {
    if (etapa === 0) {
        // Se a pergunta for "Você ainda me ama?"
        document.getElementById("pergunta").innerText = "Você não me ama?"; // Muda a pergunta
        etapa = 1; // Avança para a próxima etapa
    } else if (etapa === 1) {
        // Se a pergunta for "Você não me ama?"
        document.getElementById("pergunta").innerText = "Você quer explicar o porquê?"; // Nova pergunta
        etapa = 2; // Avança para a próxima etapa
    } else if (etapa === 2) {
        // Se a pergunta for "Você quer explicar o porquê?"
        document.getElementById("pergunta").innerText = "Então você me ama?"; // Nova pergunta
        document.getElementById("btn-nao").style.display = "none"; // Remove o botão "Não"
        // Volta o botão "Sim" para a posição inicial e fixa ele
        voltarPosicaoInicial();
        etapa = 3; // Avança para a última etapa
    }
}

function moverBotaoSim() {
    // Função para mover o botão "Sim" para uma posição aleatória
    const btnSim = document.getElementById("btn-sim");

    // Obtemos o tamanho da janela para calcular posições aleatórias
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    // Calculamos posições aleatórias dentro da área visível da tela
    const novaPosicaoX = Math.random() * (larguraTela - btnSim.offsetWidth);
    const novaPosicaoY = Math.random() * (alturaTela - btnSim.offsetHeight);

    // Aplicamos as novas posições ao botão "Sim"
    btnSim.style.position = "absolute"; // Define posição absoluta para movimentação
    btnSim.style.left = `${novaPosicaoX}px`;
    btnSim.style.top = `${novaPosicaoY}px`;
}

function voltarPosicaoInicial() {
    // Função para voltar o botão "Sim" para a posição inicial
    const btnSim = document.getElementById("btn-sim");

    // Definindo a posição inicial do botão "Sim"
    btnSim.style.position = "absolute";
    btnSim.style.left = `${posicaoInicialX}px`;
    btnSim.style.top = `${posicaoInicialY}px`;


}
