
const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const assuntoInput = document.getElementById('assunto');
const mensagemInput = document.getElementById('mensagem');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    validateInputs();
});

function validateInputs() {
    const emailValue = emailInput.value.trim();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if(emailValue === '' || !isEmailValid) {
        setError(emailInput);
    } else {
        setSuccess(emailInput);
    }

    if(assuntoInput.value.trim() === '') {
        setError(assuntoInput); 
    } else {
        setSuccess(assuntoInput);
    }

    if(mensagemInput.value.trim() === '') {
        setError(mensagemInput);
    } else {
        setSuccess(mensagemInput);
    }
}

function setError(input) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
}

function setSuccess(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
}

function limparFormulario() {
    form.reset();
    const inputs = form.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
    });
}