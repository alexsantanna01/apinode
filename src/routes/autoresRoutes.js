import express from "express";
import AutorController from "../controllers/autoresController.js";

//Cria um objeto routes que irá armazenar as rotas relacionadas aos livros instanciadas nos controllers;
const router = express.Router();

router.get("/autores", AutorController.listarAutores);
router.get("/autores/:id", AutorController.listarAutorPorId);
router.post("/autores", AutorController.cadastrarAutor);
router.put("/autores/:id", AutorController.atualizarAutor);
router.delete("/autores/:id", AutorController.excluirAutor);

export default router;

