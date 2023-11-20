var metasModel = require("../models/metasModel");

function inserir(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var valorTotal = req.body.valorTotalServer;
    var dtInicio = req.body.dtInicioServer;
    var dtFinal = req.body.dtFinalServer;
    var valorInicial = req.body.valorInicialServer;
    var fkUsuario = req.params.idUsuario;
    var fkMeta = req.params.idMeta

    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (valorTotal == undefined) {
        res.status(400).send("Seu valorTotal está undefined!");
    } else if (dtInicio == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (dtFinal == undefined) {
        res.status(400).send("Sua dtFinal está undefined!");
    } else if ( valorInicial == undefined) {
        res.status(400).send("Seu conhecimento está undefined!");
    }
     else {

        // Passe os valores como parâmetro e vá para o arquivo metasModel.js
        metasModel.inserir(titulo, valorTotal, dtInicio, dtFinal, valorInicial, fkUsuario, fkMeta)
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
}



module.exports = {
    inserir,
}