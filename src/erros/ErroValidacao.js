import ErroRequisicao from "./ErroRequisicao.js";

class ErroValidacao extends ErroRequisicao {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`O seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

export default ErroValidacao;