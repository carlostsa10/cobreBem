import "./estilos.css";
import MenuLateral from "../../componentes/MenuLateral";
import Cabecalho from "../../componentes/Cabecalho";
import MenuClientes from "../../componentes/MenuClientes";
import MenuClientesTabela from "../../componentes/MenuClientesTabela";
import DadosClientesTabela from "../../componentes/DadosClientesTabela";
import Clientes from "../../imagens/iconeClientes.svg";
import { useEffect, useState } from "react";
import axios from "../../servicos/api";
import { pegarItem, limparLocalStorage } from "../../utilidades/localStorage";
import { useNavigate } from "react-router-dom";

function PaginaClientes() {
   const navegarPara = useNavigate();
   const token = pegarItem("token");
   const [clientes, setClientes] = useState([]);

   async function cadastrarCliente(cliente) {
      try {
         await axios.post("/cliente", cliente, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setClientes([...clientes, cliente]);
      } catch (error) {
         console.log(error);
      }
   }

   async function carregarClientes() {
      try {
         const resposta = await axios.get("/clientes", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         setClientes(resposta.data);
      } catch (error) {
         const dataError = error.response.data;

         if (dataError === "jwt expired") {
            limparLocalStorage();
            navegarPara("/login");
         }
      }
   }

   useEffect(() => {
      carregarClientes();
   }, []);

   return (
      <div className="paginaClientes">
         <MenuLateral pagina="clientes" />

         <main>
            <Cabecalho titulo="Clientes" pagina="Estilizada" />
            <MenuClientes
               src={Clientes}
               titulo="Clientes"
               ativarBotao={true}
               ativarTudo={true}
               cadastrarCliente={cadastrarCliente}
            />

            <div className="tabelaClientes">
               <MenuClientesTabela />
               {clientes.map((cliente) => (
                  <DadosClientesTabela
                     key={cliente.id}
                     nome={cliente.nome}
                     cpf={cliente.cpf}
                     email={cliente.email}
                     telefone={cliente.telefone}
                     status="Pago"
                  />
               ))}
            </div>
         </main>
      </div>
   );
}

export default PaginaClientes;
