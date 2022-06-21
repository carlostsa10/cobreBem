import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import CadastroCliente from "./paginas/CadastroCliente";
import PaginaLogin from "./paginas/PaginaLogin";
import ResumoCobrancas from "./paginas/ResumoCobrancas";
import { pegarItem } from "./utilidades/localStorage";
import PaginaClientes from "./paginas/PaginaClientes"
import PaginaCobranca from "./paginas/PaginaCobranca";
import PaginaClienteDetalhe from "./paginas/PaginaClienteDetalhe";
import CardCadastroCobranca from "./componentes/CardCadastroCobranca";

function RotaProtegida({ redirecionarPara }) {
   let autenticacao = pegarItem("token");

   return autenticacao ? <Outlet /> : <Navigate to={redirecionarPara} />;
}

function RotasPrincipais() {
   return (
      <Routes>
         <Route path="*" element={<h1>Page Not Found</h1>}></Route>
         <Route path="/">
            <Route path="/" element={<PaginaLogin />}></Route>
            <Route path="/login" element={<PaginaLogin />}></Route>
         </Route>
         <Route path="/cadastro" element={<CadastroCliente />}></Route>
         <Route element={<RotaProtegida redirecionarPara={"/login"} />}>
            <Route path="/home" element={<ResumoCobrancas />} />
            <Route path="/clientes" element={<PaginaClientes />} />
            <Route path="/cobrancas" element={<PaginaCobranca />} />
            <Route path="/clientes/detalhe" element={<PaginaClienteDetalhe/>} />
            <Route path="/teste" element={<CardCadastroCobranca/>} />
         </Route>
      </Routes>
   );
}

export default RotasPrincipais;