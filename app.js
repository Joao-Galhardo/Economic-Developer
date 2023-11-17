

const express = require("express");
var cors = require("cors");
const path = require("path");
const app = express();
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

const port = 3333;

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
});

app.use(express.static(__dirname + "/public"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "/views"));

const indexRouter = require("./src/routes/indexRouter");
const loginRouter = require("./src/routes/loginRouter");
const perfilRouter = require("./src/routes/perfilRouter");
const sobreRouter = require("./src/routes/sobreRouter");
const odsRouter = require("./src/routes/odsRouter");
const simuladorRouter = require("./src/routes/simuladorRouter");
const conversorRouter = require("./src/routes/conversorRouter");

app.use(cors());

app.get("/", indexRouter);
app.get("/login", loginRouter);
app.get("/perfil", perfilRouter);
app.get("/sobre", sobreRouter);
app.get("/ods", odsRouter);
app.get("/simulador", simuladorRouter);
app.get("/conversor", conversorRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
