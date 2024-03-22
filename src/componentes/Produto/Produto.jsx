import "./Produto.css";

const Produto = () => {
  const produtos = [
    {
      nome: "Smartphone Samsung",
      preco: 2999,
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      nome: "Notebook Acer",
      preco: 4999,
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      nome: "Tablet Asus",
      preco: 1499,
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  return (
    <div className="listaProduto">
      <h1>Lista de Produtos</h1>
      {produtos.map((item, index) => {
        return (
          <div key={index} className="itens">
            <span className="nome"> Nome: {item.nome}</span>
            <br />
            <span className="preco"> Preco: {item.preco}</span>
            <br />
            <span className="cores">
              Cores:
              {item.cores.map((cor, index) => {
                return <div key={index} style={{width: 24, height: 24, backgroundColor: cor }} />;
              })}
            </span>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Produto;
