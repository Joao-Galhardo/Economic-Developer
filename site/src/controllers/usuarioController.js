var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idMeta = req.params.idMeta;
    // var tipoUsuario = req.body.tipoUsuario;

    if (email == undefined) {
        res.status(400).send("Seu usuário está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!"); 
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultado) {
                    // console.log(\nResultados encontrados: ${resultado.length});
                    // console.log(Resultados: ${JSON.stringify(resultado)}); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json({
                        idUsuario: resultado[0].idUsuario,
                        nome: resultado[0].nome,
                        email: resultado[0].email,
                        senha: resultado[0].senha,
                        dtNasc: resultado[0].dtNasc,
                        nivelConhecimento: resultado[0].nivelConhecimento,
                        idMeta: resultado[0].idMeta
                        });
                    } else if (resultado.length == 0) {
                        res.status(403).send("Usuário e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServerCadastro;
    var email = req.body.emailServerCadastro;
    var senha = req.body.senhaServerCadastro;
    var dtNasc = req.body.dtNascServerCadastro;
    var nivelConhecimento = req.body.nivelConhecimentoServerCadastro;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua dtNasc está undefined!");
    } else if ( nivelConhecimento == undefined) {
        res.status(400).send("Seu conhecimento está undefined!");
    }
     else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, dtNasc, nivelConhecimento)
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
    autenticar,
    cadastrar
}