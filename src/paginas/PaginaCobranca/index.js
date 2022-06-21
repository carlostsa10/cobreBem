import "./estilos.css";
import MenuLateral from "../../componentes/MenuLateral";
import Cabecalho from "../../componentes/Cabecalho";
import MenuClientes from "../../componentes/MenuClientes";
import Cobrancas from "../../imagens/iconeCobrancas.svg";
import UnicoTabelaCobrancaEstrutura from "../../componentes/UnicoTabelaCobrancaEstrutura";
import { pegarItem, limparLocalStorage } from "../../utilidades/localStorage";
import axios from "../../servicos/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

function PaginaCobranca() {
   const token = pegarItem("token");
   const navegarPara = useNavigate();
   const [cobrancas, setCobrancas] = useState([]);

   async function carregarCobrancas() {
      try {
         const resposta = await axios.get("/cobrancas", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const novaLista = [...resposta.data];

         novaLista.forEach((element) => {
            const data = element.vencimento
               .substr(0, 10)
               .replace("-", "/")
               .replace("-", "/");
            const dataFormatada = format(new Date(data), "dd/MM/yyyy");
            element.vencimento = dataFormatada;

            const valor = (element.valor / 100).toFixed(2);
            element.valor = valor;
         });

         setCobrancas(novaLista);
      } catch (error) {
         const dataError = error.response.data;

         if (dataError === "jwt expired") {
            limparLocalStorage();
            navegarPara("/login");
         }
      }
   }

   async function cadastrarCobranca(cobranca) {
      try {
         await axios.post("/cobranca", cobranca, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setCobrancas([...cobrancas, cobranca]);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      carregarCobrancas();
   }, []);

   return (
      <div className="paginaCobranca">
         <MenuLateral pagina="cobrancas" />
         <main>
            <Cabecalho titulo="Cobranças" pagina="Estilizada" />
            <MenuClientes
               src={Cobrancas}
               titulo="Cobranças"
               ativarTudo={true}
            />

            <UnicoTabelaCobrancaEstrutura
               cadastrarCobranca={cadastrarCobranca}
               cobrancas={cobrancas}
            />
         </main>
      </div>
   );
}

export default PaginaCobranca;
