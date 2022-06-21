import "./estilo.css";
import IconeCobrancaTabela from "../../imagens/iconeCobrancasTabela.svg";
import { useNavigate } from "react-router-dom";

function DadosClientesTabela({ nome, cpf, email, telefone, status }) {
   const navigateTo = useNavigate();

   return (
      <div className="dadosClientesTabela">
         <div
            onClick={() => navigateTo("/clientes/detalhe")}
            className="colunaTabelaTodos"
         >
            <p className="dadoClientesTabelaClique">{nome}</p>
         </div>
         <div className="colunaTabelaTodos">
            <p>{cpf}</p>
         </div>
         <div className="colunaTabelaTodos">
            <p>{email}</p>
         </div>
         <div className="colunaTabelaTodos">
            <p>{telefone}</p>
         </div>
         <div className="colunaTabelaTodos dadoTabelaStatus">
            <p
               className={
                  status === "Inadimplente"
                     ? "dadoTabelaStatusInad"
                     : "dadoTabelaStatusPago"
               }
            >
               {status}
            </p>
         </div>
         <div className="colunaTabelaTodos">
            <img src={IconeCobrancaTabela} alt="icone cobrança tabela" />
         </div>
      </div>
   );
}

export default DadosClientesTabela;
