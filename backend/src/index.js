const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

//MongoDB - não relacional
mongoose.connect('mongodb+srv://isabellyps:b12g26ze@omnistack-xtqjs.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//use = válido para toda a aplicação - 'cadastro' no express para entender requisições que tem o corpo em formato json
//deve vir antes das rotas
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(routes);


server.listen(3333);

