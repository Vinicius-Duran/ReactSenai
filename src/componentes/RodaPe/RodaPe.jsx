import "./RodaPe.css"

const RodaPe = () => {
  const anoAtual = new Date().getFullYear();

  return <footer>Copyright © {anoAtual} - Todos os direitos reservados - Vinicius Duran.</footer>;
};

export default RodaPe;
