import mongoose from "mongoose";

const autorSchema = new mongoose.Schema ({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: {type: String, required: true },
  nacionalidade: {type: String }
}, {versioKey: false});

const autores = mongoose.model("autores", autorSchema);

export default autores;