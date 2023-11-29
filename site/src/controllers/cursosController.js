const cursosModel = require("../models/cursosModel");



function inserirCertificado(req,res) {

    var fkUsuario = req.params.idUsuario;
    console.log(fkUsuario)

    cursosModel.inserirCertificado(fkUsuario)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
    inserirCertificado
}