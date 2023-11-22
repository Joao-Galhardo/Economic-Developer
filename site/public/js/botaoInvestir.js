function abrirInvestir(idMeta) {
    console.log("Botão Investir clicado para a meta com ID:", idMeta); 
    const divInvestir = document.getElementById(`div_investir${idMeta}`);
    const btnInvestir = document.getElementById(`btn_salvar${idMeta}`);
    divInvestir.style.display = divInvestir.style.display === 'none' ? 'flex' : 'none'; 
    btnInvestir.style.display = btnInvestir.style.display === 'none' ? 'flex' : 'none'; 
}