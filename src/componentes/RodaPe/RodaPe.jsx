import './RodaPe.css';

const Rodape = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <span className='texto-copyright'>
        Copyright © {anoAtual} - Todos os direitos reservados - Vinicius Duran.
      </span>
    </footer>
  );
};

export default Rodape;
