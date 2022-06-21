import "./estilo.css";
import IconeTabelaClientes from "../../imagens/iconeTabelaClientes.svg";
import UnicoTabelaCobrancaDados from "../UnicoTabelaCobrancaDados";

function UnicoTabelaCobrancaEstrutura({ cadastrarCobranca, cobrancas }) {
   return (
      <div className="unicoTabelaCobrancaEstrutura">
         <div className="menuTabelaCobranca">
            <div className="divTabCobrancaTam03Menu">
               <img src={IconeTabelaClientes} alt="icone cliente" />
               <p>Cliente</p>
            </div>
            <div className="divTabCobrancaTam06Menu">
               <img src={IconeTabelaClientes} alt="icone cliente" />
               <p>ID Cob.</p>
            </div>
            <div className="divTabCobrancaTam02">
               <p>Valor</p>
            </div>
            <div className="divTabCobrancaTam04">
               <p>Data de venc.</p>
            </div>
            <div className="divTabCobrancaTam02">
               <p>Status</p>
            </div>
            <div className="divTabCobrancaTam05">
               <p>Descrição</p>
            </div>
            <div className="divTabCobrancaTam01"></div>
         </div>
         {cobrancas.map((cobranca) => (
            <UnicoTabelaCobrancaDados
               key={cobranca.id}
               nome={cobranca.nome}
               idCobranca={cobranca.id}
               valor={`R$ ${cobranca.valor}`}
               vencimento={cobranca.vencimento}
               status={cobranca.status}
               descricao={cobranca.descricao}
               maisUmaDiv={true}
            />
         ))}
      </div>
   );
}

export default UnicoTabelaCobrancaEstrutura;
