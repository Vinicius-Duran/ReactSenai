import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Principal.css";
import BotaoContador from "../BotaContador/BotaoContador";
import Produto from "../Produto/Produto";
import React from "react";

const Principal = () => {

  const [exemplo, setExemplo] = React.useState("")

  return (
    <main>
      <nav>
        <BotaoCustomizado tipo="primario" onClick={() => setExemplo("Produto")}>ListaProdutos</BotaoCustomizado>
        <BotaoCustomizado tipo="secundario" onClick={() => setExemplo("botaoContador")}>BotaContador</BotaoCustomizado>
      </nav>
      <nav>

        {exemplo === "Produto" && <Produto></Produto>}
        {exemplo === "botaoContador" && <BotaoContador></BotaoContador>}

      </nav>
    </main>
  );
};

export default Principal;
