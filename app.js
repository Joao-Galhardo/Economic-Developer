const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
});

app.use(express.static(__dirname + "/public"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "/views"));

const indexRouter = require("./src/routes/indexRouter");
const loginRouter = require("./src/routes/loginRouter");
const perfilRouter = require("./src/routes/perfilRouter");
const sobreRouter = require("./src/routes/sobreRouter");
const odsRouter = require("./src/routes/odsRouter");
const simuladorRouter = require("./src/routes/simuladorRouter");

app.get("/", indexRouter);
app.get("/login", loginRouter);
app.get("/perfil", perfilRouter);
app.get("/sobre", sobreRouter);
app.get("/ods", odsRouter);
app.get("/simulador", simuladorRouter);


