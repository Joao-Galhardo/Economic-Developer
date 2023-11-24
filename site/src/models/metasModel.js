var database = require("../database/config")

function inserir(titulo, valorTotal, dtInicio, dtFinal, valorInicial, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, valorTotal, dtInicio, dtFinal, valorInicial, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO metas (titulo, valorTotal, dtInicio, dtFinal, valorInicial, valorAtual, fkUsuario) VALUES ('${titulo}', '${valorTotal}', '${dtInicio}', '${dtFinal}','${valorInicial}', '${valorInicial}', '${fkUsuario}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao, );
}




module.exports = {
    inserir,
    
}