import express from "express";
import livros from "./livrosRoutes.js";
import autores from './autoresRoutes.js'

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  //chama a rota de livros
  app.use(express.json(), livros);
  //chama a rota de autores
  app.use(express.json(), autores);
};

export default routes;