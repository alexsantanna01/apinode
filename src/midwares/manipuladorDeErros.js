import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
const manipuladorDeErros = (erro, req, res, next) => {
  if (erro instanceof  mongoose.Error.CastError ) {
    res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"});
  } else {
    res
      .status(500)
      .json({ message: `${erro.message} - Erro interno no servidor` });
  }
};

export default manipuladorDeErros;
