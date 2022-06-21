import "./estilo.css";

function CardClientesStatus(props) {
  return (
    <div className="cardStatusClienteInformacoes">
      <div className="miniTabelaNomesClientes">
        <h1>Cameron {props.name}</h1>
      </div>
      <div className="miniTabelaNomesData">
        <h1>56.656.5</h1>
      </div>
      <div className="miniTabelaNomesVenc">
        <h1>R$ 500,00</h1>
      </div>
    </div>
  );
}

export default CardClientesStatus;
