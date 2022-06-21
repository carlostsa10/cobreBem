import './estilo.css';
import IconeCobrancas from '../../imagens/iconeCobrancasCard.svg'

function CardCadastroCobranca() {
    return (
        <div className='cardCadastroCobrancaModal'>
            <div className='cardCadastroCobranca'>
                <div className='tituloCardCadastroCobranca'>
                    <img src={IconeCobrancas} alt='icone cobranca' />
                    <h1>Cadastro de cobrança</h1>
                </div>
                <form className='formcardCadastroCobranca'>
                    <div className='inputPrimarioCardCadastroCobranca'>
                        <label>Nome*</label>
                        <input placeholder='Sara da Silva' />
                        <label>Descrição*</label>
                        <input className='inputPrimarioDescricaoCardCadastroCobranca' placeholder='Digite a descrição' />
                        {/* <span>Este  campo deve ser preenchido</span> */}
                    </div>
                    <div className='inputSecundarioCardCadastroCobranca'>
                        <div className='inputSecundarioDivsCardCadastroCobranca'>
                            <label>Vencimento:*</label>
                            <input placeholder='Digite o Status' />
                            {/* <span>Este  campo deve ser preenchido</span> */}

                        </div>
                        <div className='inputSecundarioDivsCardCadastroCobranca'>
                            <label>Valor:*</label>
                            <input placeholder='Digite o valor' />
                            {/* <span>Este  campo deve ser preenchido</span> */}
                        </div>
                    </div>
                    <div className='inputTerciarioCardCadastroCobranca'>
                        <label>Status*</label>
                        <div className='inputTerciarioDivsCardCadastroCobranca'>
                            <input className='inputCobrancaChecked' type='radio' placeholder='Digite o valor' />
                            <p>Cobrança Paga</p>
                        </div>
                        <div className='inputTerciarioDivsCardCadastroCobranca'>
                            <input type='radio' placeholder='Digite o valor' />
                            <p>Cobrança Pendente</p>
                        </div>
                    </div>

                    <div className='buttonCardCadastroCobranca'>
                        <button className='buttonCancelarCardCadastroCobranca'>Cancelar</button>
                        <button className='buttonEditarCardCadastroCobranca'>Aplicar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CardCadastroCobranca;