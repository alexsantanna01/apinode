import autores from "../models/Autor.js";

class AutorController {
  static async listarAutores (req, res) {
    try {
      // controller chama o model Autores através
      // do método autor.find({})
      const listaAutores = await autores.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Erro interno no servidor` });
    }
  }

  static async listarAutorPorId (req, res, next) {
    try {
      // controller chama o model autor através
      // do método autor.find({})
      const id = req.params.id;
      const autorEncontrado = await autores.findById(id);

      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        res.status(404).json({ message: "ID do autor não localizado." });
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarAutor (req, res, next)  {
    try {
      const novoAutor = await autores.create(req.body);
      res.status(201).json({message: "Criado com sucesso", livro: novoAutor });
    } catch (erro) {
      next(erro);
    }
  }
    
  static async atualizarAutor (req, res, next) {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async excluirAutor (req, res, next) {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).json({message: "Autor excluído com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;