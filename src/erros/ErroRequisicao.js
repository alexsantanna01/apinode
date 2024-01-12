import ErroBase from "./Errobase.js";

class ErroRequisicao extends ErroBase {
  //     constructor(mensagemErro) {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos" ) {
    super(mensagem, 400);
  }
}

export default ErroRequisicao;