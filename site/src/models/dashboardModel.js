var database = require("../database/config");

function investir(valorInvestimento, dtInvestimento, fkMeta) {
    

    var instrucao = `
        INSERT INTO investimentos (valor, dtInvestimento, fkMeta ) VALUES ('${valorInvestimento}', '${dtInvestimento}', '${fkMeta}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(fkUsuario) {
    var query = `select * from metas where fkUsuario = '${fkUsuario}'`;

  return database.executar(query);
}
// function listar(fkUsuario) {
//     var query = `select * from metas where fkUsuario = '${fkUsuario}'`;

//   return database.executar(query);
// }

module.exports = {
    investir,
    listar
}