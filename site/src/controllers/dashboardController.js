const dashboardModel = require("../models/dashboardModel");

function investir(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var valorInvestido = req.body.valorInvestidoServer;
    var dtInvestimento = req.body.dtInvestimentoServer;
    var fkUsuario = req.params.idUsuario;

    // Faça as validações dos valores
    if (valorInvestido == undefined) {
        res.status(400).send("Seu valor está undefined!");
    } else if (dtInvestimento == undefined) {
        res.status(400).send("A data está undefined!");
    } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        dashboardModel.investir(valorInvestido, dtInvestimento)
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
    var fkUsuario = sessionStorage.ID_USUARIO
    dashboardModel.listar(fkUsuario).then((resultado) => {
      res.status(200).json(resultado);
    });
  }



module.exports = {
    investir,
    listar
}
   
