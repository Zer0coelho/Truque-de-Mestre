// =================== EXPLICAÇÃO DO CÓDIGO ===================
        /*
         * ARRAY DE CARTAS:
         * - Array contendo diferentes emojis de cartas para a animação
         * - Cada emoji será usado aleatoriamente na criação das cartas
         */
        const cartas = ['♠️', '♥️', '♦️', '♣️', '🃏', '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪'];
        
        /*
         * FUNÇÃO CRIAR CARTA:
         * - Responsável por criar e configurar cada carta individual
         * - Chamada a cada 500ms pelo setInterval
         */
        function criarCarta() {
            // Cria um novo elemento div para a carta
            const carta = document.createElement('div');
            
            // Aplica a classe 'carta' para receber os estilos CSS
            carta.className = 'carta';
            
            // Seleciona um emoji aleatório do array de cartas
            // Math.floor arredonda para baixo o número aleatório gerado
            carta.textContent = cartas[Math.floor(Math.random() * cartas.length)];
            
            // Define uma posição vertical aleatória
            // window.innerHeight retorna a altura da janela do navegador
            carta.style.top = Math.random() * window.innerHeight + 'px';
            
            // Define uma duração aleatória para a animação entre 5 e 15 segundos
            // Isso faz com que cada carta tenha uma velocidade única
            carta.style.animationDuration = (5 + Math.random() * 10) + 's';
            
            // Adiciona a carta ao body do documento
            document.body.appendChild(carta);

            // Remove a carta após 15 segundos para evitar sobrecarga de memória
            setTimeout(() => {
                carta.remove();
            }, 15000);
        }

        /*
         * INTERVALO DE CRIAÇÃO:
         * - setInterval executa a função criarCarta a cada 500ms
         * - Isso cria um fluxo contínuo de cartas na tela
         * - 500ms = meio segundo
         */
        setInterval(criarCarta, 500);

        // =================== FIM DA EXPLICAÇÃO ===================