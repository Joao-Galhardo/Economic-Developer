function abrirInvestir() {
    console.log("Botão Investir clicado!"); 
    const divInvestir = document.getElementById("div_investir");
    const btnInvestir = document.getElementById("btn_salvar");
    
    divInvestir.style.display = divInvestir.style.display === 'none' ? 'flex' : 'none'; 
    btnInvestir.style.display = btnInvestir.style.display === 'none' ? 'flex' : 'none'; 
}