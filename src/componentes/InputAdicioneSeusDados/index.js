import { useState } from "react";
import { Link } from "react-router-dom";
import MensagemCadastroSucesso from "../MensagemCadastroSucesso";
import ProgressoInferior from "../ProgressoInferior";
import axios from "../../servicos/api";
import "./estilo.css";

function InputAdicioneSeusDados({ passo, avancarPassoCadastro }) {
   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [senhaConferida, setSenhaConferida] = useState("");

   const [senhaInvalida, setSenhaInvalida] = useState(false);
   const [senhaDiferentes, setSenhaDiferentes] = useState(false);
   const [nomeInvalido, setNomeInvalido] = useState(false);
   const [emailInvalido, setEmailInvalido] = useState(false);

   async function confirmarCadastro(e) {
      e.preventDefault();

      if (!senha && !senhaConferida) {
         setSenhaInvalida(true);
         return;
      }

      if (senha !== senhaConferida) {
         setSenhaInvalida(false);
         setSenhaDiferentes(true);
         return;
      }

      try {
         await axios.post("/usuarios", {
            nome,
            email,
            senha,
         });
         avancarPassoCadastro("tres");
      } catch (error) {
         //todo capturar o erro e trazer para o front
         //remodelar back end, está trazendo erro 500 ao inves de 400 bad request
         console.log("Erro:", error);
      }
   }

   function confirmarNomeEmail() {
      if (!nome) {
         setNomeInvalido(true);
         return;
      } else {
         setNomeInvalido(false);
      }
      if (!email) {
         setEmailInvalido(true);
         return;
      } else {
         setEmailInvalido(false);
      }
      avancarPassoCadastro("dois");
   }

   return (
      <>
         {passo === "um" && (
            <div className="container-adicionar-dados nome-email">
               <h1>Adicione seus dados</h1>
               <form>
                  <label>Nome*</label>
                  <input
                     style={{
                        borderColor: nomeInvalido ? "#E70000" : "#d0d5dd",
                     }}
                     type="text"
                     required="required"
                     placeholder="Digite seu nome"
                     value={nome}
                     onChange={(e) => setNome(e.target.value)}
                  />
                  {nomeInvalido && (
                     <span className="mensagem-erro">Campo Obrigatório</span>
                  )}

                  <label>E-mail*</label>
                  <input
                     style={{
                        borderColor: emailInvalido ? "#E70000" : "#d0d5dd",
                     }}
                     type="email"
                     required="required"
                     placeholder="Digite seu e-mail"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailInvalido && (
                     <span className="mensagem-erro">Campo Obrigatório</span>
                  )}

                  <div className="container-continuar">
                     <button
                        className="btn-rosa"
                        type="button"
                        onClick={confirmarNomeEmail}
                     >
                        Continuar
                     </button>
                     <span>
                        Já possui uma conta? Faça seu
                        <Link to="/" className="link-rosa">
                           Login
                        </Link>
                     </span>
                  </div>
               </form>
               <ProgressoInferior passo={passo} />
            </div>
         )}
         {passo === "dois" && (
            <div className="container-adicionar-dados nome-email">
               <h1>Escolha uma senha</h1>
               <form>
                  <label>Senha*</label>
                  <input
                     style={{
                        borderColor:
                           senhaInvalida || senhaDiferentes
                              ? "#E70000"
                              : "#d0d5dd",
                     }}
                     type="password"
                     placeholder="Digite sua senha"
                     required="required"
                     value={senha}
                     onChange={(e) => setSenha(e.target.value)}
                  ></input>
                  {senhaInvalida && (
                     <span className="mensagem-erro">Campo Obrigatório</span>
                  )}

                  <label>Repita a Senha*</label>
                  <input
                     style={{
                        borderColor: senhaDiferentes ? "#E70000" : "#d0d5dd",
                     }}
                     type="password"
                     placeholder="Repita sua senha"
                     required="required"
                     value={senhaConferida}
                     onChange={(e) => setSenhaConferida(e.target.value)}
                  ></input>
                  {senhaDiferentes && (
                     <span className="mensagem-erro">
                        As senhas não são iguais!
                     </span>
                  )}
                  <div className="container-continuar">
                     <button
                        className="btn-rosa"
                        type="submit"
                        onClick={(e) => confirmarCadastro(e)}
                     >
                        Entrar
                     </button>
                     <span>
                        Já possui uma conta? Faça seu
                        <Link to="/" className="link-rosa">
                           <></>
                           Login
                        </Link>
                     </span>
                  </div>
               </form>
               <ProgressoInferior passo={passo} />
            </div>
         )}
         {passo === "tres" && (
            <div className="container-adicionar-dados container-sucesso">
               <MensagemCadastroSucesso />
               <ProgressoInferior passo={passo} />
            </div>
         )}
      </>
   );
}

export default InputAdicioneSeusDados;
