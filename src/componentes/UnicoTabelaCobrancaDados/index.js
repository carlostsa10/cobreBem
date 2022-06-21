import "./estilo.css";
import iconeExcluirTabelaCobranca from "../../imagens/iconeExcluirTabelaCobranca.svg";
import iconeEditarTabelaCobranca from "../../imagens/iconeEditarTabelaCobranca.svg";

function UnicoTabelaCobrancaDados(props) {
   return (
      <div className="unicoTabelaCobrancaDados">
         <div className="dadosTabelaCobranca">
            <div
               className={
                  props.maisUmaDiv
                     ? "divTabCobrancaTam03"
                     : "divTabCobrancaTam06"
               }
            >
               <p>{props.nome}</p>
            </div>
            <div className="divTabCobrancaTam06">
               <p>{props.idCobranca}</p>
            </div>
            <div className="divTabCobrancaTam02">
               <p>{props.valor}</p>
            </div>
            {props.maisUmaDiv && (
               <div className="divTabCobrancaTam04">
                  <p>{props.vencimento}</p>
               </div>
            )}
            <div className="divTabCobrancaTam02Dados">
               <div>
                  <h3
                     className={
                        props.status === "Vencida" ||
                        props.vencimento === "Vencida"
                           ? "divTabCobrancaTam02DadosVenc"
                           : props.status === "Pendente" ||
                             props.vencimento === "Pendente"
                           ? "divTabCobrancaTam02DadosPend"
                           : "divTabCobrancaTam02DadosPago"
                     }
                  >
                     {props.maisUmaDiv ? props.status : props.vencimento}
                  </h3>
               </div>
            </div>
            <div
               className={
                  props.maisUmaDiv
                     ? "divTabCobrancaTam05"
                     : "divTabCobrancaTam05Mod"
               }
            >
               <p>{props.maisUmaDiv ? props.descricao : props.status}</p>
            </div>
            <div className="divTabCobrancaTam01">
               <div>
                  <img src={iconeEditarTabelaCobranca} alt="icone editar" />
                  <h4>Editar</h4>
               </div>
               <div>
                  <img src={iconeExcluirTabelaCobranca} alt="icone editar" />
                  <h4>Excluir</h4>
               </div>
            </div>
         </div>
      </div>
   );
}

export default UnicoTabelaCobrancaDados;
