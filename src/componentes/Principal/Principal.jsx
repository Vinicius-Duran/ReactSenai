import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import Produto from "../Produto/Produto";
import "./Principal.css";

const Principal = () => {
  return (
    <main>
      <BotaoCustomizado
        tipo="primario"
        onClick={() => {
          alert("Salvo com sucesso");
        }}
      >
        Salvar
      </BotaoCustomizado>
      <BotaoCustomizado
        tipo="secundario"
        onClick={() => {
          alert("Gitado com sucesso");
        }}
      >
        Git
      </BotaoCustomizado>
      <BotaoCustomizado
        onClick={() => {
          alert("Configurado com sucesso");
        }}
      >
        Configurar
      </BotaoCustomizado>
      <Produto />
    </main>
  );
};

export default Principal;
