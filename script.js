.avatar{
    --speed: 10s;
    --border-w: -5px;
    --border-clr: #340525;

}

.avatar img {
    width: 1200%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}


.avatar::before {
    position: absolute;
    content: '';
    z-index: -1;
    transform-origin: center;
    inset: var(--border-w);
    border-radius: 50%;
    background: conic-gradient(transparent 75%, var(--border-clr) 100%);
    animation: rotate-border var(--speed) linear infinite;
}

@keyframes rotate-border {
    from {
        rotate: 0turn;
    }

    to {
        rotate: 1turn
    }
}

// cor nick 

const nickname = document.getElementById('nickname');

 function changeBackground(imageUrl) {
  document.body.style.backgroundImage = `url('${imageUrl}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';



  function shakeScreen() {
        const intensity = 10; // Intensidade do tremor
        const duration = 500; // Duração do tremor em milissegundos
        const startX = window.scrollX; // Posição inicial do eixo X
        const startY = window.scrollY; // Posição inicial do eixo Y
        const startTime = Date.now(); // Tempo inicial

        // Função de animação
        function shake() {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            if (elapsedTime < duration) {
                const randomX = Math.random() * intensity * 2 - intensity;
                const randomY = Math.random() * intensity * 2 - intensity;
                window.scrollTo(startX + randomX, startY + randomY);
                requestAnimationFrame(shake);
            } else {
                window.scrollTo(startX, startY); // Retorna à posição inicial quando o tremor termina
            }
        }

        shake(); // Inicia a animação de tremor
    }

    // Evento de clique para acionar o tremor
   document.getElementById('toggle-1').addEventListener('click', function() {
  changeBackground('https://xatimg.com/image/aNh0Aki6NX0S.jpg');
});

document.getElementById('toggle-2').addEventListener('click', function() {
  changeBackground('https://xatimg.com/image/L9Pz1LFIZDrF.png');
});

document.getElementById('toggle-3').addEventListener('click', function() {
  changeBackground('https://xatimg.com/image/ikuSQk3oNX30.jpg');
});

// Aggiungi altri toggle se ne hai altri
