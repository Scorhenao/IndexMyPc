document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'  // Puedes ajustar esto a 'center', 'end', etc.
        });
    });
});

// Obtener elementos
const helpBtn = document.getElementById('helpBtn');
const modal = document.getElementById('helpModal');
const closeBtn = document.getElementsByClassName('close')[0];

// Mostrar el modal al hacer clic en el botón
helpBtn.onclick = function() {
    modal.style.display = 'flex';
}

// Cerrar el modal al hacer clic en la 'x'
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

