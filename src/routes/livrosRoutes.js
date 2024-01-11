import express from "express";
import LivroController from "../controllers/livroController.js";

//Cria um objeto routes que irá armazenar as rotas relacionadas aos livros instanciadas nos controllers;
const router = express.Router();

router.get("/livros", LivroController.listarLivros);
router.get("/livros/busca", LivroController.listarLivroPorEditora);
router.get("/livros/:id", LivroController.listarLivroPorId);
router.post("/livros", LivroController.cadastrarLivro);
router.put("/livros/:id", LivroController.atualizarLivro);
router.delete("/livros/:id", LivroController.excluirLivro);

export default router;

