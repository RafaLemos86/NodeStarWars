const express = require('express');
const app = express();
const path = require("path");
const router = require('./routes/routes');
const bodyParser = require('body-parser');

require('dotenv/config');

// ejs e bodyParser config
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



// rotas da aplicação
app.use("/", router)

PORT = process.env.PORT
// iniciar aplicacao 
app.listen(PORT, () => {
    console.log(`Servidor rodando na port ${PORT}`)
});
