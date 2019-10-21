// Init Server
const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require('helmet')
const authPortal = require('./auth/preAuth/Validation')
require("dotenv").config();

//Set Globals
const port = process.env.PORT || 8080;
const path = require("path");
global.dbConfig = path.resolve(__dirname + "/data/db-config");
global.validation = path.resolve(__dirname + "/api/auth/preAuth/Validation");

//Import The Routes
const primaryRouter = require("./api/server");

//Style the Logs Yo
const chalk = require("chalk");
const lg = console.log;
const blu = chalk.blue;
const grn = chalk.green;

//Confiure Server
server.use(helmet())
server.use(cors());
server.use(express.json());

//Gotta Set those Routes Yo
server.use("/api", authPortal, primaryRouter);

//Turn this bad chicken with some style yo
server.listen(port, () => {
  lg(`
    ${grn("*************************************")} 
        Server listening on port: ${blu(port)} 
    ${grn("*************************************")}`);
  lg(`         ♫♪.ılılıll${blu("|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|")}llılılı.♫♪\n`);
});
