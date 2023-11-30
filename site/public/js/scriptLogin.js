const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('abrir-cadastrar').addEventListener('click', moveOverlay) 
document.getElementById('abrir-login').addEventListener('click', moveOverlay)

document.addEventListener("DOMContentLoaded", function () {
    var parametro = window.location.search;
    console.log(parametro)

    if (parametro == "?cadastro=true") {
        document.getElementById('abrir-login').click();
    }
})

const loginContainer = document.getElementById('login-container') 
