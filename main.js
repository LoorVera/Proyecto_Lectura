document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnEnter');
  const screen = document.getElementById('screen');

  btn.addEventListener('click', (event) => {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'btn-enter__ripple';
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());

    screen.classList.add('screen--leaving');
    setTimeout(() => {
      window.location.href = 'juego/index.html';
    }, 500);
  });
});
