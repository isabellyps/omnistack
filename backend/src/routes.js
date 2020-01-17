const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SeachrController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:github_username', DevController.update);
routes.delete('/devs/:github_username', DevController.destroy);

routes.get('/search', SeachrController.index);

module.exports = routes;

//Métodos HTTP: get, post, put, delete

//Tipos de parâmetros:
//Query Params: na maioria das vezes utilizado no GET - p/ filtros, ordenação, paginaçã, etc - acessível em req.query
//Route Params: acesso através de request.params - identificar um recurso na alteração ou remoção
//Body: acesso através de request.body - dados para criação ou alteração de um registro

//request e response é padrão - requisição e resposta