var database = require("../database/config");

function inserirCertificado (idUsuario) {
    var instrucao = `
    INSERT INTO certificado (fkUsuarioCertificado) VALUES (${idUsuario} );
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}



module.exports = {
    inserirCertificado
}