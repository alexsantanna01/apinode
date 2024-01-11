import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./midwares/manipuladorDeErros.js";
const conexao = await conectaNaDatabase();


conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feito com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipuladorDeErros);

export default app;