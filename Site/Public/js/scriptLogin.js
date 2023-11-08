
const loginContainer = document.getElementById('login-container') // obtenho a referencia do HTML pelo id //

const moveOverlay = () => loginContainer.classList.toggle('move') // Crio uma const que tem como função utilizar o método toggle que representa a lista de classes de um elemento, ele adicionar a classe move ou remove //

document.getElementById('abrir-cadastrar').addEventListener('click', moveOverlay) // Adiciono um event listener, toda vez que eu clicar ele vai chamar aquela função 
document.getElementById('abrir-login').addEventListener('click', moveOverlay)

