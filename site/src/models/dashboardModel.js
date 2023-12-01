var database = require("../database/config");


function listar(fkUsuario) {
    var query = `select * from metas where fkUsuario = '${fkUsuario}';`;

  return database.executar(query);
}


function deletarMeta(idUsuario, idMeta) {
    console.log("ACESSEI O DASHBOAD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMeta);    
    var instrucao = `
    DELETE FROM metas WHERE fkUsuario = ${idUsuario} AND idMeta = ${idMeta};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarInvestimentos(idMeta, idUsuario) {
    console.log("ACESSEI O DASHBOAD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMeta);
    var instrucao = `delete from investimentos where fkMeta = ${idMeta} and fkUsuarioInvestimento = ${idUsuario};`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function editarValor(idMeta, novoValor) {
    var instrucao = ` UPDATE metas SET valorAtual = valorAtual + ${novoValor} WHERE idMeta = ${idMeta};
    `
   
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function adicionarValor (idMeta, valorInvestido, dtInvestimento, idUsuario) {
    var instrucao = `
    INSERT INTO investimentos (valor, dtInvestimento, fkMeta, fkUsuarioInvestimento) VALUES ('${valorInvestido}', '${dtInvestimento}', ${idMeta}, ${idUsuario} );
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function atualizarGrafico (idUsuario) {
    var instrucao = `
    SELECT YEAR(dtInvestimento) AS ano, MONTH(dtInvestimento) AS mes, SUM(valor) AS total FROM investimentos WHERE fkUsuarioInvestimento = ${idUsuario} GROUP BY ano, mes ORDER BY ano ASC, mes ASC;`

    console.log(`Executando a instrução SQL: \n + ${instrucao}`)
    return database.executar(instrucao)
}

function listarCertificado(idUsuario) {
    var instrucao = `
    select * from certificado where fkUsuarioCertificado = ${idUsuario};`

    console.log(`Executando a instrução SQL: \n + ${instrucao}`)
    return database.executar(instrucao)
}


module.exports = {
    listar,
    deletarMeta,
    editarValor,
    adicionarValor,
    atualizarGrafico,
    listarCertificado,
    deletarInvestimentos
}