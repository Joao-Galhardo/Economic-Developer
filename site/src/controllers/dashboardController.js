const dashboardModel = require("../models/dashboardModel");

function investir(req, res) {
    
    var valorInvestido = req.body.valorInvestidoServer;
    var dtInvestimento = req.body.dtInvestimentoServer;
    var fkUsuario = req.params.idUsuario;
    var fkMeta = req.body.idMetaServer;


    
    if (valorInvestido == undefined) {
        res.status(400).send("Seu valor está undefined!");
    } else if (dtInvestimento == undefined) {
        res.status(400).send("A data está undefined!");
    } 
    else {

        
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
    
        dashboardModel.deletarMeta(idUsuario, idMeta)
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

    function deletarInvestimentos(req, res) {
        
        var idMeta = req.params.idMeta
        var idUsuario = req.params.idUsuario;
    
        dashboardModel.deletarInvestimentos(idMeta, idUsuario)
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

    function atualizarValor(req, res) {
        var novoValor = req.body.valorInvestido
        var idMeta = req.params.idMeta
        var idUsuario = req.params.idUsuario

        console.log("valor do investimento " + novoValor)

        dashboardModel.editarValor(idMeta, novoValor, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    
function adicionarValor(req,res) {

    var idMeta = req.params.idMeta
    var valorInvestido = req.body.valorInvestidoServer;
    var dtInvestimento = req.body.dataServer;
    var fkUsuario = req.params.idUsuario;

    dashboardModel.adicionarValor(idMeta, valorInvestido, dtInvestimento, fkUsuario )
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

function atualizarGrafico(req, res) {
    var idUsuario = req.params.idUsuario

    dashboardModel.atualizarGrafico(idUsuario)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao ao tentar atualizar o grafico",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );


}

function listarCertificado(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.listarCertificado(idUsuario)
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

module.exports = {
    investir,
    listar,
    deletar,
    atualizarValor,
    adicionarValor,
    atualizarGrafico,
    listarCertificado,
    deletarInvestimentos
}