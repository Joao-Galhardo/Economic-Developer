const express = require("express");
const path = require("path");
const app = express();

const port = 3030;


app.listen(port, () => {console.log("Servidor iniciado na porta " + port)});

app.use(express.static(__dirname+"/public"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname,"/views"));

const indexRouter = require("./src/routes/indexRouter");
const loginRouter = require ("./src/routes/loginRouter")


app.use("/", indexRouter);
app.use("/login", loginRouter)

