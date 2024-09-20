// Añadir confeti y redirigir a WhatsApp
document.getElementById('celebrate-button-1').addEventListener('click', function() {
    // Mostrar confeti
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
    /*
    // Redirigir a WhatsApp después de un breve retraso
    setTimeout(function() {
        window.location.href = 'https://wa.me/+5216181345512?text=Vamos a las cabañas!';
    }, 1000); // Retraso de 1 segundo para asegurar que el confeti se muestre
    */
});


document.getElementById('celebrate-button-2').addEventListener('click', function() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
    // Redirigir a WhatsApp después de un breve retraso
    setTimeout(function() {
        window.location.href = 'pages/maz.html'; // Redirigir a la nueva página
    }, 1000); // Retraso de 1 segundo para asegurar que el confeti se muestre

});

document.getElementById('celebrate-button-3').addEventListener('click', function() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
});

document.getElementById('celebrate-button-4').addEventListener('click', function() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
});

document.getElementById('celebrate-button-5').addEventListener('click', function() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
});

//modal
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal
    var modal = document.getElementById('myModal');
    // Obtener la imagen en el modal
    var modalImg = document.getElementById('img01');
    // Obtener todos los elementos de imagen
    var imgs = document.querySelectorAll('.img-thumbnail');
    // Obtener el botón de cerrar
    var span = document.getElementsByClassName('close')[0];

    imgs.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        }
    });

    // Cerrar el modal cuando se hace clic en el sombreado
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    span.onclick = function() {
        modal.style.display = 'none';
    }
});




