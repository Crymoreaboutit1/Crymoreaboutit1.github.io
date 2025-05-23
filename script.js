// Cambio sfondo e animazione tremore

function changeBackground(imageUrl) {
  document.body.style.backgroundImage = `url('${imageUrl}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
}

function shakeScreen() {
  const intensity = 10; // intensità del tremore
  const duration = 500; // durata in ms
  const startX = window.scrollX;
  const startY = window.scrollY;
  const startTime = Date.now();

  function shake() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const randomX = Math.random() * intensity * 2 - intensity;
      const randomY = Math.random() * intensity * 2 - intensity;
      window.scrollTo(startX + randomX, startY + randomY);
      requestAnimationFrame(shake);
    } else {
      window.scrollTo(startX, startY);
    }
  }
  shake();
}

document.getElementById('toggle-1').addEventListener('click', function() {
  changeBackground('https://xatimg.com/image/aNh0Aki6NX0S.jpg');
  shakeScreen();
});

document.getElementById('toggle-2').addEventListener('click', function() {
  changeBackground('https://xatimg.com/image/L9Pz1LFIZDrF.png');
  shakeScreen();
});

document.getElementById('toggle-3').addEventListener('click', function() {
  changeBackground('https://xatimg.com/image/ikuSQk3oNX30.jpg');
  shakeScreen();
});

// Aggiungi altri toggle se ne hai altri con lo stesso schema
