import "./estilo.css";
import IconeFechar from "../../imagens/iconeFechar.svg";
import { useState } from "react";
import axios from "../../servicos/api";
import { pegarItem, adicionarItem } from "../../utilidades/localStorage.js";

function ModalEditarCadastro({
   setModalEditarCadastro,
   modalEditarCadastro,
   setModalSucesso,
}) {
   //TODO: Olhinho do input de senha
   const [dadosDoUsuario, setDadosDoUsuario] = useState({
      nome: "",
      email: "",
      // cpf: "",
      // telefone: "",
      senha: "",
   });

   const [confirmarSenha, setConfirmarSenha] = useState("");
   const [erroUsuarioNome, setErroUsuarioNome] = useState(false);
   const [erroUsuarioEmail, setErroUsuarioEmail] = useState(false);
   const [erroUsuarioSenha, setErroUsuarioSenha] = useState(false);
   const [erroUsuarioConfSenha, setErroUsuarioConfSenha] = useState(false);

   function atualizarEstadoDadoDoUsuario(e) {
      setDadosDoUsuario({ ...dadosDoUsuario, [e.target.name]: e.target.value });
   }

   async function editarCadastroUsuario(e) {
      e.preventDefault();

      setErroUsuarioNome(false);
      setErroUsuarioEmail(false);
      setErroUsuarioSenha(false);
      setErroUsuarioConfSenha(false);

      if (!dadosDoUsuario.nome) {
         setErroUsuarioNome(true);
         return;
      }

      if (!dadosDoUsuario.email) {
         setErroUsuarioEmail(true);
         return;
      }

      if (!dadosDoUsuario.senha) {
         setErroUsuarioSenha(true);
         return;
      }

      if (!confirmarSenha) {
         setErroUsuarioConfSenha(true);
         return;
      }

      if (dadosDoUsuario.senha !== confirmarSenha) {
         //emitir erro
         return;
      }

      const token = pegarItem("token");

      try {
         await axios.put(
            `/usuario`,
            {
               ...dadosDoUsuario,
            },
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );

         adicionarItem("usuarioNome", dadosDoUsuario.nome);
         setModalEditarCadastro(false);
         setModalSucesso(true);
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div className="container-modal">
         <div className="containerFormularioCadastroHome">
            <div className="cabecalhoEditarUsuario">
               <img
                  src={IconeFechar}
                  alt="imagem-de-fechar"
                  onClick={() => setModalEditarCadastro(!modalEditarCadastro)}
               />
               <h1>Edite seu cadastro</h1>
            </div>
            <form onSubmit={editarCadastroUsuario}>
               <div className="containerLongoUsuario">
                  <div>
                     <h3>Nome*</h3>
                     <input
                        type="text"
                        placeholder="Digite seu nome"
                        name="nome"
                        value={dadosDoUsuario.nome}
                        onChange={atualizarEstadoDadoDoUsuario}
                     />
                     {erroUsuarioNome && (
                        <span className="errorUsuario">
                           Este campo deve ser preenchido
                        </span>
                     )}
                  </div>
                  <div>
                     <h3>E-mail*</h3>
                     <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        name="email"
                        value={dadosDoUsuario.email}
                        onChange={atualizarEstadoDadoDoUsuario}
                     />
                     {erroUsuarioEmail && (
                        <span className="errorUsuario">
                           Este campo deve ser preenchido
                        </span>
                     )}
                  </div>
               </div>
               <div className="containerMedioUsuario">
                  <div>
                     <h3>CPF</h3>
                     <input
                        type="number"
                        placeholder="Digite seu CPF"
                        name="cpf"
                        //value={dadosDoUsuario.cpf}
                        onChange={atualizarEstadoDadoDoUsuario}
                     />
                  </div>
                  <div>
                     <h3>Telefone</h3>
                     <input
                        type="number"
                        placeholder="Digite seu Telefone"
                        name="telefone"
                        //value={dadosDoUsuario.telefone}
                        onChange={atualizarEstadoDadoDoUsuario}
                     />
                  </div>
               </div>
               <div className="containerLongoUsuario">
                  <div className="longoUltimoUsuario">
                     <h3>Senha*</h3>
                     <input
                        type="password"
                        placeholder="••••••••"
                        name="senha"
                        value={dadosDoUsuario.senha}
                        onChange={atualizarEstadoDadoDoUsuario}
                     />
                     {erroUsuarioSenha && (
                        <span className="errorUsuario">
                           Este campo deve ser preenchido
                        </span>
                     )}
                  </div>
                  <div>
                     <h3>Confirmar Senha*</h3>
                     <input
                        type="password"
                        placeholder="••••••••"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                     />
                     {erroUsuarioConfSenha && (
                        <span className="errorUsuario">
                           Este campo deve ser preenchido
                        </span>
                     )}
                  </div>
               </div>
               <div className="botaoAtualizarUsuario">
                  <button>Aplicar</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default ModalEditarCadastro;
