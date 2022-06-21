import './estilo.css';
import IconeTabelaClientes from '../../imagens/iconeTabelaClientes.svg'

function MenuClientesTabela() {
    return (
        <div className='menuClientesTabela'>
            <div className='colunaCliente'>
                <img src={IconeTabelaClientes} alt='icone cliente' />
                <p>Cliente</p>
            </div>
            <div className='colunaTabelaTodos'>
                <p>CPF</p>
            </div>
            <div className='colunaTabelaTodos'>
                <p>E-mail</p>
            </div>
            <div className='colunaTabelaTodos'>
                <p>Telefone</p>

            </div>
            <div className='colunaTabelaTodos'>
                <p>Status</p>

            </div>
            <div className='colunaTabelaTodos'>
                <p>Criar Cobrança</p>
            </div>
        </div>
    )
}

export default MenuClientesTabela;