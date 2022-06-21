import './estilo.css';
import IconeMais from '../../imagens/iconeMais.svg'
import IconeTabelaClientes from '../../imagens/iconeTabelaClientes.svg'
import UnicoTabelaCobrancaDados from '../UnicoTabelaCobrancaDados';

function UnicoCobrancaCliente() {
    return (
        <div className='unicoCobrancaCliente'>
            <div className='menuUnicoCobrancaCliente'>
                <h1>Cobranças do Cliente</h1>
                <button><img src={IconeMais} alt='icone editar' />Nova Cobrança</button>
            </div>
            <div className='menuTabelaCobranca'>
                <div className='divTabCobrancaTam06Menu'>
                    <img src={IconeTabelaClientes} alt='icone cliente' />
                    <p>ID Cob.</p>
                </div>
                <div className='divTabCobrancaTam06Menu' >
                    <img src={IconeTabelaClientes} alt='icone cliente' />
                    <p>Data de venc.</p>
                </div>
                <div className='divTabCobrancaTam02'>
                    <p>Valor</p>
                </div>
                <div className='divTabCobrancaTam02'>
                    <p>Status</p>
                </div>
                <div className='divTabCobrancaTam05Mod'>
                    <p>Descrição</p>
                </div>
                <div className='divTabCobrancaTam01'>
                </div>
            </div>
            <UnicoTabelaCobrancaDados
                pos1 = "248563147"
                pos2 = "26/01/2021"
                pos3 = "R$ 500,00"
                pos4 = "Pendente"
                pos5 = "lorem ipsum  lorem ipsum lorem ipsuipsum lorem ips,,,"
            />
            <UnicoTabelaCobrancaDados
                pos1 = "248563147"
                pos2 = "26/01/2021"
                pos3 = "R$ 500,00"
                pos4 = "Pago"
                pos5 = "lorem ipsum  lorem ipsum lorem ipsuipsum lorem ips,,,"
            />
            <UnicoTabelaCobrancaDados
                pos1 = "248563147"
                pos2 = "26/01/2021"
                pos3 = "R$ 500,00"
                pos4 = "Vencida"
                pos5 = "lorem ipsum  lorem ipsum lorem ipsuipsum lorem ips,,,"
            />
        </div>
    )
}

export default UnicoCobrancaCliente;