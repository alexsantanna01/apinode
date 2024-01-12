import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./midwares/manipuladorDeErros.js";
import manipulador404 from "./midwares/manipulador404.js";
const conexao = await conectaNaDatabase();


conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feito com sucesso");
});

const app = express();

// Para registrar um middleware que é executado em todas as requisições para a API, 
// independente da rota ou do método HTTP, utilizamos o método app.use.
app.use(express.json());
app.get("/livros", (req, res, next) => {
  console.log("Middleware registrado no GET da rota /livros");
  next();
});
routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;