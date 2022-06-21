import "./estilo.css";
import CardClientesStatus from "../CardClientesStatus/index.js";

function CardCliente(props) {
  return (
    <div className="cardCliente">

      <div className="cabecalho-tabelaClientes">
        <h1>{props.titulo}</h1>
        <h2 style={{ background: props.bgcolor, color: props.color }}>
          {props.quantidade}
        </h2>

      </div>
      <div className="rotulo-tabela-card-clientes">
        <div className='rotulo-tabela-card-clientes-Clientes'>
          <h1>Cliente</h1>
        </div>
        <div className='rotulo-tabela-card-clientes-Rotulo'>
          <h1 className="rotulo-id">ID da Cob.</h1>
        </div>
        <div className='rotulo-tabela-card-clientes-Valor'>
          <h1>Valor</h1>
        </div>
      </div>
      <CardClientesStatus />
      <CardClientesStatus />
      <CardClientesStatus />
      <CardClientesStatus />
      <div className="linkMiniTabela">
        <a href="#">Ver todos</a>
      </div>
    </div>
  );
}

export default CardCliente;
