const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('abrir-cadastrar').addEventListener('click', moveOverlay) // Adiciono um event listener, toda vez que eu clicar ele vai chamar aquela função 
document.getElementById('abrir-login').addEventListener('click', moveOverlay)

document.addEventListener("DOMContentLoaded", function () {
    var parametro = window.location.search;
    console.log(parametro)

    if (parametro == "?cadastro=true") {
        document.getElementById('abrir-login').click();
    }
})

const loginContainer = document.getElementById('login-container') // obtenho a referencia do HTML pelo id //
 // Crio uma const que tem como função utilizar o método toggle que representa a lista de classes de um elemento, ele adicionar a classe move ou remove //

