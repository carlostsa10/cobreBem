import "./estilo.css";
import IconeFechar from "../../imagens/iconeFechar.svg";
import IconeClientes from "../../imagens/iconeClientes.svg";
import { useState } from "react";

function ModalCadastroDoCliente({
   abrirCadastroCliente,
   setAbrirCadastroCliente,
   cadastrarCliente,
}) {
   const [erroCadastroNome, setErroCadastroNome] = useState(false);
   const [erroCadastroEmail, setErroCadastroEmail] = useState(false);
   const [erroCadastroCpf, setErroCadastroCpf] = useState(false);
   const [erroCadastroTelefone, setErroCadastroTelefone] = useState(false);

   const [form, setForm] = useState({
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      endereco: "",
      complemento: "",
      cep: "",
      bairro: "",
      cidade: "",
      uf: "",
   });

   function handleChangeForm(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   function aplicarCadastro(e) {
      e.preventDefault();

      setErroCadastroNome(false);
      setErroCadastroEmail(false);
      setErroCadastroCpf(false);
      setErroCadastroTelefone(false);

      if (!form.nome) {
         setErroCadastroNome(true);
         return;
      }

      if (!form.email) {
         setErroCadastroEmail(true);
         return;
      }

      if (!form.cpf) {
         setErroCadastroCpf(true);
         return;
      }

      if (!form.telefone) {
         setErroCadastroTelefone(true);
         return;
      }
      console.log(form);

      cadastrarCliente(form);
      cancelarCadastro();
      setAbrirCadastroCliente(false);
   }

   function cancelarCadastro() {
      setForm({
         nome: "",
         email: "",
         cpf: "",
         telefone: "",
         endereco: "",
         complemento: "",
         cep: "",
         bairro: "",
         cidade: "",
         uf: "",
      });

      setErroCadastroNome(false);
      setErroCadastroEmail(false);
      setErroCadastroCpf(false);
      setErroCadastroTelefone(false);
   }

   return (
      <>
         {abrirCadastroCliente && (
            <div className="container-modal-cadastro">
               <div className="container-formulario">
                  <img
                     src={IconeFechar}
                     alt="imagem-de-fechar"
                     className="btn-fechar"
                     onClick={() => setAbrirCadastroCliente(false)}
                  />
                  <div className="container-titulo-cadastro-cliente">
                     <img src={IconeClientes} alt="icone-cliente" />
                     <h1>Cadastro do Cliente</h1>
                  </div>
                  <form className="formularioEditarCliente">
                     <div className="containerInputLongo">
                        <h1>Nome*</h1>
                        <input
                           type="text"
                           placeholder="Digite seu nome"
                           name="nome"
                           value={form.nome}
                           onChange={handleChangeForm}
                        />
                        {erroCadastroNome && (
                           <span className="erroCadastro">
                              Este campo deve ser preenchido
                           </span>
                        )}
                        <h1>E-mail*</h1>
                        <input
                           type="email"
                           placeholder="Digite seu e-mail"
                           name="email"
                           value={form.email}
                           onChange={handleChangeForm}
                        />
                        {erroCadastroEmail && (
                           <span className="erroCadastro">
                              E-mail já cadastrado
                           </span>
                        )}
                     </div>
                     <div className="containerInputMedio containerInputLongoComSpan">
                        <div>
                           <h1>CPF*</h1>
                           <input
                              type="number"
                              placeholder="Digite seu CPF"
                              name="cpf"
                              value={form.cpf}
                              onChange={handleChangeForm}
                           />
                           {erroCadastroCpf && (
                              <span className="erroCadastro">
                                 CPF já cadastrado
                              </span>
                           )}
                        </div>
                        <div>
                           <h1>Telefone*</h1>
                           <input
                              type="email"
                              placeholder="Digite seu Telefone"
                              name="telefone"
                              value={form.telefone}
                              onChange={handleChangeForm}
                           />
                           {erroCadastroTelefone && (
                              <span className="erroCadastro">
                                 Este campo deve ser preenchido
                              </span>
                           )}
                        </div>
                     </div>
                     <div className="containerInputLongo">
                        <h1>Endereço</h1>
                        <input
                           type="text"
                           placeholder="Digite o endereço"
                           name="endereco"
                           value={form.endereco}
                           onChange={handleChangeForm}
                        ></input>
                        <h1>Complemento</h1>
                        <input
                           type="text"
                           placeholder="Digite o complemento"
                           name="complemento"
                           value={form.complemento}
                           onChange={handleChangeForm}
                        ></input>
                     </div>
                     <div className="containerInputMedio">
                        <div>
                           <h1>CEP</h1>
                           <input
                              type="number"
                              placeholder="Digite CEP"
                              name="cep"
                              value={form.cep}
                              onChange={handleChangeForm}
                           ></input>
                        </div>
                        <div>
                           <h1>Bairro</h1>
                           <input
                              type="text"
                              placeholder="Digite o Bairro"
                              name="bairro"
                              value={form.bairro}
                              onChange={handleChangeForm}
                           ></input>
                        </div>
                     </div>
                     <div className="containerInputVariado">
                        <div>
                           <h1>Cidade</h1>
                           <input
                              type="text"
                              className="inputCidade"
                              placeholder="Digite a Cidade"
                              name="cidade"
                              value={form.cidade}
                              onChange={handleChangeForm}
                           ></input>
                        </div>
                        <div>
                           <h1>UF</h1>
                           <input
                              type="texto"
                              className="inputUf"
                              placeholder="Digite a UF"
                              name="uf"
                              value={form.uf}
                              onChange={handleChangeForm}
                           ></input>
                        </div>
                     </div>
                     <div className="containerBtnCadastro">
                        <button
                           type="button"
                           className="btnCancelarCadastro"
                           onClick={() => cancelarCadastro()}
                        >
                           Cancelar
                        </button>
                        <button
                           type="button"
                           className="btnEditarCadastro"
                           onClick={(e) => aplicarCadastro(e)}
                        >
                           Aplicar
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         )}
      </>
   );
}

export default ModalCadastroDoCliente;
