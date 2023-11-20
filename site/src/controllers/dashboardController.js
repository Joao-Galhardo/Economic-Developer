const dashboardModel = require("../models/dashboardModel");

function investir(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var valorInvestido = req.body.valorInvestidoServer;
    var dtInvestimento = req.body.dtInvestimentoServer;
    var fkUsuario = req.params.idUsuario;
    var fkMeta = req.body.idMetaServer;


    // Faça as validações dos valores
    if (valorInvestido == undefined) {
        res.status(400).send("Seu valor está undefined!");
    } else if (dtInvestimento == undefined) {
        res.status(400).send("A data está undefined!");
    } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.investir(valorInvestido, dtInvestimento, fkUsuario, fkMeta)
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



  function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.listar(idUsuario)
    .then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log(
                "Houve um erro ao buscar os avisos: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

 
function deletar(req, res) {
        var idUsuario = req.params.idUsuario;
        var idMeta = req.params.idMeta
    
        avisoModel.deletar(idUsuario, idMeta)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }



module.exports = {
    investir,
    listar,
    deletar
}
   