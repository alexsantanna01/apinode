import express from "express";
import AutorController from '../controllers/autorController.js'

//Cria um objeto routes que irá armazenar as rotas relacionadas aos livros instanciadas nos controllers;
const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.excluirAutor);

export default routes;

