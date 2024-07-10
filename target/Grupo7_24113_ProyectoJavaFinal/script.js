// script.js
function handleFormSubmission() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const p = document.getElementById("parrafo");
    
    // Agregar la lógica para enviar la solicitud al servidor
    // y procesar la recuperación de contraseña.

    // valido el email ingresado y adapto el mensaje
    if (emailValue === '') {
        p.innerText = "El correo electronico es obligatorio";
    } else if (!isEmail(emailValue)) {
        p.innerText = "Ingrese un correo electronico válido";
    } else {
        p.innerText = "¡Correo enviado correctamente!";
    }

    // Mostrar el modal de éxito
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'block';
}

function closeModal() {
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'none';
}

function isEmail(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);//devuelve true si la cadena coincide con el patrón de la expresión regular
}

// Evitar que el formulario se envíe automáticamente
document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
});


