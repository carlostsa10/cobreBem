import "./estilo.css";
import IconeFiltro from "../../imagens/iconeFiltro.svg";
import IconeLupa from "../../imagens/iconeLupa.svg";
import IconeMais from "../../imagens/iconeMais.svg";
import ModalCadastroDoCliente from "../ModalCadastroDoCliente/index.js";
import { useState } from "react";

function MenuClientes(props) {
   const [abrirCadastroCliente, setAbrirCadastroCliente] = useState(false);

   function abrirModalCadCliente() {
      setAbrirCadastroCliente(true);
   }

   return (
      <div className="menuClientes">
         <div className="menuClientesEsquerda">
            <img src={props.src} alt="icone clientes" />
            <h1>{props.titulo}</h1>
         </div>
         {props.ativarTudo && (
            <div className="menuClientesDireita">
               {props.ativarBotao && (
                  <button onClick={() => abrirModalCadCliente()}>
                     <img src={IconeMais} alt="icone Mais" />
                     Adicionar Cliente
                  </button>
               )}

               <img
                  className="iconeFiltro"
                  src={IconeFiltro}
                  alt="icone filtro"
               />
               <input placeholder="Pesquisa" />
               <img className="iconeLupa" src={IconeLupa} alt="icone lupa" />
            </div>
         )}

         <ModalCadastroDoCliente
            abrirCadastroCliente={abrirCadastroCliente}
            setAbrirCadastroCliente={setAbrirCadastroCliente}
            cadastrarCliente={props.cadastrarCliente}
         />
      </div>
   );
}

export default MenuClientes;
