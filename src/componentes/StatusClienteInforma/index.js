import './estilo.css';

function StatusClienteInforma(props) {
  return (
    <div className="cardStatusClienteInformacoes" >
      <div className='miniTabelaNomesClientes'>
        <h1>Cameron Williamson</h1>
      </div>
      <div className='miniTabelaNomesData'>
        <h1>03/02/2021</h1>
      </div>
      <div className='miniTabelaNomesVenc'>
        <h1>R$ 500,00</h1>
      </div>
    </div>
  )
}

export default StatusClienteInforma;

