var database = require("../database/config");

function investir(valorInvestimento, dtInvestimento, fkMeta) {
    

    var instrucao = `
        INSERT INTO investimentos (valor, dtInvestimento, fkMeta ) VALUES ('${valorInvestimento}', '${dtInvestimento}', '${fkMeta}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(fkUsuario) {
    var query = `select * from metas where fkUsuario = '${fkUsuario}';`;

  return database.executar(query);
}


function buscarIdMeta(fkUsuario) {
    var instrucao = `select idMeta from metas where fkUsuario ='${fkUsuario}'`

    return database.executar(instrucao);
}

function deletarMeta(idUsuario, idMeta) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMeta);    
    var instrucao = `
    DELETE FROM metas WHERE fkUsuario = ${idUsuario} AND idMeta = ${idMeta};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarValor(idMeta, data, novoValor) {
    var instrucao = ` UPDATE metas SET valorAtual = valorAtual + ${novoValor} WHERE idMeta = ${idMeta};
    `
   
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    investir,
    listar,
    buscarIdMeta,
    deletarMeta,
    editarValor
}