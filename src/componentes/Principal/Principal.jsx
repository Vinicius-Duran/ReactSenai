import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css';

const Principal = () => {
  return (
    <main>
      <BotaoCustomizado tipo="primario">
        Salvar
      </BotaoCustomizado>
      <BotaoCustomizado tipo="secundario">
        Git
      </BotaoCustomizado>
      <BotaoCustomizado>
        Configurar
      </BotaoCustomizado>
    </main>
  );
};

export default Principal;
