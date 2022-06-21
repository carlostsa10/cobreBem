import "./estilo.css";
import StatusClienteInforma from "../StatusClienteInforma/index.js";

function StatusCliente(props) {
  return (
    <div className="cardStatusCliente">
      <div className="cabecalhoMiniTabelaClientes">
        <div className="cabecalhoMiniTabelaClientesInfo">
          <img src={props.icon} alt="icone" />
          <h1>{props.titulo}</h1>
        </div>
        <div className="cabecalhoMiniTabelaClientesNumero">
          <h2 style={{ background: props.bgcolor, color: props.color }}>
            {props.quantidade}
          </h2>

        </div>
      </div>
      <div className="miniTabelaClientesCabecalho">
        <div className="miniTabelaNomesClientes">
          <h1>Clientes</h1>
        </div>
        <div className="miniTabelaNomesData">
          <h1>Data de venc.</h1>
        </div>
        <div className="miniTabelaNomesVenc">
          <h1>Valor</h1>
        </div>
      </div>
      <StatusClienteInforma />
      <StatusClienteInforma />
      <StatusClienteInforma />
      <StatusClienteInforma />
      <div className="linkMiniTabela">
        <a href>Ver todos</a>
      </div>
    </div>
  );
}

export default StatusCliente;

