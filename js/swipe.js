let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", function(event) {
  touchStartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener("touchend", function(event) {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  if (touchStartX - touchEndX > 50) {
    // Deslizou para a esquerda
    window.location.href = "https://professorenoch.github.io/ProvaOnline/1ProvaOnlineModelo2.html";
  }
}

