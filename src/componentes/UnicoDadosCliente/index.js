import './estilo.css';
import IconeBotaoDadosCliente from '../../imagens/iconeBotaoDadosCliente.svg'

function UnicoDadosCliente() {
    return (
        <div className='unicoDadosCliente'>
            <div className='menuUnicoDadosCliente'>
                <h1>Dados do Cliente</h1>
                <button><img src={IconeBotaoDadosCliente} alt='icone editar' />Editar Cliente</button>
            </div>
            <div className='conteudoDadosUnicoDadosCliente'>
                <div className='dadosUnicoDadosCliente'>
                    <div className='dadosUnicoDadosClienteTam04'>
                        <h1>E-mail</h1>
                        <p>sarasilva@gmail.com</p>
                    </div>
                    <div className='dadosUnicoDadosClienteTam03'>
                        <h1>Telefone</h1>
                        <p>71 9 9462 8654</p>
                    </div>
                    <div className='dadosUnicoDadosClienteTam03'>
                        <h1>CPF</h1>
                        <p>054 365 255 87</p>
                    </div>
                    <div className='dadosUnicoDadosClienteTam03'></div>
                    <div className='dadosUnicoDadosClienteTam02'></div>
                    <div className='dadosUnicoDadosClienteTam01'></div>
                </div>
                <div className='dadosUnicoDadosCliente'>
                    <div className='dadosUnicoDadosClienteTam04'>
                        <h1>Endereço</h1>
                        <p>Rua das Cornélias; nº 512</p>
                    </div>
                    <div className='dadosUnicoDadosClienteTam03'>
                        <h1>Bairro</h1>
                        <p>Oliveiras</p>
                    </div>
                    <div className='dadosUnicoDadosClienteTam03'>
                        <h1>Complemento</h1>
                        <p>Ap: 502</p>
                    </div>
                    <div className='dadosUnicoDadosClienteTam03'>
                        <h1>CEP</h1>
                        <p>031 654 524 04</p>
                    </div>
                    <div className='dadosUnicoDadosClienteTam02'>
                        <h1>Cidade</h1>
                        <p>Salvador</p>
                    </div>
                    <div className='dadosUnicoDadosClienteTam01'>
                        <h1>UF</h1>
                        <p>BA</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UnicoDadosCliente;