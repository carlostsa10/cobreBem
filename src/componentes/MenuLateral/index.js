import "./estilo.css";
import HomeAtivo from "../../imagens/iconeHome.svg";
import HomeDesativado from "../../imagens/iconeHomeDesativado.svg";
import ClientesAtivo from "../../imagens/iconeClientesAtivo.svg";
import ClientesDesativado from "../../imagens/iconeClientes.svg";
import CobrancasDesativado from "../../imagens/iconeCobrancas.svg";
import CobrancasAtivado from '../../imagens/iconeCobrancaAtivado.svg'
import { useNavigate } from "react-router-dom";

function MenuLateral(props) {
   const navigateTo = useNavigate();

   return (
      <div className="menuLateral">
         <div
            onClick={() => navigateTo("/home")}
            className={props.pagina === "home" ? "paginaAtualDiv" : ""}
         >

            <img
               src={props.pagina === "home" ? HomeAtivo : HomeDesativado}
               alt="ir para a pagina home"
            />
            <p className={props.pagina === "home" ? "paginaAtualP" : ""}>
               Home
            </p>
         </div>

         <div
            onClick={() => navigateTo("/clientes")}
            className={props.pagina === "clientes" ? "paginaAtualDiv" : ""}
         >

            <img
               src={props.pagina === "clientes" ? ClientesAtivo : ClientesDesativado}
               alt="ir para a pagina clientes"
            />
            <p className={props.pagina === "clientes" ? "paginaAtualP" : ""}>
               Clientes
            </p>
         </div>

         <div
            onClick={() => navigateTo("/cobrancas")}
            className={props.pagina === "cobrancas" ? "paginaAtualDiv" : ""}
         >

            <img
               src={props.pagina === "cobrancas" ? CobrancasAtivado : CobrancasDesativado}
               alt="ir para a pagina cobrancas"
            />
            <p className={props.pagina === "cobrancas" ? "paginaAtualP" : ""}>
               Cobranças
            </p>
         </div>
      </div>
   );
}

export default MenuLateral;
